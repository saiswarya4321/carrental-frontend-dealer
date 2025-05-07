import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // ✅ correct

import { Provider } from 'react-redux'
import store from './redux/store.js'
import 'bootstrap-icons/font/bootstrap-icons.css';




 import Root from './layouts/Root.jsx';


import Outerhome from './components/Outerpages/Outerhome.jsx';
import Outerlayout from './layouts/Outerlayout.jsx';

import Dealerhome from './pages/dealer/Dealerhome.jsx';
import Adminlayout from './layouts/Adminlayout.jsx';
import Dealerlayout from './layouts/Dealerlayout.jsx';


import DealerSignup from './pages/dealer/DealerSignup.jsx';
import AddCar from './pages/dealer/Addcar.jsx';
import Viewcars from './pages/dealer/Viewcars.jsx';
import Editcars from './pages/dealer/Editcars.jsx';
import Getbooking from './pages/dealer/Getbooking.jsx';

import { ThemeProvider } from './context/ThemeContext.jsx';


import DealerLogin from './pages/dealer/DealerLogin.jsx';


const router=createBrowserRouter([
  
  {
    path: "/",
    element: <Outerlayout />,
    children: [
      { path: "/", element: <Outerhome /> },
      { path: "/home", element: <Outerhome /> },
       { path: "/signup", element: <DealerSignup /> },
      { path: "/login", element: <DealerLogin /> },
    ],
  },
  

  
  {
    path: "/dealerdashboard", // 👈 top-level parent
    element: <Dealerlayout />,
    children: [
      { path: "dealerhome", element: <Dealerhome /> }, 
      { path: "signup", element: <DealerSignup /> }, 
      { path: "addcar", element: <AddCar /> },  
      { path: "viewcars", element: <Viewcars /> },  
      { path: "editcars/:id", element: <Editcars /> },  
      { path: "booking", element: <Getbooking /> },  

      
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
    <ThemeProvider>
    <RouterProvider router={router} />
        <ToastContainer />
  </ThemeProvider>
       
     
    </Provider>
  </StrictMode>
  
   
)
