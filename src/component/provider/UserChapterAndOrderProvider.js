import React from 'react'
import OrderProvider, { OrderConsumer } from './OrderProvider'
import ChapterProvider, { ChapterConsumer } from './ChapterProvider'
import UserProvider, { UserContext } from './UserProvider'

const UserChapterAndOrderProvider = ({ children }) => (
    <UserProvider>
        <UserContext.Consumer>
            {({ user }) => (
                <OrderProvider user={user}>
                    <OrderConsumer>
                        {({ orders }) => (
                            <ChapterProvider user={user} orders={orders}>
                                <ChapterConsumer>
                                    {({ chapters }) => children({ user, orders, chapters })}
                                </ChapterConsumer>
                            </ChapterProvider>
                        )}
                    </OrderConsumer>
                </OrderProvider>
            )}
        </UserContext.Consumer>
    </UserProvider>
)

export default UserChapterAndOrderProvider