import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import MainSection from './Components/MainSection.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Error from './Components/Error.jsx'
import RestaurantMenu from './Components/RestaurantMenu.jsx'
import './App.css'


const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<MainSection/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/contact",
        element:<ContactUs/>
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRoute} />
  </React.StrictMode>,
)
