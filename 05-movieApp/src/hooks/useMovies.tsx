import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDbNowPlaying } from '../interfaces/movie_interface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);

  const getMoviesNowPlaying = async () => {
    const resp = await movieDB.get<MovieDbNowPlaying>('/now_playing');

    setMoviesInCinema( resp.data.results );
    setIsLoading( false );
  }

  useEffect(() => {
    getMoviesNowPlaying();
  }, [])
  
  return {
    moviesInCinema,
    isLoading
  }
}
