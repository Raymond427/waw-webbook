import React from 'react'
import './styles/Order.css'

const usdFormat = num => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
}).format(num / 100)

const Order = ({ id, productName, datePurchased, items }) =>
    <div className="Order">
        <p>{productName}</p>
        <p>{`Order ID: ${id}`}</p>
        {datePurchased && <p>{new Date(datePurchased).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>}
        <div className="items-container">
            {items.map(({ name, price }, idx) =>
                <div className="item" key={`${name}-${idx}`}>
                    <span>{name}</span>
                    <span>{usdFormat(price)}</span>
                </div>
            )}
            <div className="item">
                <span>Total:</span>
                <span>{usdFormat(items.reduce((total, { price }) => total + price, 0))}</span>
            </div>
        </div>
    </div>

export default Order