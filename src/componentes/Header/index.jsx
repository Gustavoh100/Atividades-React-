
import './style.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <h1>Exercicios React </h1>
       
    <Link to="/Home"><button>HOME</button></Link>

 </header>
    )

}
export default Header