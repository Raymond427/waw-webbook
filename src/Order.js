import React from 'react'
import './styles/Order.css'
import { usdFormat, totalPrice, formatDate } from './utils'

const Order = ({ id, productName, datePurchased, items }) =>
    <div className="Order">
        <p>{productName}</p>
        {id && <p>{`Order ID: ${id}`}</p>}
        {datePurchased && <p>{formatDate(datePurchased)}</p>}
        <div className="items-container">
            {items.map(({ name, price }, idx) =>
                <div className="item" key={`${name}-${idx}`}>
                    <span>{name}</span>
                    <span>{usdFormat(price)}</span>
                </div>
            )}
            <div className="item">
                <span>Total:</span>
                <span>{usdFormat(totalPrice(items))}</span>
            </div>
        </div>
    </div>

export default Order