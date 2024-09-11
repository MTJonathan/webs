import "../assets/CSS/footer.css";
import { LogoWhite } from "./iconos";
import linkedin from "../assets/IMG/linkedin.svg";
import facebook from "../assets/IMG/facebook.svg";
import twitter from "../assets/IMG/twitter.svg";
const Footer = () => {
  return (
    <footer className="footer contenedor">
      <article className="footerContainer">
        <header>
          <div className="footerLogo">
            <LogoWhite />
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Sobre Nosotros</a>
              </li>
              <li>
                <a href="">Servicios</a>
              </li>
              <li>
                <a href="">FAQS</a>
              </li>
              <li>
                <a href="">Contacto</a>
              </li>
            </ul>
          </nav>
          <div className="footerLogoRedes">
            <a href="#">
              <img src={linkedin} />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={twitter} />
            </a>
          </div>
        </header>
        <article className="footerMain">
          <div className="footerContacto">
            <h3>Contact us</h3>
            <p>Email: hola[at]hola.com</p>
            <p>Telefono: 554-433-2211</p>
            <p>
              Dirección 1234, Calle <br /> Principal, Ciudad de <br /> México
            </p>
          </div>
          <form className="footerEmail" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" />
            <button>Suscribete</button>
          </form>
        </article>
        <footer>&copy; MTJonathan - Derechos reservados</footer>
      </article>
    </footer>
  );
};

export default Footer;
