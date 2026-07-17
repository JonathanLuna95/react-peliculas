import { useState } from 'react';
import './App.css'

function Pelicula({titulo}){

  const [esFavorita, setEsFavorita] = useState(false);

  return(
    <div
      style={{
        border: esFavorita ? '2px solid black' : '1px solid gray',
        padding: '10px',
        margin: '5px',
        backgroundColor: esFavorita ? '#0073ff' : 'white',
        cursor: 'pointer',
        color: esFavorita ? 'white' : '#333'
      }}

      onClick={()=> setEsFavorita(!esFavorita)}
    >
      <p>
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
  <div>
    <h1>Mis Películas Favoritas</h1>

    <div>
      <input
        type='text'
        value={nuevaPelicula}
        onChange={(e)=> setNuevaPelicula(e.target.value)}
        placeholder='Nueva película...'
      />

      <button onClick={agregarPelicula}>
        Agregar
      </button>
    </div>

    {peliculas.map((pelicula, indice)=>{
      return <Pelicula key={indice} titulo={pelicula} />
    })}

  </div>
);
}

export default App