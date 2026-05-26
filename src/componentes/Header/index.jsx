
import './style.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <h1>Exercicios React </h1>
       
    <Link to="/"><button>HOME</button></Link>

    
 <Link to="/atividade1"> <button> Atividades 1 </button></Link> 

 </header>
    )

}
export default Header