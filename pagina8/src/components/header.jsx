import '../assets/CSS/header.css'
import { Logo } from "./iconos"
import menuOpen from "../assets/IMG/menuOpen.svg"
const Header = () => {
  return (
    <header className="header">
      <a href=""><Logo /></a>
      <nav>
        <ul>
          <li><a href="#nosotros">Sobre Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Testimonial</a></li>
          <li><a href="">Contac Us</a></li>  
        </ul>
      </nav>
      <span className="menuOpen"><img src={menuOpen} alt="" /></span>
    </header>
  )
}

export default Header
