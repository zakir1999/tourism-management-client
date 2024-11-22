
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default App
