import { Container, Input, Button } from "@components/base";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FilterState } from "@store/moviesSlice";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import Check from "@assets/Check";
import Cross from "@assets/Cross";

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
    onReset: () => {
      onSubmit({ year: "", type: "" });
    },
  });

  function handleYearBlur() {
    if (formik.touched.year && !formik.errors.year) {
      onSubmit(formik.values);
    }
  }

  return (
    <Container>
      <div className="py-2 my-3 italic block md:hidden border-b-2 border-slate-200">
        Filter by
      </div>
      <form onSubmit={formik.handleSubmit} className="flex mt-4 items-center">
        <div className="flex flex-grow items-center">
          <div className="mr-auto italic hidden md:block">Filter by</div>
          {formik.values.year || formik.values.type ? (
            <Button
              variant="light"
              size="small"
              onClick={() => formik.resetForm()}
              icon={<Cross />}
            />
          ) : null}
        </div>
        <div className="flex-none mx-2">
          <select
            className="py-3 px-4 md:px-6 block w-full rounded-md shadow-sm appearance-none border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
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
        <Button
          type="submit"
          variant="link"
          size="large"
          onClick={() => onSubmit(formik.values)}
          icon={<Check />}
        >
          <span className="hidden md:block">Apply</span>
        </Button>
      </form>
    </Container>
  );
};

export default MovieFilterBar;
