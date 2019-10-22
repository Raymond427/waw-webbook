import React from 'react'
import OrderProvider, { OrderConsumer } from './OrderProvider'
import ChapterProvider, { ChapterConsumer } from './ChapterProvider'
import UserProvider, { UserContext } from './UserProvider'
import { compareChapterNames, addPurchasedProp } from '../../utils'

const UserChapterAndOrderProvider = ({ children }) => (
    <UserProvider>
        <UserContext.Consumer>
            {({ user }) => (
                <OrderProvider user={user}>
                    <OrderConsumer>
                        {({ orders }) => (
                            <ChapterProvider>
                                <ChapterConsumer>
                                    {({ chapters }) => children({ user, orders, chapters: addPurchasedProp(user, orders, chapters).sort(compareChapterNames)})}
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