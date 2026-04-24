import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'


function Atividade1(){
  const[ numero1 , setNumero1] = useState("")
  const[ numero2 , setNumero2] = useState("")
const[resultado, setResultado] = useState()

  function handleSubmit(event){
  event.preventDefault();
  console.log()
setResultado (Number(numero1) + Number(numero2))

  }
  return (
<>
<h2>atividade1</h2>
<form>
<label>Digite um numero :</label>
<input
    type="number"
    value={numero1}
    onChange={(event)=> setNumero1 (event.target.value)}
/>
<label>Digite um outro numero:</label>
<input
    type="number"
    value={numero2}
    onChange={(event)=> setNumero1 (event.target.value)}
    
    
/>
<label>somar os dois numeros</label>
<button type="submit">somar</button>
</form>
<p>{resultado}</p>
</>

)




}export default Atividade1