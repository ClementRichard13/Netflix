const Section = (props) => {
  return (
    <div>
      <h2>{props.category}</h2>
      <div className="images">
        {props.images.map((image, index) => {
          return <img key={index} src={image} alt="" className="image-item" />;
        })}
      </div>
    </div>
  );
};

export default Section;
