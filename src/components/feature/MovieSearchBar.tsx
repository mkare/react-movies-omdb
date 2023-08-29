import { Container, Input, Button } from "@components/base";
import { useFormik } from "formik";
import * as Yup from "yup";
import Search from "@assets/Search";

type MovieSearchBarProps = {
  onSubmit: (values: { search: string }) => void;
};

const MovieSearchBar: React.FC<MovieSearchBarProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      search: "Pokemon",
    },
    validationSchema: Yup.object({
      search: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className="flex md:px-24 mt-4">
        <Input
          placeholder="Search..."
          containerClassName="flex-grow mr-2"
          name="search"
          onChange={formik.handleChange}
        />
        <Button variant="secondary" size="small" type="submit" icon={<Search />}>
          Search
        </Button>
      </form>
    </Container>
  );
};

export default MovieSearchBar;
