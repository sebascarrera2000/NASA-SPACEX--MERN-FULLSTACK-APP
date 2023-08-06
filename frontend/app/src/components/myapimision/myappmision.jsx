import './style.mymision.css';
import { Navbar } from '../navbar/navbar';
import { useEffect, useState } from 'react';
import {Toaster,toast} from 'react-hot-toast';

const Missionpage = () => {


    const [missions, setMissions] = useState([]);

    const [newMission, setNewMission] = useState({
        name: '',
        launchDate: '',
        destination: ''
      });

/////// Astronautas /////////////

 
    const [data, setData] = useState([]);
    const [editAstronautId, setEditAstronautId] = useState(null);
    const [editAstronautData, setEditAstronautData] = useState({
      name: '',
      age: '',
      nationality: ''
    });
  
    const [newAstronaut, setNewAstronaut] = useState({
        name: '',
        age: '',
        nationality: ''
      });
    
    

  //  Obteniendo Astronautas
  useEffect(() => {
    fetch('http://localhost:3000/api/astronauts')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching astronauts:', error);
      });
  }, []);

  const handleDeleteAstronaut = (id) => {

    // Realizar la solicitud DELETE a la API
    fetch(`http://localhost:3000/api/astronauts/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // Actualizar la lista de astronautas después de eliminar el astronauta
      setData(data.filter(astronaut => astronaut.id !== id));
      toast.success('Eliminaste astronauta Exitosamente 👨‍🚀⛔' ,
       {
        duration: 5000,
      }
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch(error => {
      console.error('Error deleting astronaut:', error);
      toast.error('Error al eliminar ')
    });
  };

  /// Post Astronauta
  const handleChange = (e) => {
    setNewAstronaut({
      ...newAstronaut,
      [e.target.name]: e.target.value
    });
  };

  const handleAddAstronaut = (e) => {
    e.preventDefault();
    // Realizar la solicitud POST a la API para agregar un nuevo astronauta
    fetch('http://localhost:3000/api/astronauts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAstronaut)
    })
    .then(response => response.json())
    .then(() => {

      // Actualizar la lista de astronautas después de agregar un nuevo astronauta

      toast.success('Añadiste un astronauta Exitosamente 👨‍🚀✔️ ' ,
       {
        duration: 5000,
      }
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch(error => {
      console.error('Error adding astronaut:', error);
    });
  };

  // Realizar el metodo Put de astronaurta 

  const handleChangeEdit = (e) => {
    setEditAstronautData({
      ...editAstronautData,
      [e.target.name]: e.target.value
    });
  };

const handleEditAstronaut = (id) => {
  const astronaut = data.find(astronaut => astronaut._id === id);
  setEditAstronautId(id);
  setEditAstronautData(astronaut);
};


  const handleSaveEditAstronaut = (id) => {
    fetch(`http://localhost:3000/api/astronauts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editAstronautData)
    })
      .then(response => response.json())
      .then(() => {
            toast.success('Actualizaste un astronauta Exitosamente 👨‍🚀✔️ ' ,
       {
        duration: 5000,
      }
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);

        setEditAstronautId(null); // Disable edit mode after successful update
      })
      .catch(error => {
        console.error('Error updating astronaut:', error);
      });
  };
  

//////// MISION 

            const [editMissionId, setEditMissionId] = useState(null);
            const [editMissionData, setEditMissionData] = useState({
            name: '',
            launchDate: '',
            destination: ''
            });

        //  Obteniendo Get Mission
        useEffect(() => {
            fetch('http://localhost:3000/api/missions')
              .then(response => response.json())
              .then(missions=> {
                setMissions(missions);
              })
              .catch(error => {
                console.error('Error fetching astronauts:', error);
              });
          }, []);

          //// Post  Mision 

            // Función para agregar una nueva misión


            const handleChangeMision = (e) => {
                setNewMission({
                  ...newMission,
                  [e.target.name]: e.target.value
                });
              };
            

  const handleAddMission = () => {
    // Realizar la solicitud POST a la API para agregar una nueva misión
    fetch('http://localhost:3000/api/missions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMission)
    })
    .then(response => response.json())
    .then(()=> {
      // Mostrar la notificación de éxito
      toast.success('Añadiste una mision Exitosamente 🚀✔️ ' ,
       {
        duration: 5000,
      }
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch(error => {
      console.error('Error adding mission:', error);
    });
  };


  const handleDeleteMission = (id) => {

    // Realizar la solicitud DELETE a la API
    fetch(`http://localhost:3000/api/missions/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // Actualizar la lista de astronautas después de eliminar el astronauta
      setData(data.filter(astronaut => astronaut.id !== id));
      toast.success('Eliminaste Mision Exitosamente 🚀⛔' ,
       {
        duration: 5000,
      }
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch(error => {
      console.error('Error deleting astronaut:', error);
      toast.error('Error al eliminar ')
    });
  };

  const handleEditMission = (id) => {
    setEditMissionId(id);
    const missionToEdit = missions.find((mission) => mission._id === id);
    setEditMissionData(missionToEdit);
  };

  const handleChangeEditMission = (e) => {
    setEditMissionData({
      ...editMissionData,
      [e.target.name]: e.target.value
    });
  };

  
  
  const handleSaveEditMission = (id) => {
    fetch(`http://localhost:3000/api/missions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editMissionData)
    })
      .then(response => response.json())
      .then(() => {
        toast.success('Actualizaste una Mison Exitosamente 🚀✔️ ' ,
        {
         duration: 5000,
       }
       );
       setTimeout(() => {
         window.location.reload();
       }, 2000);
        setEditMissionId(null); // Disable edit mode after successful update
      })
      .catch(error => {
        console.error('Error updating mission:', error);
      });
  };



  


    return (   
      <div>
         <Navbar></Navbar>
         <div><Toaster position="top-left" reverseOrder={false}/></div>
         <div className="all">
            <div className="container-all">
                <div className="containermision">
                        <h1 >🚀 Misiones 🚀 </h1>
                    <table className="responsive-table">
                        
                        <thead className="responsive-table__head">
                            <tr className="responsive-table__row">
                                <th className="responsive-table__head__title responsive-table__head__title--name">Name </th>
                                <th className="responsive-table__head__title responsive-table__head__title--types">Launch Date</th>
                                <th className="responsive-table__head__title responsive-table__head__title--update">Destination</th>
                                <th className="responsive-table__head__title responsive-table__head__title--update">Acciones</th>
                            </tr>
                        </thead>

                        <tbody className="responsive-table__body">

                        <tr className="responsive-table__row">
                            <td><input type="text" name="name" placeholder="Nombre" value={newMission.name} onChange={handleChangeMision} /></td>
                            <td><input type="date" name="launchDate" placeholder="Fecha" value={newMission.launchDate} onChange={handleChangeMision} /></td>
                            <td><input type="text" name="destination" placeholder="Destino" value={newMission.destination} onChange={handleChangeMision} /></td>
                            <td><button onClick={handleAddMission}><i className="fa-solid fa-plus"></i></button></td>
                        </tr>

                        {missions.map(mission => (
                                <tr key={mission._id} className="responsive-table__row">
                                    <td className="responsive-table__body__text responsive-table__body__text--name">
                                    {editMissionId === mission._id ? (
                                        <input
                                        type="text"
                                        name="name"
                                        value={editMissionData.name}
                                        onChange={handleChangeEditMission}
                                        />
                                    ) : (
                                        mission.name
                                    )}
                                    </td>
                                    <td className="responsive-table__body__text responsive-table__body__text--types">
                                    {editMissionId === mission._id ? (
                                        <input
                                        type="text"
                                        name="launchDate"
                                        value={editMissionData.launchDate}
                                        onChange={handleChangeEditMission}
                                        />
                                    ) : (
                                        mission.launchDate
                                    )}
                                    </td>
                                    <td className="responsive-table__body__text responsive-table__body__text--update">
                                    {editMissionId === mission._id ? (
                                        <input
                                        type="text"
                                        name="destination"
                                        value={editMissionData.destination}
                                        onChange={handleChangeEditMission}
                                        />
                                    ) : (
                                        mission.destination
                                    )}
                                    </td>
                                    <td className='botones'>
                                    {editMissionId === mission._id ? (
                                        <button onClick={() => handleSaveEditMission(mission._id)}>
                                        <i className="fa-solid fa-check"></i>
                                        </button>
                                    ) : (
                                        <button onClick={() => handleEditMission(mission._id)}>
                                        <i className="fa-solid fa-pencil"></i>
                                        </button>
                                    )}
                                    <button onClick={() => handleDeleteMission(mission._id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="containerastronaut">
                        <h1 >👨‍🚀 Astronautas 👨‍🚀 </h1>
                    <table className="responsive-table">
                        
                        <thead className="responsive-table__head">
                            <tr className="responsive-table__row">
                                <th className="responsive-table__head__title responsive-table__head__title--name">Name </th>
                                <th className="responsive-table__head__title responsive-table__head__title--types">Age</th>
                                <th className="responsive-table__head__title responsive-table__head__title--update">Nationality</th>
                                <th className="responsive-table__head__title responsive-table__head__title--update">Acciones</th>

                            </tr>
                        </thead>
                        <tbody className="responsive-table__body">

                        <tr  className="responsive-table__row">
                            <td><input type="text" name="name" placeholder="Nombre" value={newAstronaut.name} onChange={handleChange} /></td>
                            <td><input type="number" name="age" placeholder="Edad" value={newAstronaut.age} onChange={handleChange} /></td>
                            <td><input type="text" name="nationality" placeholder="Nacionalidad" value={newAstronaut.nationality} onChange={handleChange} /></td>
                            <td><button onClick={handleAddAstronaut} ><i className='fa-solid fa-plus'></i></button></td>
                        </tr>
                        
               
                        {data.map(astronaut => (
                                <tr key={astronaut._id} className="responsive-table__row">
                                    <td className="responsive-table__body__text responsive-table__body__text--name">
                                    {editAstronautId === astronaut._id ? (
                                        <input
                                        type="text"
                                        name="name"
                                        value={editAstronautData.name}
                                        onChange={handleChangeEdit}
                                        />
                                    ) : (
                                        astronaut.name
                                    )}
                                    </td>
                                    <td className="responsive-table__body__text responsive-table__body__text--types">
                                    {editAstronautId === astronaut._id ? (
                                        <input
                                        type="number"
                                        name="age"
                                        value={editAstronautData.age}
                                        onChange={handleChangeEdit}
                                        />
                                    ) : (
                                        astronaut.age
                                    )}
                                    </td>
                                    <td className="responsive-table__body__text responsive-table__body__text--update">
                                    {editAstronautId === astronaut._id ? (
                                        <input
                                        type="text"
                                        name="nationality"
                                        value={editAstronautData.nationality}
                                        onChange={handleChangeEdit}
                                        />
                                    ) : (
                                        astronaut.nationality
                                    )}
                                    </td>
                                    <td className='botones'>
                                    {editAstronautId === astronaut._id ? (
                                        <button onClick={() => handleSaveEditAstronaut(astronaut._id)}>
                                        <i className="fa-solid fa-check"></i>
                                        </button>
                                    ) : (
                                        <button onClick={() => handleEditAstronaut(astronaut._id)}>
                                        <i className="fa-solid fa-pencil"></i>
                                        </button>
                                    )}
                                    <button onClick={() => handleDeleteAstronaut(astronaut._id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                    </td>
                                </tr>
                                ))}

                        </tbody>
                    </table>
                </div>
        
        
            </div>
            <div className="thanks">
                <div className="all-thanks">
                    <div className="imgt">
                        <img src="https://cdn.discordapp.com/attachments/1135292607589777518/1137668638099390485/Logo_escalab1.png" alt="" />      
                    </div>
                    <div className="thankstext">
                          <h1>Gracias Escuela!</h1>
                          <p>
                            Querida Escuela Escalab y Profesor Miguel, me dirijo a ustedes con profundo agradecimiento por la comprensión y apoyo que me brindaron durante mi tiempo como estudiante de ingeniería de sistemas. A pesar de los desafíos que enfrenté en mi tesis y en la universidad, su respaldo fue fundamental para superar las dificultades y obtener valiosa experiencia y práctica en el mundo del desarrollo. Gracias a su dedicación, adquirí conocimientos técnicos y habilidades interpersonales que me prepararon para enfrentar nuevos retos. Su influencia en mi crecimiento personal y profesional es invaluable, y siempre los llevaré en mi corazón. Espero mantener contacto y seguir aprendiendo gracias a su orientación. Con gratitud y aprecio, Sebastian Carrera 
                            <br />
                            Discord : <i className="fa-brands fa-discord"></i> raptoraustriaco 
                          </p>

                    </div>
                </div>

            </div>
        </div>
    </div>
    );

}

export {Missionpage}  ;