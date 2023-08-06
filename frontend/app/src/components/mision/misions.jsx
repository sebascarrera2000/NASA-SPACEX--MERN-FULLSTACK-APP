import  { useEffect, useState } from 'react';
import './style.mision.css'
import {Toaster,toast} from 'react-hot-toast';


const MissionsSpaceX = () => {
  const [missions, setMissions] = useState([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [selectedMission, setSelectedMission] = useState(null);
  const [showWelcomeNotification, setShowWelcomeNotification] = useState(true);

 
  useEffect(() => {
    if (showWelcomeNotification) {
      toast('Escoge una mision para mas informacion !', {
        icon: '🌟',
        duration:6000
      });
      setShowWelcomeNotification(false);
    }
  }, [showWelcomeNotification]);


  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches')
      .then(response => response.json())
      .then(data => {
        setMissions(data);
      })
      .catch(error => {
        console.error('Error fetching SpaceX missions:', error);
      });
  }, []);

  const missionsPerPage = 8;
  const startIndex = currentGroupIndex * missionsPerPage;
  const endIndex = startIndex + missionsPerPage;
  const currentMissions = missions.slice(startIndex, endIndex);

  const handleNextGroup = () => {
    setCurrentGroupIndex(prevIndex => prevIndex + 1);
  };

  const handlePrevGroup = () => {
    setCurrentGroupIndex(prevIndex => prevIndex - 1);
  };

  const handleMissionClick = (mission) => {
    setSelectedMission(mission);
  };

  return (
    <div className="missions-container">
                <Toaster/>
      <div className="wrapper">
        <h2 className='misions'><strong>All Missions<span>(111)</span></strong></h2>
        <div className="cards">
          {currentMissions.map(mission => (
            <figure
              key={mission.flight_number}
              className="card"
              onClick={() => handleMissionClick(mission)}
            >
              {mission.links.mission_patch_small && (
                <img
                  src={mission.links.mission_patch_small}
                  alt={`Patch de ${mission.mission_name}`}
                />
              )}
              <figcaption>{mission.mission_name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrevGroup} disabled={currentGroupIndex === 0}>
            &lt; Anterior
          </button>
          <button
            onClick={handleNextGroup}
            disabled={currentGroupIndex === Math.floor(missions.length / missionsPerPage) - 1}
          >
            Siguiente &gt;
          </button>
        </div>
      </div>

      {selectedMission && (
        <div className="mission-details">
          <h2><strong>{selectedMission.mission_name}<span>({selectedMission.flight_number})</span></strong></h2>
          <div className="news">
            <figure className="article">
            {selectedMission.links.mission_patch ? (
                <img src={selectedMission.links.mission_patch} />
              ) : (
                <p>Imagen no disponible</p>
              )}
              <figcaption>
                <h3>Año Lanzamiento: {selectedMission.launch_year}</h3> 
                <h3>Descripcion : </h3>
                {selectedMission.details ? (
                  <p>{selectedMission.details}</p>
                ) : (
                  <p>Descripción no disponible</p>
                )}
                <a href={selectedMission.links.video_link}><i className="fab fa-youtube"></i></a>
              </figcaption>
            </figure>
            <div className='carta_informacion'>
                  <h1>Galeria</h1>
                  {selectedMission.links.flickr_images && selectedMission.links.flickr_images.length > 0 ? (
              <div className="image-gallery">
                {selectedMission.links.flickr_images.map((image, index) => (
                  <img className="img-dispo"key={index} src={image} alt={`Imagen ${index + 1}`} />
                ))}
              </div>
            ) : (
              <p>Galería no disponible para esta misión</p>
            )}
            </div>
            <div className='ojo'>Recuerda que encuentras infromacion dentro del logo 👆 </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionsSpaceX;
