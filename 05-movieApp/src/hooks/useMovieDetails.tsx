import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
}

export const useMovieDetails = ( movieId:number ) => {
  const [ movieDetails, setMovieDetails ] = useState<MovieDetails>({
    isLoading: true,
    cast: [],
  });

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const respCredits = await movieDB.get<CreditsResponse>(`/${ movieId }/credits`);
    setMovieDetails( {
      isLoading: false,
      cast: respCredits.data.cast,
    });
  }

  return {
    movieDetails
  }
}
