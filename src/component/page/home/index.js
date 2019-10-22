import React from 'react'
import HomeContent from './HomeContent'
import Div100vh from 'react-div-100vh'

const Home = ({ chapters }) =>
    <Div100vh>
        <HomeContent chapters={chapters} />
    </Div100vh>

export default Home