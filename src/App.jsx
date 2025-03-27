import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './component/nav'
import Dashboard from './Dashboard'
import Form from './component/Form'
import Expense from "./Expense";


function App() {


  return (
    <Router>

    <Nav />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expense" element={<Expense />} />
    </Routes>
  </Router>
  )
}

export default App
