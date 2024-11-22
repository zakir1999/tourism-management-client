import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Register from './Components/Register.jsx';
import LOgIn from './Components/LOgIn.jsx';
import AllTouristsSpot from './Components/AllTouristsSpot.jsx';
import AddTouristsSpot from './Components/AddTouristsSpot.jsx';
import MyLIst from './Components/MyLIst.jsx';
import UpdateTourists from './Components/UpdateTourists.jsx';
import Home from './Components/Home.jsx';
import Tourist from './Components/Tourist.jsx';
import ViewCountry from './Components/ViewCountry.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () =>fetch('https://tourism-management-server-three.vercel.app/tourist')
      },
      {
        path:'/register',
        element:<Register></Register>
    },
    {
      path:'/login',
      element:<LOgIn></LOgIn>
    },
    {
      path:'/allTourists',
      element:<AllTouristsSpot></AllTouristsSpot>
    },
    {
      path:'/addTourists',
      element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
    },
    {
      path:'/allTourists',
      element:<AllTouristsSpot></AllTouristsSpot>,
      loader: () =>fetch('https://tourism-management-server-three.vercel.app/tourist')
    },
    {
      path:'/myList',
      element:<PrivateRoute><MyLIst></MyLIst></PrivateRoute>
    },
    {
      path:'/updateTourists',
      element:<PrivateRoute><UpdateTourists></UpdateTourists></PrivateRoute>
    },
  {
    path:'/tourist/:id',
    element:<PrivateRoute><Tourist></Tourist></PrivateRoute>,
    loader: ({params}) =>fetch(`https://tourism-management-server-three.vercel.app/tourist/${params.id}`)
  },
  {
    path:'/updateTourist/:id',
    element:<PrivateRoute><UpdateTourists></UpdateTourists></PrivateRoute>

  },
  {
    path:'/viewCountry/:name',
    element:<ViewCountry></ViewCountry>,
    loader:({params}) =>fetch(`https://tourism-management-server-three.vercel.app/country/${params.name}`)
  },
  // {
  //   path:'/countryDetails/:id',
  //   element:<DetailsCountery></DetailsCountery>,
  //   loader:({params}) =>fetch(`https://tourism-management-server-three.vercel.app/country/${params.id}`)

  // }

  ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
