import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import UserRepositories from "./components/UserRepositories";
import Organisations from "./pages/Organisations";
import UserDatils from "./pages/UserDetails";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Users />} />
        <Route path="users/:userId" element={<UserDatils />}>
          <Route index element={<UserRepositories />} />
        </Route>
        <Route path="organisations" element={<Organisations />}>
          <Route path=":userId" element={<UserDatils />}>
            <Route index element={<UserRepositories />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
