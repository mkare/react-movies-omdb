import { Route, Routes } from "react-router-dom";

import { BaseLayout, AuthLayout } from "@layouts/index";
import Home from "./Home";
import Movie from "./Movie";
import Watchlist from "./Watchlist";
import Auth from "./Auth";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route
          path="*"
          element={<h1 className="text-center my-4 font-bold">Page Not Found</h1>}
        />
        <Route path="/list" element={<Watchlist />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Auth />} />
      </Route>
      <Route path="/register" element={<AuthLayout />}>
        <Route index element={<h1>Register</h1>} />
      </Route>
    </Routes>
  );
}
