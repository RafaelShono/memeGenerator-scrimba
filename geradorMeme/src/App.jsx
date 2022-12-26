import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Gerador from './Gerador'
import 'semantic-ui-css/semantic.min.css'
function App() {


  return (
    <div className="App">
      <Navbar/>
      <Gerador/>
      
    </div>
  )
}

export default App
