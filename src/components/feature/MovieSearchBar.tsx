import { Container, Input, Button } from "@components/base";
import { useFormik } from "formik";
import * as Yup from "yup";
import Search from "@assets/icons/Search";
import { useSelector } from "react-redux";
import { RootState } from "store";

type MovieSearchBarProps = {
  onSubmit: (values: { search: string }) => void;
};

const MovieSearchBar: React.FC<MovieSearchBarProps> = ({ onSubmit }) => {
  const searchTerm = useSelector(
    (state: RootState) => state.movies.searchTerm || "Pokemon"
  );

  const formik = useFormik({
    initialValues: {
      search: searchTerm,
    },
    validationSchema: Yup.object({
      search: Yup.string(),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const handleFocus = () => {
    formik.setFieldValue("search", "");
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className="flex md:px-24 mt-4">
        <Input
          placeholder="Search..."
          containerClassName="flex-grow mr-2"
          name="search"
          onChange={formik.handleChange}
          onFocus={handleFocus}
          value={formik.values.search}
        />
        <Button variant="secondary" size="small" type="submit" icon={<Search />}>
          Search
        </Button>
      </form>
      {formik.touched.search && formik.errors.search ? (
        <div className="text-red-500 text-sm italic">{formik.errors.search}</div>
      ) : null}
    </Container>
  );
};

export default MovieSearchBar;
