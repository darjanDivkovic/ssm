import React, { useRef, useState } from 'react'

import Cards from './Cards'
import Login from './Login'

import logo from '../Resources/logo-white-small.png'
import userIcon from '../Resources/user-icon.png'

import vawes from '../Resources/vawes.png'
import laptop from '../Resources/laptop.png'
import mouse from '../Resources/mouse.png'
import coffee from '../Resources/coffee.png'
import phone from '../Resources/phone.png'
import note1 from '../Resources/note-1.png'
import note2 from '../Resources/note-2.png'
import fb from '../Resources/fb.png'
import registerIcon from '../Resources/register-icon.png'
import arrows from '../Resources/arrows.png'

import Form from '../Components/FormComponent'

export default function Home() {
    const myRef = useRef(null)
    const myRef2 = useRef(null)
    const [ isFormOpen, setFormOpen ] = useState(false)


    const executeScrollTop = () => myRef.current.scrollIntoView()
    const executeScrollCards = () => myRef2.current.scrollIntoView()
    return (
        <div className='home-container'>
            { isFormOpen ?
              <Form setFormOpen={setFormOpen}/>
              :
              null
            }
            <div ref={myRef} className='home-paper'>
            <img src={vawes} className='vawes3' alt='Be patient...'/>
                <div className='paper-back'>
                <img src={vawes} className='vawes1' alt='Be patient...'/>
                <img src={vawes} className='vawes2' alt='Be patient...'/>
                    <img src={vawes} className='vawes' alt='Be patient...'/>
                    <img src={laptop} className='laptop' alt='Be patient...'/>
                    <img src={mouse} className='mouse' alt='Be patient...'/>
                    <img src={coffee} className='coffee' alt='Be patient...'/>
                    <img src={phone} className='phone' alt='Be patient...'/>
                    <img src={note1} className='note1' alt='Be patient...'/>
                    <img src={note2} className='note2' alt='Be patient...'/>
                    <a href='https://www.facebook.com/SolucijaMladihIMudrih' target='_' className='fb'>
                        <img src={fb} className='fb-icon' alt='Be patient...'/>
                        SOLUCIJA MLADIH I MUDRIH
                    </a>
                    <div className='small-navbar-links'>
                        <a>FACEBOOK</a>
                        <a>INSTAGRAM</a>
                    </div>
                    <div className='direction-div' onClick={() => executeScrollCards()}>
                        <p>ŠTA TREBATE URADITI ?</p>
                        <img src={arrows} className='arrows' alt='Be patient...'/>
                    </div>
                </div>
                <div className='nav-bar'>
                <img src={logo} className='logo-small' alt='Be patient...'/>
                <p className='logo-text'>SOLUCIJA MLADIH I MUDRIH</p>
                <div className='nav-side-div'>
                <p>PRIJAVA</p>
                <img src={userIcon} className='user-icon' alt='Be patient...'/>    
                </div>
                </div>
                <div className='text-container'>
                <p className='hero-text'>Postani dio mlade i sposobne organizacije,</p>
                <button className='register-btn'
                        onClick={() => setFormOpen(true)}>
                    <img src={registerIcon} class='register-icon'/>
                    REGISTRUJ SE
                </button>
                </div>
                <hr ref={myRef2} style={{visibility: 'hidden'}}/>
                <Cards/>
                <div className='bottom-mobile'>
                <img onClick={() => executeScrollTop()}src={arrows} className='arrows' alt='Be patient...'/>
                <p>NAZAD NA VRH</p>
                <button className='register-btn' onClick={() => setFormOpen(true)}>
                    <img src={registerIcon} class='register-icon'/>
                    REGISTRUJ SE
                </button>
                <a href='https://www.facebook.com/SolucijaMladihIMudrih' target='_' className='fb bot'>
                        <img src={fb} className='fb-icon bottom' alt='Be patient...'/>
                        SOLUCIJA MLADIH I MUDRIH
                    </a>
                </div>
            </div>
        </div>
    )
}
