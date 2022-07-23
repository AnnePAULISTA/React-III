import "./projects.css";

function Projects(props) {
    return (
          <div className="card">
            <h3 className="card-subtitle">{props.subtitle}</h3>
            <img className="card-img" src={props.img} alt="Imagens engraçadas ilustrativas"/>
            <p className="card-text">{props.text}</p>
          </div>
    );
  }
  
  export default Projects;