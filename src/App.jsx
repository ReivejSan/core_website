import Navbar from "./components/navbar/Navbar"
import HomeCarousel from "./components/homecarousel/Homecarousel"
import React from "react"
import "./layout.scss"



function App() {
  return (
    <div className="layout">
      <Navbar/>
      <HomeCarousel/>
    </div>
  )
}

export default App