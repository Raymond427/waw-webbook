import React from 'react'
import ChapterCarousel from './ChapterCarousel'
import chapters from '../../../data/chapters.json'
import Div100vh from 'react-div-100vh'

const Home = () =>
    <Div100vh>
        <ChapterCarousel chapters={chapters} />
    </Div100vh>

export default Home