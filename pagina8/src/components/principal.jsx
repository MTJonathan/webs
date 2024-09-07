import { IconoHeader } from "./iconos";

const Principal = () => {
  return (
    <section className="principal">
      <div className="principalContainer contenedor">
        <article className="txtPrincipal">
          <h1>Transforma Tu Visión en Realidad Digital</h1>
          <p>
            Desde landing pages impactantes hasta sitios web completos, creamos
            soluciones que destacan y convierten.
          </p>
          <a href="#">Agendar una Cita</a>
        </article>
        <article className="imgPrincipal">
          <IconoHeader />
        </article>
      </div>
    </section>
  );
};

export default Principal;
