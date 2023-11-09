import { useState } from 'react'
import './App.css';
import MOVIES_DATA from '../MOVIES_DATA.json';

// no sabía dónde colocar esto xd
const RED = {
  background: 'red',
  margin: 7
};

const metaScore = (metascore) => {
  const green = {
    background: "#61c751",
    margin: 7
  };
  
  const yellow = {
    background: '#ffcc33',
    margin: 7
  };

  if (metascore > 50) {
    return (<span style={green}>
      {" "+metascore+" "}
    </span>);
  } else {
    return (<span style={yellow}>
      {" "+metascore+" "}
    </span>);
  }
};


const Movies = ({ poster, title, releaseDate, duration, maturity, genres, director, mainActors, plot, metascore, rating }) =>(
  <li className='movie'>
    <div className='moviePoster'>
      <img src={`${poster}`} />
    </div>
    <div className='movieInfo'>
      <h3 className='title'>{title}</h3>    
      <p>| {releaseDate} | {duration} | {maturity} | {genres.map((gen) => (gen + ", "))}</p>
      <span className='rate'>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" width={14}/>
        {" "+rating} |{(metascore > 0 & metascore < 50) ? <span style={RED}> {metascore} </span> : metaScore(metascore)}Metascore
      </span>
      <div className='directorAndActors'>| {director} | {mainActors.map((actors) => (actors + ", ")) }|</div>
      <p>{plot}</p>
    </div>
  </li>
);

function App() {
  return (
    <div>
      <button >click me uwu</button>
      <ul>
        {MOVIES_DATA.map((movie) => (
          <div>
            <Movies 
              poster={movie.poster}
              title={movie.title}
              releaseDate={movie.releaseDate}
              duration={movie.duration}
              maturity={movie.maturity}
              genres={movie.genres}
              director={movie.director}
              mainActors={movie.mainActors}
              plot={movie.plot}
              metascore={movie.metascore}
              rating={movie.rating}
            />
            <hr />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
