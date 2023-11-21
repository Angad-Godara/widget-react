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
      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <BoxComponent apiKey={apiKey} productIdentifier={productIdentifier} />
        </React.StrictMode>,
      )
    }
  });
}

document.addEventListener('DOMContentLoaded', renderComponents);