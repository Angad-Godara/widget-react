import { useEffect, useState } from 'react'
import './App.css'
import BoxComponent from './components/BoxComponent'

function App() {
  const [count, setCount] = useState(0)
  const [showContent, setShowContent] = useState(false);

  function renderComponents() {
    const elements = document.querySelectorAll('div[data-cf]');
    elements.forEach((element) => {
      const productIdentifier = element.getAttribute('data-productIdentifier');
      const apiKey = element.getAttribute('data-apiKey');

      // Perform validation of API keys (this might involve making a server request)

      if (validateApiKeys(apiKey, productIdentifier)) {
        // If validation succeeds, render your React component inside this div
      setShowContent({apiKey, productIdentifier})
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
  
  useEffect(() => {
    renderComponents();
  },[])

  return (
    <>
      {
        showContent?.apiKey
        ?
        <BoxComponent apiKey={showContent?.apiKey} productIdentifier={showContent?.productIdentifier} hey={true} />
        :
        <div data-apikey="93ce02167b8a4cd3c6189decb476b06e2cd211765ba3521e" data-productidentifier="30005211" data-cf />
      }
    </>
  )
}

export default App
