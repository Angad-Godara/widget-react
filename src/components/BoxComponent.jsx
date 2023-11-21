import React from 'react'
import './BoxComponent.css'

function BoxComponent({apiKey, productIdentifier}) {
    console.log(apiKey);
  return (
    <div className='gs__widget__wrapper'>
        <h2 className="gs__widget__heading">CARBON FOOTPRINT TRACKER</h2>
        <img className="gs__widget__test__img" src="https://portalgreenstitch.azurewebsites.net/assets/images/loginLogo.svg" />
        <p className="gs__widget__content">Mehr Transparenz für fundiertere Entscheidungen: wir wollen Produkte mit dem geringstmöglichen CO2-Fußabdruck anbieten. Zusammen mit Carbonfact haben wir den Footprint unserer Jeans ermittelt.</p>
    </div>
  )
}

export default BoxComponent