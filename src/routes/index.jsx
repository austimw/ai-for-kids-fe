import {
  MainPage,
  LandingPage,
  CategoryPage,
  ColorGuessingGame,
  WalkthroughPage,
  LoginPage,
} from "../pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="landing-page" element={<LandingPage />} />
      <Route path="category-page" element={<CategoryPage />} />
      <Route path="color-guessing-game" element={<ColorGuessingGame />} />
      <Route path="walkthrough" element={<WalkthroughPage />} />
      <Route path="login-page" element={<LoginPage />} />
      <Route path="home-page" element={<HomePage />} />
    </Route>
  )
);
