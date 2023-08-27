import React from "react";
import { Container, Input } from "@components/base";
import { useFormik } from "formik";
const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-primary-600">Login</h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center justify-center w-full mt-8"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  autoComplete="email"
                  required
                  placeholder="Email"
                />
              </div>
              <div>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md group hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <!-- Heroicon name: solid/lock-closed --> */}
                  <svg
                    className="w-5 h-5 text-primary-500 group-hover:text-primary-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
