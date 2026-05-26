import { Link } from 'react-router-dom';
import './style.css'
import { useEffect, useState } from 'react';
import { getCharacters } from '../../api/rickAndMorty';
import Card from '../../componentes/Card';
function Home() {
    // LOADING - existe quando requisita algo para algo externo
    const [carregando, setCarregando] = useState(true);
    const [personagens , setPersonagens ] = useState([]);


   useEffect(() => {
     async function carregar() {
        const dados = await getCharacters()
        setPersonagens(dados)
        setCarregando(false)
       }
       
       carregar()
   }, [])


    if (carregando) {
        return (
            <> carregando ...</>
        )

    }
    return (
        <div className='home page'>
            <h2 className='titulo lista'> Personagens - Rincl and Morty </h2>

            <div className='lista-personagens'>
        {personagens.map((personagem) => (
          <Card personagem={personagem} />          
        ))}
            </div>    
            </div>
    )
} export default Home 