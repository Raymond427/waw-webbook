import React, { useState, useEffect } from 'react'
import Star from '../Star'

const RatingInput = ({ id, showErrors, required, onBlur, onValid, onInValid, valueHook, maxValue = 5 }) => {
    const [ rating, setRating ] = useState(0)
    const isValid = () => required ? rating > 0 : true

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
                        <Star className={`rating__input-${value}`} id={`rating__input-${value}-${id}`} key={value} highlight={value <= rating} highlightColor={'yellow'} defaultColor={'white'} onClick={() => setRating(value)} />
                    )
                }
            )}
                
        </div>
    )
}

export default RatingInput