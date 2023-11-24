import React, { useEffect, useState } from 'react'
import './BoxComponent.css'

function BoxComponent({ apiKey, productIdentifier }) {

  const [fullScreen, setFullScreen] = useState(false);
  const [productImpact, setProductImpact] = useState();

  const roundOff = (value, decimals = 0) => {
    value = Number(value)
    let scaledValue = value * Math.pow(10, decimals);
    let roundedValue = Math.ceil(scaledValue);
    return roundedValue / Math.pow(10, decimals);
  }

  // it will take input of numbers and return them formatted with commas
  function formatNumberWithCommas(inputString) {
    const num = Number(inputString);

    if (!Number.isFinite(num)) {
      return inputString;
    }

    const parts = String(num).split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Return formatted number
    return parts.join('.');
  }

  const handleClick = (e) => {
    const opt = e.target.getAttribute("opt");
    console.log(opt);
    switch (opt) {
      case "openFullScreen": {
        setFullScreen(true);
        break;
      }
      case "closeFullScreen": {
        setFullScreen(false);
        break;
      }
      default: {
        break;
      }
    }
  }

  const getProductImpact = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_SERVER}/getProductImpact`, {
        method: 'POST',
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          styleId: productIdentifier,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        // Process the data received from the server
        console.log('Received data:', data);
        setProductImpact(data);
      } else {
        // Handle fetch response errors
        console.error('Fetch request failed with status:', res.status);
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error occurred during fetch:', error);
    }
  }

  useEffect(() => {
    if (apiKey && productIdentifier) {
      getProductImpact();
    }
  }, [apiKey, productIdentifier])

  return (
    <div onClick={handleClick}>
      <div opt="closeFullScreen" className={`gs__module__popup__wrapper ${fullScreen ? "show__fullScreen" : "hide__fullScreen"}`}>
        <div className='gs__module__popup'>
          <button className='gs__module__popup__close__btn' opt="closeFullScreen" >Close</button>
          <h2 className='gs__module__popup__values'>End of Life Emission: <span>{productImpact?.totalEndOfLifeEmission}</span></h2>
          <h2 className='gs__module__popup__values'>Manufacturing Emission: <span>{productImpact?.totalManufacturingEmission}</span></h2>
          <h2 className='gs__module__popup__values'>Product Emission: <span>{productImpact?.totalProductEmission}</span></h2>
          <h2 className='gs__module__popup__values'>Raw Material Emission: <span>{productImpact?.totalRawMaterialEmission}</span></h2>
          <h2 className='gs__module__popup__values'>Total Transportation Emission: <span>{productImpact?.totalTransportationEmission}</span></h2>
          <h2 className='gs__module__popup__values'>Total Use Emission: <span>{productImpact?.totalUseEmission}</span></h2>
        </div>
      </div>
      <div opt="openFullScreen" className='gs__widget__wrapper'>
        <h2 opt="openFullScreen" className="gs__widget__heading">{productImpact?.isProductEmissionHigher ? "High" : "Low"} CO2</h2>
        <p opt="openFullScreen" className="gs__widget__content">
          {(productImpact?.isProductEmissionHigher ? "" : "-") + roundOff(productImpact?.percentageDifference)}% compared to a similar product
        </p>
        <div className='gs__widget__widget__footer'>
          <p className='gs__widget__widget__footer__text'>Learn More</p>
          <img opt="openFullScreen" className="gs__widget__widget__footer__img" src="https://portalgreenstitch.azurewebsites.net/assets/images/loginLogo.svg" />
        </div>
      </div>
    </div>
  )
}

export default BoxComponent