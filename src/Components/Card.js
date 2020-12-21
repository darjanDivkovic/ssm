import React from 'react'

export default function Card(props) {
    const { source, heading, text } = props
    return (
        <div className='card'>
            <img src={source} className='card-image' alt='Be patient'/>
            <h1 className='card-header'>{heading}</h1>
            <p className='card-text'>{text}</p>
        </div>
    )
}
