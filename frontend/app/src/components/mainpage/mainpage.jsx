import { Link } from "react-router-dom";
import './style.mp.css';

const Mainpage = () => {
  return (

<div>
      <img
        src="https://cdn.discordapp.com/attachments/1135292607589777518/1135299477033463888/3168530837.jpg" // Reemplaza esto con la URL de tu imagen
        alt="Imagen de fondo"
        className="my-background-image" // Aplica la clase CSS al elemento img
      />
      <div className="containermp">
        <div className="contentmp">
            <h1>Bienvenidos </h1>
            <br />
            <h2>Soy Juan Sebastian Carrera 👋</h2>
            <br />
            <p>Este es un ejemplo para mostrar el uso del framework <i className="fab fa-react"></i> consumiendo api de spaceX y Nasa ademas del uso de una api hexagonal con <i className="fa-brands fa-node"></i> y Typescript,de una tematica de astronautas en mision teniendo todo en <i className="fa-brands fa-docker"></i> 
            </p>
            <br />
            <h4>Trabajo para Escalab ! MERN Fullstack 👌 </h4>
            <br />
            <div className="boton"><Link to='/home'><button className="buttonmp" role="button">Empezar 🚀 </button></Link></div>
        </div>
    </div>
</div>
  );
}

export default Mainpage ;