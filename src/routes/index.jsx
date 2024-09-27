import {
  MainPage,
  LandingPage,
  CategoryPage,
  ColorGuessingGame,
  WalkthroughPage,
  LoginPage,
  ShowVideo,
  LoadingVideo
} from "../pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="landing-page" element={<LandingPage />} />
      <Route path="category-page" element={<CategoryPage />} />
      <Route path="color-guessing-game" element={<ColorGuessingGame />} />
      <Route path="walkthrough" element={<WalkthroughPage />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="login-page" element={<LoginPage />} />
      <Route path="home-page" element={<HomePage />} />
      <Route path="video" element={<ShowVideo />} />
      <Route path="video-loading" element={<LoadingVideo />} />
    </Route>
  )
);
