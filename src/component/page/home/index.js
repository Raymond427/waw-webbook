import React from 'react'
import HomeContent from './HomeContent'
import Div100vh from 'react-div-100vh'
import { compareChapterNames } from '../../../utils'
import ChapterProvider, { ChapterConsumer } from '../../provider/ChapterProvider'
import OrderProvider, { OrderConsumer } from '../../provider/OrderProvider'

const Home = ({ user }) =>
    <Div100vh>
        <OrderProvider user={user}>
            <OrderConsumer>
                {({ orders }) => (
                    <ChapterProvider>
                        <ChapterConsumer>
                            {({ chapters }) => {
                                const chapterDetails = chapters.map(chapter => ({
                                    ...chapter,
                                    purchased: (user && orders.some(order => order.productName === chapter.name))
                                }))
                                return (<HomeContent chapters={chapterDetails.sort(compareChapterNames)} />)
                            }}
                        </ChapterConsumer>
                    </ChapterProvider>
                )}
            </OrderConsumer>
        </OrderProvider>
    </Div100vh>

export default Home