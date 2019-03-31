import React, { useState } from 'react'
import Payment from './Payment'
import Authentication from './Authentication'

const Home = () => {
    const [ showCheckOutForm, setShowCheckOutForm ] = useState(false)

    return(
        <div>
            <Authentication />
            <button onClick={() => setShowCheckOutForm(!showCheckOutForm)}>{ showCheckOutForm ? 'Cancel Payment' : 'Buy Nothing: $5.00'}</button>
            { showCheckOutForm && <Payment />}
        </div>
    )
}

export default Home