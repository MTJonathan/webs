import "../assets/CSS/nosotros.css";
import { PodcastIlustration } from "./iconos";
const Nosotros = () => {
  return (
    <section className="nosotros">
      <div className="nosotrosContainer contenedor">
        <article className="nosotrosTxt">
          <h2>Hacemos que las cosas sucedan</h2>
          <p>
            Estamos comprometidos a crear experiencias digitales que capturen la
            esencia de tu marca y atraigan a tu audiencia ideal.
          </p>
          <a href="">Contáctanos</a>
        </article>
        <div className="nosotrosImg">
            <PodcastIlustration />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
