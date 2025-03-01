import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search";

const LayOut = () => (
   <>
      <NavBar />
      <Outlet />
   </>
);

const router = createBrowserRouter([
   {
      path: "/",
      element: <LayOut />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/movie/:id", element: <MovieDetails /> },
         { path: "/search", element: <Search /> },
      ],
   },
]);
function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
