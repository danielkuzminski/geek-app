import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//step 4 - import pages components
import Komiksy from './pages/Komiksy.jsx'
import Gry from './pages/Gry.jsx'
import NotFound from './pages/NotFound.jsx'
import Komiks from './pages/Komiks.jsx'
import Gra from './pages/Gra.jsx'
import Playstation from './pages/Playstation.jsx'
import Nintendo from './pages/Nintendo.jsx'
import Steam from './pages/Steam.jsx'

// step 1 - importing create browser router & router provider
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// step 2 - create variable for routing in app
const router = createBrowserRouter([
  //step 3 - create route object
  {path: "/", element: <App />},
  {path: '/komiksy', element: <Komiksy />},
  {path: '/gry', element: <Gry />},
  {path: '/*', element: <NotFound />},
  {path: '/komiksy/:id', element: <Komiks />},
  {path: '/gry/:id', element: <Gra />},
  {path: '/playstation', element: <Playstation />},
  {path: '/nintendo', element: <Nintendo />},
  {path: '/steam', element: <Steam />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* step 5 - use router provider and pass var with routes */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
