import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './navbar'
import './App.css'
import HomePage from './homepage'



function App() {

     return (
      <BrowserRouter>    
        <Navigation/>
        <Routes>
          <Route path='/homepage' element={<HomePage/>}></Route>
          <Route path='/createaccount/' element={<CreateAccount/>} ></Route>
        </Routes>
      </BrowserRouter>
  )
  }
  
  

export default App
