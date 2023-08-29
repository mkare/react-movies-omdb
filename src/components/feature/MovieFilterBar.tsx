import { Container, Input, Button } from "@components/base";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FilterState } from "@store/moviesSlice";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import Check from "@assets/Check";

type MovieFilterBarProps = {
  onSubmit: (values: FilterState) => void;
};

const MovieFilterBar: React.FC<MovieFilterBarProps> = ({ onSubmit }) => {
  const type = useSelector((state: RootState) => state.movies.type || "");
  const year = useSelector((state: RootState) => state.movies.year || "");
  const formik = useFormik({
    initialValues: {
      year: year,
      type: type,
    },
    validationSchema: Yup.object({
      year: Yup.number().min(1900).max(2023),
      type: Yup.string().oneOf(["movie", "game", "series", "episode"]),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  function handleYearBlur() {
    if (formik.touched.year && !formik.errors.year) {
      onSubmit(formik.values);
    }
  }

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className="flex md:px-24 mt-4 items-center">
        <div className="flex-grow mr-3 italic text-center">Filter by</div>
        <div className="flex-none mr-2">
          <select
            className="py-3 px-6 block w-full rounded-md shadow-sm appearance-none border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            name="type"
            onChange={formik.handleChange}
            value={formik.values.type}
          >
            <option value="">Type</option>
            <option value="movie">Movie</option>
            <option value="game">Game</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>

          {formik.touched.type && formik.errors.type ? (
            <div className="text-red-500 text-xs italic">{formik.errors.type}</div>
          ) : null}
        </div>
        <div className="flex-none">
          <Input
            placeholder="Year..."
            containerClassName="flex-grow mr-2"
            name="year"
            onChange={formik.handleChange}
            onBlur={handleYearBlur}
            value={formik.values.year}
          />
          {formik.touched.year && formik.errors.year ? (
            <div className="text-red-500 text-xs italic">{formik.errors.year}</div>
          ) : null}
        </div>

        <Button
          type="submit"
          variant="link"
          size="large"
          onClick={() => onSubmit(formik.values)}
          icon={<Check />}
        >
          Apply
        </Button>
      </form>
    </Container>
  );
};

export default MovieFilterBar;
