import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location }) => {
    useEffect(() => {
        window.location.hash === '' && window.scrollTo(0, 0)
    }, [ window.location.href ])

    return children
}

export default withRouter(ScrollToTop)