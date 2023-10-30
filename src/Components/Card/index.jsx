

import React, { useState } from 'react';
import styles from './Card.module.css';

export const Card = ({ item }) => {
  const [isread, setisRead] = useState(false);
  const [isFav, setisFav] = useState(false);

  const addFavorite = () => {
    setisFav(!isFav);
  };

  const readMore = () => {
    setisRead(!isread);
  };

  return (
    <div key={item.Title} className="card w-25 m-5">
      <button className={`btn ${isFav ? 'bg-success' : 'bg-danger'} ${styles.addFav}`} onClick={addFavorite}>
        {isFav ? 'Remove Fav' : 'Add Fav'}
      </button>
      <div>
        <img width="100%" src={item.Poster} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.Title}</h5>
        <p className="card-text ">{item.Year}</p>
        <p className="card-text">{item.Type}</p>
        <p className={`card-text ${isread ? 'd-block' : 'd-none'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime similique incidunt iste provident distinctio nobis culpa ratione? Exercitationem facere quae corrupti voluptas possimus. Doloremque vel nulla ipsam quo animi!
        </p>
        <button className="btn btn-primary" onClick={readMore}>
          {isread ? 'Close' : 'Read More'}
        </button>
      </div>
    </div>
  );
};