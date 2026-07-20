import { useState } from 'react';
import './App.css'

function Pelicula({titulo}){

  const [esFavorita, setEsFavorita] = useState(false);

  return(
    <div
      className={`movie-card ${esFavorita ? 'favorite' : ''}`}
      onClick={()=> setEsFavorita(!esFavorita)}
    >
      <p className="movie-title">
        {titulo} {esFavorita ? "⭐" : ""}
      </p>
    </div>
  );
}

function App() {

  const [peliculas, setPeliculas] = useState([
    'Rápidos y Furiosos',
    'Avatar',
    'Hombre Araña',
    'Titanic'
  ]);

  const [nuevaPelicula, setNuevaPelicula] = useState('');

  function agregarPelicula(){

    if(nuevaPelicula.trim() === ''){
      return;
    }else{
      setPeliculas([...peliculas, nuevaPelicula]);

      setNuevaPelicula('');
    }

  }

  return (
  <div className="app-container">
    <header className="app-header">
      <h1 className="app-title">Mis Películas Favoritas</h1>
      <p className="app-subtitle">Crea y organiza tu lista personal</p>
    </header>

    <section className="form-container">
      <div className="input-group">
        <input
          type='text'
          className="movie-input"
          value={nuevaPelicula}
          onChange={(e)=> setNuevaPelicula(e.target.value)}
          placeholder='Nueva película...'
        />

        <button className="add-button" onClick={agregarPelicula}>
          Agregar
        </button>
      </div>
    </section>

    <main className="movies-section">
      {peliculas.length === 0 ? (
        <div className="empty-state">
          <p>No hay películas en la lista.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {peliculas.map((pelicula, indice)=>{
            return <Pelicula key={indice} titulo={pelicula} />
          })}
        </div>
      )}
    </main>

  </div>
);
}

export default App