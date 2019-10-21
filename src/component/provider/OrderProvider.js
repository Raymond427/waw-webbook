import React, { useEffect, useState } from 'react'
import { getOrders } from '../../firebase'

export const { Provider, Consumer } = React.createContext()
export const OrderConsumer = Consumer

export default ({ user, children }) => {
    const [ orders, setOrders ] = useState([])
    useEffect(() => {
        const fetchOrders = () => getOrders(user.user.uid).then(snapShot =>
            setOrders(snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        )
        if (user) {
            fetchOrders()
        }
    }, [])
    
    return (
        <Provider value={{ orders }}>
            {children}
        </Provider>       
    )
}
