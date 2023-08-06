import './style.home.css';
import { useEffect, useState } from 'react';
import { Navbar } from '../navbar/navbar';
import { toast } from 'react-hot-toast';


const Homepage = () => {

    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [planets, setPlanets] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const apiKey = 'hLUB9abhOtEYerQOaL3b3N4n3IYCCBWpJwQbppW3';

    useEffect(() => {
        fetch(`https://images-api.nasa.gov/search?q=planet&media_type=image`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(data => {
            const items = data.collection.items;
            const planetData = items.map(item => {
              const data = item.data[0];
              const imageUrl = item.links[0].href;
              return {
                title: data.title,
                description: data.description,
                imageUrl,
              };
            });
            setPlanets(planetData);
          })
          .catch(error => {
            console.error('Error al obtener la galería de planetas:', error);
          });
      }, []);
    
      const handlePrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? planets.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === planets.length - 1 ? 0 : prevIndex + 1));
      };


    useEffect(() => {
      // Función para hacer el fetch a la API
      const fetchAPOD = () => {
         // Reemplaza con tu propia API key de la NASA
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            setApodData(data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error al obtener la imagen astronómica del día:', error);
            setLoading(false);
          });
      };
  
      fetchAPOD();
    }, []);


    if (loading) {
      return toast.ca;
    }
  
    if (!apodData) {
      return <div>Error al obtener la imagen astronómica del día.</div>;
    }
  


    return (   
      <div>
         <Navbar></Navbar>
         <div className="containerpage">
            <div className="cardAPD">
            NASA- APOD
            <br />
            <a href="https://apod.nasa.gov/apod/astropix.html" className="hero-image-container">
                <img className="hero-image" src={apodData.url} alt={apodData.title} />
            </a>
            <main className="main-content">
                <h1><a href="https://apod.nasa.gov/apod/astropix.html">{apodData.title}</a></h1>
                <p>{apodData.explanation}</p>
            </main>
            <div className="card-attribute">
                <p><span><a href="https://apod.nasa.gov/apod/astropix.html"> Astronomy Picture of the Day</a></span></p>
            </div>
            </div>

        <div className="planet-gallery">
        NASA - Image and Video Library
      {planets.length > 0 && (
        <div className="planet-card">
        <a href="#" className="hero-image-container">
                <img className="hero-image" src={planets[currentIndex].imageUrl} alt={planets[currentIndex].title} />
        </a>
          <main className="main-content">
                <h1><a href="#">{planets[currentIndex].title}</a></h1>
                <p>{planets[currentIndex].description}</p>
            </main>
          <div>
          <div className="card-attribute">
            <button className="button-set" onClick={handlePrevious}>Anterior</button>
            <br/>
            <button className="button-set" onClick={handleNext}>Siguiente</button>
            </div>

          </div>
        </div>
      )}
    </div>
    </div>
    <div className="attribution">
        Obetenido de  <a href="https://api.nasa.gov/" >https://api.nasa.gov/</a>.
    </div>
    </div>
    );

}

export {Homepage}  ;