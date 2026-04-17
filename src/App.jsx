
import './App.css'
import Atividade1 from './pages/Atividade1'
import { Route, Routes } from 'react-router-dom'
import Header from './componentes/Header'
import Home from './pages/Home'
function App() {

  return (
    <>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/> 
<Route path="/Atividade1" element={<Atividade1/>}/> 

</Routes>
</>
  )
}

export default App
