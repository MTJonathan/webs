const ItemServices = ({ titulo1, titulo2, svg1, svg2 }) => {
  return (
    <article className="itemServices">
      <header>
        <h3>
          <span>{titulo1}</span>
          <br />
          <span>{titulo2}</span>
        </h3>
      </header>
      <div className="itemServicesContainer">
        <div className="svgServices"><a href="">{svg1}</a></div>
        <div className="svgServices">{svg2}</div>
      </div>
    </article>
  );
};

export default ItemServices;
