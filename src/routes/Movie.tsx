import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@store/index";
import { fetchMovieAsync } from "@store/moviesSlice";
import { Button, Container } from "@components/base";
import Loading from "@components/block/Loading";
import Failed from "@components/block/Failed";
import MovieDetail from "@components/feature/MovieDetail";

const Movie: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useSelector((state: RootState) => state.movies.currentMovie);
  const status = useSelector((state: RootState) => state.movies.status);

  useLayoutEffect(() => {
    if (typeof id === "string" && movie?.imdbID !== id) {
      dispatch(fetchMovieAsync(id));
    }
  }, [dispatch, id, movie?.imdbID]);

  if (status === "loading") return <Loading />;

  if (status === "failed") return <Failed />;

  function handleBackClick() {
    window.history.back();
  }

  return (
    <Container>
      {movie && (
        <>
          <div className="w-full h-screen fixed top-0 left-0 -z-10 bg-secondary-900"></div>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full fixed top-0 left-0 -z-10 object-cover opacity-50 filter blur"
          />
          <MovieDetail movie={movie}>
            <div className="flex justify-center md:justify-start">
              <Button
                className="mb-4"
                variant="secondary"
                size="small"
                onClick={handleBackClick}
                outline
              >
                Back to search
              </Button>
            </div>
          </MovieDetail>
        </>
      )}
    </Container>
  );
};

export default Movie;
