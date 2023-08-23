import NewCatalogue from "./components/NewCatalogue"
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <h1>Hackflix</h1>
      <Routes>
        <Route path="/" element={<NewCatalogue />}/>
        <Route path="/movie/:movieID" element={<MovieDetails />} />
      </Routes>
      
    </>
  );
}

export default App;
