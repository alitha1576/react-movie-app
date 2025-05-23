import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Movies from "./pages/Movies.tsx";
import Series from "./pages/Series.tsx";
import Reviews from "./pages/Reviews.tsx";
import Error from "./pages/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Home },
      { path: "movies", Component: Movies },
      { path: "series", Component: Series },
      { path: "reviews", Component: Reviews },
      { path: "*", Component: Error },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
