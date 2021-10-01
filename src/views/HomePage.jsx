import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { fetchMovies } from "../services/api-services";
import { toast } from "react-toastify";
import { Loaders } from "../components/Loader/Loader";

export default function HomePage() {
  const [trends, setTrends] = useState(null);
  const [reqStatus, setReqStatus] = useState("idle");

  useEffect(() => {
    async function getMovies() {
      try {
        setReqStatus("pending");
        const movies = await fetchMovies();
        setTrends(movies);
        setReqStatus("resolved");
      } catch (error) {
        setReqStatus("rejected");
        toast.error(error.message);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      {reqStatus === "pending" && <Loaders />}
      {trends && <MovieList movies={trends} />}
    </>
  );
}
