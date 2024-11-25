import { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import { router } from './routes';

function App() {
  
  return (
    <>
      {/* <Homepage/> */}
      {/* <AboutUs/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
