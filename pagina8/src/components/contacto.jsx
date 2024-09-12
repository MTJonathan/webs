import "../assets/CSS/contacto.css";
import { MessageIllustration } from "./iconos";
const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      <header className="contenedor">
        <h2>Contact us</h2>
        <p>Contacta con nosotros, para que tengas tu presencia en internet</p>
      </header>
      <article className="contactoContainer contenedor">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="nombre">
            Nombre <br />
            <input type="text" id="nombre" placeholder="Jonathan" required />
          </label>

          <label htmlFor="email">
            Email <br />
            <input type="email" id="email" placeholder="Email" required />
          </label>

          <label htmlFor="message">
            Message <br />
            <textarea placeholder="Message" id="message" required></textarea>
          </label>

          <button>Send Message</button>
        </form>
        <div className="contactoImg">
          <MessageIllustration />
        </div>
      </article>
    </section>
  );
};

export default Contacto;
