import { MainPage, LandingPage, CategoryPage, ColorGuessingGame, LoginPage } from '../pages';
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />}>
      <Route path='landing-page' element={<LandingPage />} />
      <Route path='category-page' element={<CategoryPage />} />
      <Route path='color-guessing-game' element={<ColorGuessingGame />} />
      <Route path='login-page' element={<LoginPage />} />
    </Route>
  )
);
