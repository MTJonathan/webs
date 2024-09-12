import '../assets/CSS/header.css'
import { Logo } from "./iconos"
import menuOpen from "../assets/IMG/menuOpen.svg"
import menuClose from "../assets/IMG/menuClose.svg"
import { useRef } from 'react'
const Header = () => {
  const navRef = useRef(null);
  const handleClick = () => {
    navRef.current.classList.toggle('activeNav');
  }

  const handleClose = () => {
    navRef.current.classList.remove('activeNav');
  }
  console.log(navRef)
  return (
    <header className="header">
      <a href=""><Logo /></a>
      <nav ref={navRef}>
        <ul>
          <li><a onClick={handleClose} href="#nosotros">Sobre Nosotros</a></li>
          <li><a onClick={handleClose} href="#services">Servicios</a></li>
          <li><a onClick={handleClose} href="#details">FAQ</a></li>
          <li><a onClick={handleClose} href="">Testimonial</a></li>
          <li><a onClick={handleClose} href="#contacto">Contac Us</a></li>  
        </ul>
        <span onClick={handleClose} className="menuClose"><img src={menuClose}/></span>
      </nav>
      <span onClick={handleClick} className="menuOpen" ><img src={menuOpen}/></span>
    </header>
  )
}

export default Header
