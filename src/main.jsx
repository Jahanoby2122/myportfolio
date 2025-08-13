import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  
  RouterProvider,
} from "react-router";
import { router } from './Router/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='bg-black text-white min-h-screen'>
      <RouterProvider router={router} />
     </div>
  </StrictMode>,
)
