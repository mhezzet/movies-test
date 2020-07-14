import React from "react";
import { api } from "./axios";
import useSWR from "swr";

const getMovies = () => api.get("/movies").then(({ data }) => data);

function App() {
  const { data: movies, error } = useSWR("movies", getMovies);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>movies</h1>
      <ul>
        {movies?.map((movie) => (
          <li>
            <h4>{movie.title}</h4>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
