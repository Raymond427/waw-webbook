import React from 'react'

const Quote = ({ author, children }) => (
    <section className="chapter-quote">
        <span className="chapter-quote-icon start-quote">"</span>
        <blockquote>{children}</blockquote>
        <span className="chapter-quote-icon end-quote">"</span>
        <p>- {author}</p>
    </section>
)

export default Quote