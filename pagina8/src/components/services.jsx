import "../assets/CSS/services.css";
import ItemServices from "./itemServices";
import { Arrow, SeoIllustration, ArrowBlack, ContentMkt, Payment } from "./iconos";
const Services = () => {
  return (
    <section className="services" id="services">
      <header className="contenedor">
        <h2>
          <span>Services</span>
        </h2>
        <p>
          Desde una presencia en línea sencilla hasta complejos portales de
          comercio electrónico, donde tus ideas son una experiencia digital
          atractiva y funcional.
        </p>
      </header>
      <div className="servicesContainer contenedor">
        <ItemServices
          titulo1={"Search engine"}
          titulo2={"optimization"}
          svg1={<Arrow />}
          svg2={<SeoIllustration />}
        />
        <ItemServices
          titulo1={"Campañas de"}
          titulo2={"Publicidad"}
          svg1={<Arrow />}
          svg2={<Payment />}
        />
        <ItemServices
          titulo1={"Marketing de"}
          titulo2={"Contenidos"}
          svg1={<ArrowBlack />}
          svg2={<ContentMkt />}
        />
        <ItemServices
          titulo1={"Campañas de"}
          titulo2={"Publicidad"}
          svg1={<Arrow />}
          svg2={<Payment />}
        />
        <ItemServices
          titulo1={"Marketing de"}
          titulo2={"Contenidos"}
          svg1={<ArrowBlack />}
          svg2={<ContentMkt />}
        />
        <ItemServices
          titulo1={"Search engine"}
          titulo2={"optimization"}
          svg1={<Arrow />}
          svg2={<SeoIllustration />}
        />
      </div>
    </section>
  );
};

export default Services;
