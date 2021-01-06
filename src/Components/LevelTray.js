import React from 'react'

import styled, { keyframes } from 'styled-components'
import HEADERS from './Constants'

export default function LevelTray(props) {

    const Tray = styled.hr`
    width: ${props => props.level * 10}%;
    background-color: #7B21FD;
    border: 2px solid #7B21FD;
    margin-left: 0;
    top: -8px;
    position: absolute;
    `
    const Beadle = styled.div`
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${props => props.isOn ? '#7B21FD' : '#b3b3b3'};
      display: flex;
      align-items: center;
      position: realative;
    `
    
    const { level } = props
    return (
        <div className='level-tray'>
            <div className='trays-container'>
            <hr className='tray-hr'/>
            <Tray level={level}/>
            <div className='beadles-container'>
                {
                    HEADERS.map((header, iteration)=> <Beadle isOn={iteration <= level}/>)
                }
            </div>
            </div>
        </div>
    )
}
