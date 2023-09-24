import React, { useEffect, useRef } from "react";
import { Button, Container, Input } from "@components/base";
import { useFormik } from "formik";
import { setToken, resetToken } from "@store/authSlice";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "@store/index";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "test@movie.db",
      password: "_test1234",
    },
    onSubmit: (values) => {
      dispatch(setToken(values.email));
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    formRef.current?.classList.add("animate-fade-up");
    if (token) {
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }
  }, [token, navigate]);

  if (token) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center w-full mt-8 gap-2 animate-fade-up">
          <h2 className="text-xl font-semibold text-white">Welcome to MovieDB!</h2>
          <h3 className="text-lg font-normal text-white mb-6">
            You will be redirected to the home page.
          </h3>
          <Button
            variant="light"
            onClick={() => {
              dispatch(resetToken());
            }}
          >
            Logout
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center justify-center w-full mt-8 gap-2"
        ref={formRef}
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
