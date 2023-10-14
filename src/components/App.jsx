import { NavLink, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage.js';
import { MoviePage } from '../pages/MoviePage.js';
import { MovieDetailsPage } from '../pages/MovieDetailsPage.js';

import css from './App.module.css'

export const App = () => {
  return (
    <div>

      <header>
        <nav>
          <NavLink className={({isActive}) => 
            `${css['headerNawLink']} ${isActive ? css.active : ''}`
        } to="/">Home</NavLink>
          <NavLink className={({isActive}) => 
            `${css['headerNawLink']} ${isActive ? css.active : ''}`
        } to="/movies">Movies</NavLink>
          <NavLink className={({isActive}) => 
            `${css['headerNawLink']} ${isActive ? css.active : ''}`
        } to="/movies/:movieId">MovieDetails</NavLink>
        </nav>
      </header>


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
      </Routes>


      {/* 9b0dbb049e0df74ba171a9655059ab07 key*/}
    </div>
  );
};
