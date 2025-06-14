import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Featuresection from './components/Featuresection'
import Workflow from './components/Workflow'
import Pricingsection from './components/Pricingsection'
import Testimonials from './components/Testimonials'

import Applayout from './components/Applayout'
import Home from './components/Home'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    children:[{
      path:'/',
      element:<Home/>,
    },
    {
      path:'features',
      element:<Featuresection/>,
    },
    {
      path:'workflow',
      element:<Workflow/>,
    },{
      path:'pricing',
      element:<Pricingsection/>,
    },
    {
      path:'testimonials',
      element:<Testimonials/>,
    }
  
  
  
  
  
  
  
  ]
  }
])
function App() {
  

  return (
    <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App
