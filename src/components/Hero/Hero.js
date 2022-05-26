/* import Styled Component Hero */
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import StyledHero from './Hero.styled';

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    // melakukan side effect: fetch data movie (api) 
    const response = await fetch(url);
    const data = await response.json();

    // set movie dengan data movie hasil fetch
    setMovie(data);
  }

  useEffect(fetchMovie, []);

  // menampilkan state movie
  console.log(movie);

  return (
    <StyledHero>
      <section>
        <article>
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button>Watch</Button>
        </article>
        <aside>
          <img
              src={movie.Poster}
              alt={movie.Title}
            />
        </aside>
      </section>
    </StyledHero>
  );
}

export default Hero;
