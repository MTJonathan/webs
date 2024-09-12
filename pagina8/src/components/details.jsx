import "../assets/CSS/details.css";
import { CloseQuestion, OpenQuestion } from "./iconos";
const Details = () => {
  return (
    <section className="details contenedor" id="details">
      <h2>Our Working Process</h2>

      <details>
        <summary>
          Ingresa tu pregunta{" "}
          <span className="closeQuestion">
            <CloseQuestion />
          </span>
          <span className="openQuestion">
            <OpenQuestion />
          </span>
        </summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
          recusandae consequatur minima aut iusto, exercitationem harum
          accusamus obcaecati rerum ipsum unde minus, cupiditate repellendus
          dicta pariatur qui expedita saepe?
        </p>
      </details>
      <details>
        <summary>
          Ingresa tu pregunta{" "}
          <span className="closeQuestion">
            <CloseQuestion />
          </span>
          <span className="openQuestion">
            <OpenQuestion />
          </span>
        </summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
          recusandae consequatur minima aut iusto, exercitationem harum
          accusamus obcaecati rerum ipsum unde minus, cupiditate repellendus
          dicta pariatur qui expedita saepe?
        </p>
      </details>
      <details>
        <summary>
          Ingresa tu pregunta{" "}
          <span className="closeQuestion">
            <CloseQuestion />
          </span>
          <span className="openQuestion">
            <OpenQuestion />
          </span>
        </summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
          recusandae consequatur minima aut iusto, exercitationem harum
          accusamus obcaecati rerum ipsum unde minus, cupiditate repellendus
          dicta pariatur qui expedita saepe?
        </p>
      </details>
      <details>
        <summary>
          Ingresa tu pregunta{" "}
          <span className="closeQuestion">
            <CloseQuestion />
          </span>
          <span className="openQuestion">
            <OpenQuestion />
          </span>
        </summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
          recusandae consequatur minima aut iusto, exercitationem harum
          accusamus obcaecati rerum ipsum unde minus, cupiditate repellendus
          dicta pariatur qui expedita saepe?
        </p>
      </details>
    </section>
  );
};

export default Details;
