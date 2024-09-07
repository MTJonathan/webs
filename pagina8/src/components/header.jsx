import '../assets/CSS/header.css'
import { Logo } from "./iconos"
const Header = () => {
  return (
    <header className="header">
      <a href=""><Logo /></a>
      <nav>
        <ul>
          <li><a href="">Sobre Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Testimonial</a></li>
          <li><a href="">Contac Us</a></li>  
        </ul>
      </nav>
    </header>
  )
}

export default Header
