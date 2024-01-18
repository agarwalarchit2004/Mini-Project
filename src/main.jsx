// // main.tsx or main.jsx
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    
//       <App />
    
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <ChakraProvider>
        <App />
    </ChakraProvider>
  </Provider>
  </BrowserRouter>

)
