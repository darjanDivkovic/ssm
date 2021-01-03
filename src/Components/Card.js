import React from 'react'
import Arrow from '../Resources/arrow.png'

export default function Card(props) {
    const { source, heading, text, last = false } = props
    return (
        <div className='card'>
            <img src={source} className='card-image' alt='Be patient'/>
            <h1 className='card-header'>{heading}</h1>
            <p className='card-text'>{text}</p>
            <img src={Arrow} className={last ? 'arrow last' : 'arrow'} alt='Be patient...'/>
        </div>
    )
}
