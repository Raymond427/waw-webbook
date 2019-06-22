import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Router } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import history from './history'

ReactDOM.render(
    <Router history={history}>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
)
