import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BoxComponent from './components/BoxComponent';

function renderComponents(refresh=false) {
  const elements = document.querySelectorAll('div[data-gs][data-productidentifier][data-apikey]');
  elements.forEach((element) => {
    const dataAdded = element.getAttribute('data-loaded');
    if(!dataAdded){
      element.classList.add("gs__widget__wrapper")
      element.setAttribute("data-loaded", "true");
      const productIdentifier = element.getAttribute('data-productidentifier');
      const apiKey = element.getAttribute('data-apikey');
      if (validateApiKeys(apiKey, productIdentifier)) {
        const box = document.createElement('div');
        const boxElement = <BoxComponent apiKey={apiKey} productIdentifier={productIdentifier} />;
        ReactDOM.createRoot(element).render(boxElement);
        element.appendChild(box);
      }
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

  const observer = new MutationObserver(() => renderComponents(true));

  // Configuration of the observer (you can customize this based on your requirements)
  const observerConfig = {
    childList: true, // Watch for changes in the children of the observed node
    subtree: true,   // Watch for changes in the entire subtree
    parent: true
  };
  
  // Start observing the target node for configured changes
  observer.observe(document.body, observerConfig);