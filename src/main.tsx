import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Movies from "./pages/Movies.tsx";
import Series from "./pages/Series.tsx";
import Reviews from "./pages/Reviews.tsx";
import Error from "./pages/Error.tsx";
import Search from "./pages/Search.tsx";
import Watchlist from "./pages/Watchlist.tsx";
import CardDetails from "./components/CardDetails.tsx";
import { GlobalProvider } from "./context/GlobalState.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Home },
      {
        path: "movies",
        children: [
          { index: true, Component: Movies },
          { path: ":id", Component: CardDetails },
        ],
      },
      {
        path: "series",
        children: [
          { index: true, Component: Series },
          { path: ":id", Component: CardDetails },
        ],
      },
      {
        path: "search",
        children: [
          { index: true, Component: Search },
          { path: ":id", Component: CardDetails },
        ],
      },
      {
        path: "watchlist",
        children: [
          { index: true, Component: Watchlist },
          { path: ":id", Component: CardDetails },
        ],
      },
      {
        path: "home",
        children: [
          { index: true, Component: Home },
          { path: ":id", Component: CardDetails },
        ],
      },
      { path: "reviews", Component: Reviews },
      { path: "*", Component: Error },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);
