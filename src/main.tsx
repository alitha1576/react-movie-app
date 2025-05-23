import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReviewProvider } from "./context/ReviewContext.tsx";
import Home from "./pages/Home.tsx";
import Movies from "./pages/Movies.tsx";
import Series from "./pages/Series.tsx";
import Reviews from "./pages/Reviews.tsx";
import Error from "./pages/Error.tsx"; 
import App from "./App.tsx";
import CardDetails from "./components/CardDetails.tsx";

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
      { path: "movies/:id", Component: CardDetails },
      { path: "series/:id", Component: CardDetails },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReviewProvider>
    <RouterProvider router={router} />
  </ReviewProvider>
);
