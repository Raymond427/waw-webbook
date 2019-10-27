import React, { useState, useEffect } from 'react'
import Star from '../../icon/Star'

const RatingInput = ({ id, showErrors, required, onBlur, onValid, onInValid, valueHook, maxValue = 5 }) => {
    const [ rating, setRating ] = useState(0)
    const isValid = () => required ? rating > 0 : true

    const onRatingButtonClick = (event, value) => {
        event.preventDefault()
        setRating(value)
    }

    useEffect(() => valueHook(rating), [ rating ])
    
    useEffect(() => {
        valueHook(rating)
        isValid() ? onValid() : onInValid()
    }, [])

    return (
        <div id={id} className={`${showErrors ? `rating__wrapper--invalid rating__wrapper` : 'rating__wrapper'}`} onBlur={() => onBlur(isValid())}>
            {[ ...Array(maxValue).keys() ].map(
                idx => {
                    const value = idx + 1

                    return(
                        <button className="rating-button" key={value} onClick={event => onRatingButtonClick(event, value)}>
                            <Star className="rating__input-star" id={`rating__input-star-${value}-${id}`} highlight={value <= rating} highlightColor={'yellow'} defaultColor={'white'} />
                        </button>
                    )
                }
            )}
                
        </div>
    )
}

export default RatingInput