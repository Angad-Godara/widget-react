import React, { useEffect } from 'react';
import './App.css';
import BoxComponent from './components/BoxComponent';
import ReactDOM from 'react-dom'

function App() {
  useEffect(() => {
    function renderComponents() {
      const elements = Array.from(document.querySelectorAll('div[data-gs][data-productidentifier][data-apikey]'));

      elements.forEach((element) => {
        const productIdentifier = element.getAttribute('data-productidentifier');
        const apiKey = element.getAttribute('data-apikey');

        if (validateApiKeys(apiKey, productIdentifier)) {
          element.classList.add('gs__widget__wrapper');
          const boxElement = (
            <BoxComponent apiKey={apiKey} productIdentifier={productIdentifier} />
          );
          ReactDOM.hydrate(boxElement, element); // Hydrate the component into the selected div element
        }
      });
    }

    function validateApiKeys(apiKey, productIdentifier) {
      return apiKey && productIdentifier;
    }

    renderComponents();
  }, []);

  return <div
  data-gs
  data-productidentifier="PRODUCT_SKU"
  data-apikey="API_KEY"
  data-layout="small"
  data-lang="en"
></div>; // Returning null as no elements need to be rendered within App component
}

export default App;
