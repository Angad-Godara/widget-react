import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BoxComponent from './components/BoxComponent';

function renderComponents() {
  const elements = document.querySelectorAll('div[data-cf][data-productIdentifier][data-apiKey]');
  elements.forEach((element) => {
    const productIdentifier = element.getAttribute('data-productIdentifier');
    const apiKey = element.getAttribute('data-apiKey');
    if (validateApiKeys(apiKey, productIdentifier)) {
      const box = document.createElement('div');
      const boxElement = <BoxComponent apiKey={apiKey} productIdentifier={productIdentifier} />;
      ReactDOM.render(boxElement, box);
      element.appendChild(box);
    }
  });
}

  // Function to validate API keys (sample synchronous validation)
  function validateApiKeys(apiKey, productIdentifier) {
    // You might implement server-side validation here
    // For example, making an API request to validate the keys

    // Sample synchronous validation - Replace this with your actual validation logic
    if (apiKey && productIdentifier) {
      // Mock validation by checking if both API key and product identifier are present
      return true;
    }
    return false;
  }

document.addEventListener('DOMContentLoaded', renderComponents);