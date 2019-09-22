import React from 'react'
import ChapterCarousel from '../ChapterCarousel'
import chapters from '../data/chapters.json'

const Home = () => <ChapterCarousel chapters={chapters} />

export default Home