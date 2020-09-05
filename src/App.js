import React from 'react';
import PropTypes from "prop-types";

const ghibliILike = [
  {
    id:1,
    name: "Totoro",
    image: "https://i.pinimg.com/564x/ef/ef/e4/efefe4ee1e559e54085bc8cc33d02897.jpg",
    rating: 5,
  },
  {
    id:2,
    name: "Haul",
    image: "https://pbs.twimg.com/profile_images/414670557779464193/ZcPavNDU.jpeg",
    rating: 4.9,
  },
  {
    id:3,
    name: "Ponyo",
    image: "https://img1.daumcdn.net/thumb/C400x400/?fname=http://t1.daumcdn.net/brunch/service/user/40yV/image/57msSqM71XQfFFReQZbkJm3c0Hg.jpg",
    rating: 4.8,
  },
]

Ghibli.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};


function App() {
  return (
    <div>
      {ghibliILike.map(go => (
        <Ghibli
         key={go.id}
         name={go.name}
         picture={go.image} 
         rating={go.rating} />
      ))}
    </div>
  );
}

function Ghibli({ name, picture, rating }){
  return(
    <div>
    <h1>I like {name} !</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    </div>
  );
}

export default App;
