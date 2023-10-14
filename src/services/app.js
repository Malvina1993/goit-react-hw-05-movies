

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


  