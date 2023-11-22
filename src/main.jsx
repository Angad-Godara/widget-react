import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BoxComponent from './components/BoxComponent';

function renderComponents(refresh = false) {
  const elements = document.querySelectorAll('div[data-gs][data-productidentifier][data-apikey]');
  elements.forEach((element) => {
    const dataAdded = element.getAttribute('data-loaded');
    if (!dataAdded || refresh) {
        element.classList.add("gs__widget__wrapper")
        element.setAttribute("data-loaded", "true");
        const productIdentifier = element.getAttribute('data-productidentifier');
        const apiKey = element.getAttribute('data-apikey');
        if (apiKey && productIdentifier) {
          const box = document.createElement('div');
          const boxElement = <BoxComponent apiKey={apiKey} productIdentifier={productIdentifier} />;
          ReactDOM.createRoot(element).render(boxElement);
          element.appendChild(box);
        }
    }
  });
}

window.greenStitch = {
  refeshModule: ({apiKey, productIdentifier, lang}) => {
    renderComponents(true);
  }
} 

const observer = new MutationObserver(() => renderComponents());
// Configuration of the observer (you can customize this based on your requirements)
const observerConfig = {
  childList: true, // Watch for changes in the children of the observed node
  subtree: true,   // Watch for changes in the entire subtree
};

// Start observing the target node for configured changes
observer.observe(document.body, observerConfig);

// let's say our script loaded just after the initial load of a STATIC website
renderComponents();