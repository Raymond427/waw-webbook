import React from 'react'
import Order from '../Order'
import Navigation from '../navigation'
import OrderProvider, { OrderConsumer } from '../provider/OrderProvider'
import { capitalize } from '../../utils'

const Orders = ({ user }) =>
    <OrderProvider user={user}>
        <OrderConsumer>
            {({ orders }) => (
                <div className="Orders page">
                    <Navigation />
                    <h2>Orders</h2>
                    <p>Have a question about an order?</p>
                    <a href="mailto:admin@advancinginnovativeminds.org" target="_blank" rel="noopener noreferrer">
                        Contact Us
                    </a>
                    <div className="orders">
                        {orders.map(({ id, productName, datePurchased, charges }) => 
                            <Order key={id} id={id} productName={productName} datePurchased={datePurchased} charges={[ { name: capitalize(productName), price: charges.product }, { name: 'Processing', price: charges.processing } ]} />)}
                    </div>
                </div>
            )}
        </OrderConsumer>
    </OrderProvider>

export default Orders