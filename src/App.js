import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MovieCard from "./components/MovieCard";
import Search from "./pages/Search";

function App() {
   return (
      <>
         <Router>
            <NavBar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="movie/:id" element={<MovieCard />} />
               <Route path="search" element={<Search />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
