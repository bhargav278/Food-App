import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import MainSection from './Components/MainSection.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Error from './Components/Error.jsx'
import RestaurantMenu from './Components/RestaurantMenu.jsx'
import './App.css'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.jsx'
import Cart from './Components/Cart.jsx'


const AppRoute = createBrowserRouter([
  {
    path: "/Food-App",
    element: <App />,
    children: [
      {
        path: "/Food-App",
        element: <MainSection />
      },
      {
        path: "/Food-App/about",
        element: <About />
      },
      {
        path: "/Food-App/contact",
        element: <ContactUs />
      },
      {
        path: "/Food-App/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/Food-App/cart",
        element: <Cart />

      }
    ],
    errorElement: <Error />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={AppRoute} />
    </Provider>
  </React.StrictMode>,
)
