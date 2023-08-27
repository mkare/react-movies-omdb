import { Badge, Title } from "@components/base";

type MovieHeaderProps = {
  title?: string;
  type?: string;
  rating?: number;
  rated?: string;
  year?: number;
  runtime?: string;
};

const MovieHeader: React.FC<MovieHeaderProps> = ({
  title,
  type,
  rating,
  rated,
  year,
  runtime,
}) => {
  return (
    <div className="bg-slate-50/80 p-6 rounded-t-xl">
      <Title level={3} className="mt-3">
        {title}
      </Title>
      <div className="grid grid-cols-3 gap-3 my-4 md:flex md:gap-2">
        <Badge variant={type === "movie" ? "info" : "primary"}>{type}</Badge>
        <Badge variant="success">{rating}</Badge>
        <Badge variant="warning">{rated}</Badge>
        <Badge variant="neutral" className="col-span-2">
          Year : {year}
        </Badge>
        <Badge variant="neutral">{runtime}</Badge>
      </div>
    </div>
  );
};

export default MovieHeader;
