import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { MovieList } from "../components/MovieList/MovieList";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { fetchSearchMovie } from "../services/api-services";
import { toast } from "react-toastify";
import { Loaders } from "../components/Loader/Loader";

export default function MoviesPage() {
  // const [searchQuery, setSearchQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState(null);
  const [reqStatus, setReqStatus] = useState("idle");
  const history = useHistory();
  const location = useLocation();
  const pages = new URLSearchParams(location.search).get("page") ?? 1;
  const searchQuery = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function getMovie(searchQuery) {
      try {
        setReqStatus("pending");
        const movie = await fetchSearchMovie(searchQuery, pages);
        setMovie(movie);
        setPage(movie.total_pages);
        setReqStatus("resolved");
      } catch (error) {
        setReqStatus("rejected");
        toast.error(error.message);
      }
    }
    getMovie(searchQuery);
  }, [searchQuery, pages]);

  const handeleFormSubmit = (query) => {
    history.push({ ...location, search: `query=${query}&page=${pages}` });
    setMovie([]);
  };

  return (
    <>
      {reqStatus === "pending" && <Loaders />}
      <SearchForm onSearch={handeleFormSubmit} />
      {movie && <MovieList movies={movie} />}
    </>
  );
}
