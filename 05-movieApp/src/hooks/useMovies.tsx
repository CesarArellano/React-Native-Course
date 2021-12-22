import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDbNowPlaying } from '../interfaces/movie_interface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMoviesNowPlaying = async () => {
    const nowPlayingPromise = movieDB.get<MovieDbNowPlaying>('/now_playing');
    const popularPromise = movieDB.get<MovieDbNowPlaying>('/popular');
    const topRatedPromise = movieDB.get<MovieDbNowPlaying>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDbNowPlaying>('/upcoming');

    const resp = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ])

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });

    setIsLoading( false );
  }

  useEffect(() => {
    getMoviesNowPlaying();
  }, [])
  
  return {
    ...moviesState,
    isLoading
  }
}
