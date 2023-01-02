import { useState } from 'react';
import { fetchTrendingMovies } from 'services/fetchMoviesApi';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([fetchTrendingMovies()]);
  setTrendingMovies(fetchTrendingMovies());
  console.log(trendingMovies);
  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.name ?? movie.title}</li>
        ))}
      </ul>
    </main>
  );
};
