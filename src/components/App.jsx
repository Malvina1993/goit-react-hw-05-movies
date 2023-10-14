import { NavLink, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage.js';
import { MoviePage } from '../pages/MoviePage.js';
import { MovieDetailsPage } from '../pages/MovieDetailsPage.js';
import { Cast } from './Cast/Cast.js';
import {Reviews} from './Reviews/Reviews.js'

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
          
        </nav>
      </header>


      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='/movies' element={<MoviePage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
            <Route path='cast' element={ <Cast/>} />
            <Route path='reviews' element={ <Reviews/>} />
          </Route>
        </Route>
      </Routes>


     
    </div>
  );
};
