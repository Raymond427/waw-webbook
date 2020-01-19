import React, { useState, useEffect, createRef } from 'react'
import dialogPolyfill from 'dialog-polyfill'
import '../../styles/Dialog.css'
import { DIALOG } from '../../utils/constants'
import IOSInstallDialog from './IOSInstallDialog'
import AndroidInstallDialog from './AndroidInstallDialog'
import NotificationDialog from './NotificationDialog'
import UpdateDialog from './UpdateDialog'
import X from '../icon/X'

export const { Provider, Consumer: DialogConsumer } = React.createContext()

const DialogContent = ({ type, addToHomeScreen, closeDialog }) => {
    switch (type) {
        case DIALOG.IOS_INSTALL:
            return <IOSInstallDialog />
        case DIALOG.ANDROID_INSTALL:
            return <AndroidInstallDialog addToHomeScreen={addToHomeScreen} closeDialog={closeDialog} />
        case DIALOG.NOTIFICATION_PERMISSION:
            return <NotificationDialog closeDialog={closeDialog} />
        case DIALOG.UPDATE_AVAILABLE:
            return <UpdateDialog closeDialog={closeDialog} />
        default:
    }
}

const Dialog = ({ addToHomeScreen, children }) => {
    const [ showing, setShowing ] = useState(false)
    const [ type, setType ] = useState('')
    const dialogRef = createRef()

    const closeDialog = () => {
        dialogRef.current.close()
        setShowing(false)
    }

    const showDialog = dialogContentType => {
        setType(dialogContentType)
        setShowing(true)
    }

    const closeIfEscapeKeyIsPressed = e => {
        if(e.keyCode === 27) {
            setShowing(false)
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
                    <button className="dialog-close-button" onClick={closeDialog}><X /></button>
                    <DialogContent type={type} addToHomeScreen={addToHomeScreen} closeDialog={closeDialog} />
                </dialog>
            )}
            {children}
        </Provider>
    )
}

export default Dialog