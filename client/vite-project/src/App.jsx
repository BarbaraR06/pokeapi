import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

axios.defaults.baseURL = "http://localhost:3000";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
