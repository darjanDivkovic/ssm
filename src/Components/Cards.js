import React from 'react'

import Card from '../Components/Card'

import icon1 from '../Resources/card1-icon.png'
import icon2 from '../Resources/card2-icon.png'
import icon3 from '../Resources/card3-icon.png'
import icon4 from '../Resources/card4-icon.png'
import icon5 from '../Resources/card5-icon.png'

export default function Cards() {
    const headers = [
        'ISPUNITE FORMULAR',
        'POSTANITE ČLAN',
        'SAČEKAJTE ČLANSKU KARTICU',
        'IMAMO POSAO ZA VAS ?',
        'OBAVJEŠTAVAMO VAS O PRILICI ZA POSAO!',
    ]

    const texts = [
        'U samo nekoliko minuta popunite svoju prijavu',
        'Vaša registracija je pregledana i sačuvana, postali ste članom organizacije',
        'Članska kartica našeg udruženja bit će poslana na vašu adresu',
        'Naša organizacija može imati ponudu za posao koji odgovara baš vama, prema onome što ste naveli',
        'Ukoliko pronađemo odgovarajuću poziciju za vas, ubrzo ćemo vas kontaktirati'
    ]
    return (
        <div className='cards-container'>
            <div className='cards-upper'>
            <Card source={icon1} heading={headers[0]} text={texts[0]}/>
            <Card source={icon2} heading={headers[1]} text={texts[1]}/>
            <Card source={icon3} heading={headers[2]} text={texts[2]}/>
            </div>
            <div className='cards-lower'>
            <Card source={icon4} heading={headers[3]} text={texts[3]}/>
            <Card source={icon5} heading={headers[4]} text={texts[4]} last={true}/>
            </div>
        </div>
    )
}
