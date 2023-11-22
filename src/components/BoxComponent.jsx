import React, { useState } from 'react'
import './BoxComponent.css'

function BoxComponent({ apiKey, productIdentifier, hey = false }) {

  const [fullScreen, setFullScreen] = useState(false);

  console.log(apiKey, hey);

  const handleClick = (e) =>{
    const opt = e.target.getAttribute("opt");
    console.log(opt);
    switch (opt){
      case "openFullScreen":{
        setFullScreen(true);
        break;
      }
      case "closeFullScreen":{
        setFullScreen(false);
        break;
      }
      default:{
        break;
      }
    }
  }

  return (
    <div onClick={handleClick}>
      <div opt="closeFullScreen" className={`gs__module__popup__wrapper ${fullScreen ? "show__fullScreen" : "hide__fullScreen"}`}>
        <div className='gs__module__popup'>
          <p>Laut Carbonfact is der Fußabdruck 9kgCO2.
Dies ist 39% weniger im Vergleich zu ähnlichen Produkten. Hier sind die Details:</p>
          <p>Laut Carbonfact is der Fußabdruck 9kgCO2.
Dies ist 39% weniger im Vergleich zu ähnlichen Produkten. Hier sind die Details:</p>
          <p>Laut Carbonfact is der Fußabdruck 9kgCO2.
Dies ist 39% weniger im Vergleich zu ähnlichen Produkten. Hier sind die Details:</p>
          <p>Laut Carbonfact is der Fußabdruck 9kgCO2.
Dies ist 39% weniger im Vergleich zu ähnlichen Produkten. Hier sind die Details:</p>
          <p>Laut Carbonfact is der Fußabdruck 9kgCO2.
Dies ist 39% weniger im Vergleich zu ähnlichen Produkten. Hier sind die Details:</p>
          <p>Laut Carbonfact is der Fußabdruck 9kgCO2.
Dies ist 39% weniger im Vergleich zu ähnlichen Produkten. Hier sind die Details:</p>
<button opt="closeFullScreen" >Close</button>
        </div>
      </div>
      <div opt="openFullScreen" className='gs__widget__wrapper'>
        <h2 opt="openFullScreen" className="gs__widget__heading">CARBON FOOTPRINT TRACKER</h2>
        <img opt="openFullScreen" className="gs__widget__test__img" src="https://portalgreenstitch.azurewebsites.net/assets/images/loginLogo.svg" />
        <p opt="openFullScreen" className="gs__widget__content">Mehr Transparenz für fundiertere Entscheidungen: wir wollen Produkte mit dem geringstmöglichen CO2-Fußabdruck anbieten. Zusammen mit Carbonfact haben wir den Footprint unserer Jeans ermittelt.</p>
      </div>
    </div>
  )
}

export default BoxComponent