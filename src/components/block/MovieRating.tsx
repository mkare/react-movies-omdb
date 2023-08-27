import type { Rating } from "types";
import { Title } from "@components/base";

type MovieRatingProps = {
  rating?: Array<Rating>;
};

const MovieRating: React.FC<MovieRatingProps> = ({ rating }) => {
  return (
    <div className="flex flex-col justify-center gap-2 italic bg-gradient-to-t from-slate-50 to-slate-50/80 py-4 px-6">
      <Title level={6} className="mr-2">
        Ratings:
      </Title>
      {rating &&
        rating.map((rate) => (
          <div key={rate.Source} className="flex mr-2">
            <span className="mr-2">{rate.Source}</span>
            <span className="font-bold">{rate.Value}</span>
          </div>
        ))}
    </div>
  );
};

export default MovieRating;
