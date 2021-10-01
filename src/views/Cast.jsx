import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CastPage } from "../components/CastPage/CastPage";
import { fetchMovieCredits } from "../services/api-services";
import { toast } from "react-toastify";

export default function Cast() {
  const [movie, setMovie] = useState(null);
  const [reqStatus, setReqStatus] = useState("idle");
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCredits(movieId) {
      try {
        setReqStatus("pending");
        const movie = await fetchMovieCredits(movieId);
        setMovie(movie);
        setReqStatus("resolved");
      } catch (error) {
        setReqStatus("rejected");
        toast.error(error.message);
      }
    }
    getMovieCredits(movieId);
  }, [movieId]);

  return <CastPage movies={movie} reqStatus={reqStatus} />;
}
