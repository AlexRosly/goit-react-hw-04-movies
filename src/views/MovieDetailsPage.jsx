import { useState, useEffect, lazy, Suspense } from "react";
import { fetchMovieDetails } from "../services/api-services";
import {
  useParams,
  useHistory,
  useLocation,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import { MoviePage } from "../components/MoviePage/MoviePage";
import { Button } from "../components/Button/Button";
import { toast } from "react-toastify";
import { Loaders } from "../components/Loader/Loader";
import NotFoundView from "./NotFoundView";
// import Cast from "../views/Cast";
// import Reviews from '../views/Reviews';

const Cast = lazy(() => import("../views/Cast.jsx"));
const Reviews = lazy(() => import("../views/Reviews"));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [reqStatus, setReqStatus] = useState("idle");
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie(movieId) {
      try {
        setReqStatus("pending");
        const movie = await fetchMovieDetails(movieId);
        setMovie(movie);
        setReqStatus("resolved");
      } catch (error) {
        setReqStatus("rejected");
        toast.error(error.message);
      }
    }
    getMovie(movieId);
  }, [movieId]);

  const handeleOnGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <Button onClick={handeleOnGoBack} />
      {movie && <MoviePage movie={movie} />}
      <NavLink
        to={{
          pathname: `${url}/cast`,
          state: { from: location?.state?.from },
        }}
        className="movie-link"
        activeClassName="movie-activelink"
      >
        Cast
      </NavLink>

      <NavLink
        to={{
          pathname: `${url}/reviews`,
          state: { from: location?.state?.from },
        }}
        className="movie-link"
        activeClassName="movie-activelink"
      >
        Reviews
      </NavLink>

      <Suspense fallback={<Loaders />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
      {reqStatus === "rejected" && <NotFoundView />}
    </>
  );
}
