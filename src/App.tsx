import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
