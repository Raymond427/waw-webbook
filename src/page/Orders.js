import React from 'react'
import orders from '../data/orders.json'
import Order from '../Order.js'
import Navigation from '../Navigation'
import '../styles/Orders.css'

const Orders = () =>
    <div className="Orders page">
        <Navigation />
        <h2>Orders</h2>
        <p>Have a question about an order?</p>
        <a href="mailto:admin@advancinginnovativeminds.org" target="_blank" rel="noopener noreferrer">
            Contact Us
        </a>
        <div className="orders">
            {orders.map(({ id, productName, datePurchased, items }) => <Order key={id} id={id} productName={productName} datePurchased={datePurchased} items={items} />)}
        </div>
    </div>

export default Orders