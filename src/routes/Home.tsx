import { useEffect, useState } from "react";
import { MovieList, MovieFilterBar, MovieSearchBar } from "@components/feature";
import { Pagination } from "@components/base";
import Loading from "@components/block/Loading";
import Failed from "@components/block/Failed";
import { useAppDispatch, RootState } from "@store/index";
import {
  fetchMoviesAsync,
  updateSearchTerm,
  updateFilter,
  FilterState,
} from "@store/moviesSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);
  const totalResults = useSelector((state: RootState) => state.movies.totalResults);
  const searchTerm = useSelector((state: RootState) => state.movies.searchTerm || "");
  const type = useSelector((state: RootState) => state.movies.type);
  const year = useSelector((state: RootState) => state.movies.year);

  useEffect(() => {
    dispatch(fetchMoviesAsync({ searchTerm, page: currentPage, type, year }));
  }, [searchTerm, currentPage, type, year, dispatch]);

  function handleSearchTermChange(values: { search: string }) {
    dispatch(updateSearchTerm(values.search));
  }

  function handleFilterChange(values: FilterState) {
    console.log(values);
    dispatch(updateFilter(values));
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
      <MovieFilterBar onSubmit={handleFilterChange} />
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
