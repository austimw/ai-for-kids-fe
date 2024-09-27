import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {

  return (
    <>
     <div className='App w-full h-full flex justify-center items-center font-summary-notes bg-black'>
      <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;
