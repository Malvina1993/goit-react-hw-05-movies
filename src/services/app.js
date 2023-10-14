

// export const fetchMovies = async () => {
//     const {data} =
// }

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjBkYmIwNDllMGRmNzRiYTE3MWE5NjU1MDU5YWIwNyIsInN1YiI6IjY1MjZmNjI5Y2VkYWM0MDBjNTNmNTM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9TB35TyJQYBV7yJVhK4KajA_NqWQSsrfGhPd5aX6dNk'
  }
};

export const fetchMovies = async () => {
    const { data } = await axios
        .request(options);
    return data;
}


export const fetchMovieDetails = async (id) => {
  
   const {data} =  await axios
     .request({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjBkYmIwNDllMGRmNzRiYTE3MWE5NjU1MDU5YWIwNyIsInN1YiI6IjY1MjZmNjI5Y2VkYWM0MDBjNTNmNTM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9TB35TyJQYBV7yJVhK4KajA_NqWQSsrfGhPd5aX6dNk'
      }
      })
  return data;
}
  
export const fetchMovieCasts = async (id) => {
  const {data} = await axios
  .request({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjBkYmIwNDllMGRmNzRiYTE3MWE5NjU1MDU5YWIwNyIsInN1YiI6IjY1MjZmNjI5Y2VkYWM0MDBjNTNmNTM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9TB35TyJQYBV7yJVhK4KajA_NqWQSsrfGhPd5aX6dNk'
      }
    })
  return data
}


export const fetchMovieReviews = async (id) => {
  const { data } = await axios.request({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjBkYmIwNDllMGRmNzRiYTE3MWE5NjU1MDU5YWIwNyIsInN1YiI6IjY1MjZmNjI5Y2VkYWM0MDBjNTNmNTM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9TB35TyJQYBV7yJVhK4KajA_NqWQSsrfGhPd5aX6dNk'
    }
  })
  return data;
}

export const fetchMovieByQuery = async (query) => {
    const {data} = await axios.request({
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie`,
      params: { query: `${query}`,include_adult: 'true', language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjBkYmIwNDllMGRmNzRiYTE3MWE5NjU1MDU5YWIwNyIsInN1YiI6IjY1MjZmNjI5Y2VkYWM0MDBjNTNmNTM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9TB35TyJQYBV7yJVhK4KajA_NqWQSsrfGhPd5aX6dNk'
    }
  })
  
  return data;
}



