import {
  MainPage,
  LandingPage,
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
import Activity from "../pages/Activity";
import ActivityCompleted from "../pages/ActivityCompleted";
import BadgesPage from "../pages/Badges";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="landing-page" element={<LandingPage />} />
      <Route path="game" element={<ColorGuessingGame />} />
      <Route path="walkthrough" element={<WalkthroughPage />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="video/:id" element={<ShowVideo />} />
      <Route path="video-loading" element={<LoadingVideo />} />
      <Route path="activity" element={<Activity />} />
      <Route path="activity-completed" element={<ActivityCompleted />} />
      <Route path="badges" element={<BadgesPage />} />
    </Route>
  )
);
