import { MovieList } from "@components/feature";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Watchlist: React.FC = () => {
  const watchlist = useSelector((state: RootState) => state.watchlist.list);

  if (watchlist.length === 0) {
    return (
      <div className="text-center text-slate-400">
        <div className="text-2xl mt-24">Your watchlist is empty</div>
        <div className="text-xl mt-1">
          Go to{" "}
          <Link to="/" className="text-slate-500 hover:text-primary-600">
            search page
          </Link>
          and add movies.
        </div>
      </div>
    );
  }

  return <MovieList movies={watchlist} />;
};

export default Watchlist;
