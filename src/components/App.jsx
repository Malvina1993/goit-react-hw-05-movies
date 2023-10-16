import { NavLink, Routes, Route } from 'react-router-dom';

// import MoviePage from '../pages/MoviePage.js';
// import MovieDetailsPage from '../pages/MovieDetailsPage.js';
// import { Cast } from './Cast/Cast.js';
// import { Reviews } from './Reviews/Reviews.js';

import css from './App.module.css';
// import HomePage from '../pages/HomePage.js';
import { lazy } from 'react';
import { Suspense } from 'react';
import Loader from './Loader/Loader.js';


const HomePage = lazy(() => import('../pages/HomePage/HomePage.js'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage.js'));
const Cast = lazy(() => import('./Cast/Cast.js'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage.js'));
const  Reviews = lazy(() => import('./Reviews/Reviews.js'));

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


      <Suspense fallback={<Loader/>}> 
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>} />
            <Route path='/movies' element={<MoviePage />} />
            <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
              <Route path='cast' element={ <Cast/>} />
              <Route path='reviews' element={ <Reviews/>} />
            </Route>
          </Route>
        </Routes>
      </Suspense>


     
    </div>
  );
};
