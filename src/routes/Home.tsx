import { useLayoutEffect, useState } from "react";
import { MovieList, MovieSearchBar } from "@components/feature";
import { Pagination } from "@components/base";
import Loading from "@components/block/Loading";
import Failed from "@components/block/Failed";
import { useAppDispatch, RootState } from "@store/index";
import { fetchMoviesAsync, updateSearchTerm } from "@store/moviesSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);
  const totalResults = useSelector((state: RootState) => state.movies.totalResults);
  const searchTerm = useSelector((state: RootState) => state.movies.searchTerm || "");

  useLayoutEffect(() => {
    dispatch(fetchMoviesAsync({ searchTerm, page: currentPage }));
  }, [dispatch, searchTerm, currentPage]);

  function handleSearchTermChange(values: { search: string }) {
    dispatch(updateSearchTerm(values.search));
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
  }

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <Failed message="Broken!" />;
  }

  return (
    <>
      <MovieSearchBar onSubmit={handleSearchTermChange} />
      <MovieList movies={movies} searchTerm={searchTerm} />
      <Pagination
        totalPages={parseFloat(totalResults / 10 + "")}
        currentPage={currentPage}
        onPageChange={(page) => handlePageChange(page)}
        alignment="center"
      />
    </>
  );
};

export default Home;
