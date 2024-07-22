
import { Outlet } from 'react-router-dom'

import Header from './Components/Header'
import MainSection from './Components/MainSection'

function App() {


  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default App
