import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/layouts/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
