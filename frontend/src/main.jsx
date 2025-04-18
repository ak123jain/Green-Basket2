 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
   <ShopContextProvider>
    <App />
   </ShopContextProvider>
)
