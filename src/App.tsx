import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
