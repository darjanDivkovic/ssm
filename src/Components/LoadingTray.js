import React, { useState } from 'react'

import styled from 'styled-components'

const LoadingLine = styled.div`
    width: ${props => props.level * 10 }%;
    height: 8px;
    border-radius: 7px;
    background-color: #fff;
    position: absolute;
    top: 0;
    transition: 1s;
`

export default function LoadingTray(props) {
    const { level } = props
    return (
        <div className='loading-tray-container'>
            <div className='tray-background'></div>
            <LoadingLine level={level}/>
        </div>
    )
}
