import React, { useState, useEffect, createRef } from 'react'
import dialogPolyfill from 'dialog-polyfill'
import '../../styles/Dialog.css'
import { DIALOG, NOTIFICATION_PERMISSION_STATUS } from '../../utils/constants'
import IOSInstallDialog from './IOSInstallDialog'
import AndroidInstallDialog from './AndroidInstallDialog'
import NotificationDialog from './NotificationDialog'
import UpdateDialog from './UpdateDialog'
import X from '../icon/X'

export const { Provider, Consumer: DialogConsumer } = React.createContext()

const DialogContent = ({ type, addToHomeScreen, onClose }) => {
    switch (type) {
        case DIALOG.IOS_INSTALL:
            return <IOSInstallDialog />
        case DIALOG.ANDROID_INSTALL:
            return <AndroidInstallDialog homeSreenPrompt={addToHomeScreen} onClose={onClose} />
        case DIALOG.NOTIFICATION_PERMISSION:
            return <NotificationDialog onClose={onClose} />
        case DIALOG.UPDATE_AVAILABLE:
            return <UpdateDialog onClose={onClose} />
        default:
    }
}

const Dialog = ({ addToHomeScreen, children }) => {
    const [ showing, setShowing ] = useState(false)
    const [ type, setType ] = useState('')
    const dialogRef = createRef()

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close()
        }
        setShowing(false)
    }

    const showDialog = dialogContentType => {
        setType(dialogContentType)
        setShowing(true)
    }

    const onClose = () => {
        const showNotificationDialog = (type === DIALOG.IOS_INSTALL || type === DIALOG.ANDROID_INSTALL) && Notification.permission === NOTIFICATION_PERMISSION_STATUS.DEFAULT
        showNotificationDialog ? showDialog(DIALOG.NOTIFICATION_PERMISSION) : closeDialog()
    }

    const closeIfEscapeKeyIsPressed = e => {
        if(e.keyCode === 27) {
            onClose()
        }
    }

    const openUpdateAvailableDialog = () => {
        showDialog(DIALOG.UPDATE_AVAILABLE)
    }

    useEffect(() => {
        navigator.serviceWorker.addEventListener('message', e => {
            if (e.data.type === 'updateAvailable') {
                openUpdateAvailableDialog()
            }
        })
        document.addEventListener('keydown', closeIfEscapeKeyIsPressed)
        return () => document.removeEventListener('keydown', closeIfEscapeKeyIsPressed)
    }, [])

    useEffect(() => {
        if (showing) {
            dialogPolyfill.registerDialog(dialogRef.current)
            dialogRef.current.showModal()
        }
    }, [ showing ])

    return (
        <Provider value={{ showDialog }}>
            {showing && (
                <dialog ref={dialogRef}>
                    <button className="dialog-close-button" onClick={onClose}><X /></button>
                    <DialogContent type={type} addToHomeScreen={addToHomeScreen} onClose={onClose} />
                </dialog>
            )}
            {children}
        </Provider>
    )
}

export default Dialog