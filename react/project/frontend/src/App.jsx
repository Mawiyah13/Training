import React from 'react'
import User from './components/User'
import {Route,Routes} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Navbar from './components/Navbar'
import State from './hooks/State'

const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/home"Component={Home}> </Route>
          <Route path="/about"Component={About}></Route>
          <Route path="/contact"Component={Contact}></Route>
          <Route path="/service"Component={Service}></Route>
          <Route path="/state" element={<State/>}/>
        </Routes>
        
        
        <User name="Mawiyah H" 
        department="B.Tech IT" 
        skill={["Java", "MERN"]} 
        hobby={["Reading Books","Watching Movies"]} 
        education={["Currently pursuing penultimate year of Bachelor of Information Technology", "Completed Higher Secondary Education"]}
        />

    </>
  )
}

export default App
