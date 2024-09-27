import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {

  return (
    <>
     <div className='App w-full flex justify-center font-summary-notes'>
      <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;
