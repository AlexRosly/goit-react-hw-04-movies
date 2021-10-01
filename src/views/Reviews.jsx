import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../services/api-services";
import { ReviewsPage } from "../components/ReviewsPage/ReviewsPage";
import { toast } from "react-toastify";

export default function Reviews() {
  const [movie, setMovie] = useState(null);
  const [reqStatus, setReqStatus] = useState("idle");
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews(movieId) {
      try {
        setReqStatus("pending");
        const movie = await fetchMovieReviews(movieId);
        setMovie(movie);
        setReqStatus("resolved");
      } catch (error) {
        setReqStatus("rejected");
        toast.error(error.message);
      }
    }
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {/* {movie && <ReviewsPage reviews={movie} reqStatus={reqStatus}/>} */}
      <ReviewsPage reviews={movie} reqStatus={reqStatus} />
    </>
  );
}
