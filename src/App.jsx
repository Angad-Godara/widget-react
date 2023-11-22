import { useEffect } from 'react'
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'
import BoxComponent from './components/BoxComponent'

function App() {
  useEffect(() => {
    function renderComponents() {
      const elements = document.querySelectorAll('div[data-gs][data-productidentifier][data-apikey]');
      elements.forEach((element) => {
        const productIdentifier = element.getAttribute('data-productidentifier');
        const apiKey = element.getAttribute('data-apikey');

        if (validateApiKeys(apiKey, productIdentifier)) {
          element.classList.add('gs__widget__wrapper');
          const boxElement = <BoxComponent apiKey={apiKey} productIdentifier={productIdentifier} />;
          ReactDOM.render(boxElement, element); // Render directly into the selected div element
        }
      });
    }

    function validateApiKeys(apiKey, productIdentifier) {
      if (apiKey && productIdentifier) {
        return true;
      }
      return false;
    }

    renderComponents();
  }, []);

  return (
    <></>
  );
}

export default App
