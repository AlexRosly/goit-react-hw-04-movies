import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import { Loaders } from "./components/Loader/Loader";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

// import { ToastContainer } from "react-toastify";
// import HomePage from "./views/HomePage";
// import MoviesPage from "./views/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage";
// import NotFoundView from "./views/NotFoundView";

const HomePage = lazy(() =>
  import("./views/HomePage.jsx" /*webpackChunkName: "home-page"*/)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /*webpackChunkName: "movies-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /*webpackChunkName: "movies-details-page"*/)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /*webpackChunkName: "not-found-page"*/)
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loaders />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
        {/* <ToastContainer autoClose={5000} /> */}
      </Suspense>
    </Container>
  );
}
