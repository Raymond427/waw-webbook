import React, { useEffect } from 'react'
import { kebabCase } from '../../../utils'
import { ChapterContentListContext } from './ChapterList'

const ArticleContent = ({ title, subTitle, setContentList, children }) => {
    useEffect(() => setContentList(contentList => [ ...contentList, title ]), [])

    const titleKebabCase = kebabCase(title)

    return (
            <article className="chapter-article" id={titleKebabCase}>
                <h2>{title}</h2>
                {subTitle && <h3>{subTitle}</h3>}
                {children}
            </article>
    )
}

const Article = ({ title, subTitle, children }) => {
    return (
        <ChapterContentListContext.Consumer>
            {({ setContentList }) => (
                <ArticleContent title={title} subTitle={subTitle} setContentList={setContentList}>
                    {children}
                </ArticleContent>
            )}
        </ChapterContentListContext.Consumer>
    )
}

export default Article