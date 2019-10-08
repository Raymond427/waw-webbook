import React from 'react'

export default ({ color= 'var(--primary-text-color)'}) =>
    <svg className="account-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" x="0px" y="0px">
        <g>
            <path fill={color} d="M29,16A13,13,0,1,0,7.15,25.5a1,1,0,0,0,.47.42,12.94,12.94,0,0,0,16.76,0,1,1,0,0,0,.47-.42A13,13,0,0,0,29,16ZM5,16a11,11,0,1,1,19.78,6.59C23.9,19.4,20.3,17,16,17s-7.9,2.4-8.78,5.59A10.9,10.9,0,0,1,5,16Zm4,8.48v-.35C9,21.3,12.14,19,16,19s7,2.3,7,5.13v.35a11,11,0,0,1-14,0Z"/>
            <path fill={color} d="M16,16a5,5,0,1,0-5-5A5,5,0,0,0,16,16Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,16,8Z"/>
        </g>
    </svg>