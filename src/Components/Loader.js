import React, { useState } from 'react'

import logo from '../Resources/logo.png'
import loadingCircle from '../Resources/loading-circle.gif'

import LoadingTray from '../Components/LoadingTray'

export default function Loader(props) {
    const { level } = props
    return (
        <div className='loader-container'>
            <img src={logo} className='logo-img' alt='Be patient...'/>
            <img src={loadingCircle} className='loading-circle-gif' alt='Be patient...'/>
            <LoadingTray level={level}/>
            <p className='loader-text'>BUDITE STRPLJIVI, STRANICA SE UPRAVO UČITAVA</p>
            <p className='loader-text-bottom'>SAVEZ MLADIH I MUDRIH</p>
        </div>
    )
}
