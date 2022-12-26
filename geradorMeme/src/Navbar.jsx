
import logo from './imagens/Logo.png'
import './navbar.css'


function Navbar() {


  return (
    <div className="Navbar">
      
 <div className='imagem-texto'>
    <img src={logo}></img>
  
 </div>
 <h5 className='nav-texto'>Curso React - Projeto 3</h5>
    </div>

  )
}

export default Navbar
