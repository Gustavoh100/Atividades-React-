import './style.css'
function Card ({ personagem  }){

return(
     <div className='char-card'>
             <img src={personagem.image} alt="" />
             <h2>{personagem.name}</h2>

             <div className="char-info">
                <span>Especie :{personagem.species}</span>
                <span>Genero :{personagem.gender}</span>
                <span>status :{personagem.status}</span>
             </div>
             </div>

)


}
export default Card