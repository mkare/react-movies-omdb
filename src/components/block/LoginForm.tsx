import React from "react";
import { Button, Container, Input } from "@components/base";
import { useFormik } from "formik";
const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "test@movie.db",
      password: "_test1234",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center justify-center w-full mt-8 gap-2"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <Input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          autoComplete="email"
          required
          placeholder="Email"
        />
        <Input
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          autoComplete="current-password"
          required
          placeholder="Password"
        />
        <Button variant="light" type="submit" className="mt-3">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
