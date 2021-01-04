import React from 'react'

export default function ErrorMessage(props) {
    const { message, clearErrorMsg } = props
    return (
        <div className='error-msg-container'>
            {message}
            <button className='close-error-msg-container' onClick={() => clearErrorMsg()}>x</button>
        </div>
    )
}
