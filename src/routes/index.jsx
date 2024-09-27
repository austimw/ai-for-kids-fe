import { MainPage, LandingPage } from '../pages';
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />}>
      <Route path='landing-page' element={<LandingPage />} />
    </Route>
  )
);
