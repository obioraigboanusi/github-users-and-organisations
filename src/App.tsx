import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import UserRepositories from "./components/UserRepositories";
import USerDatils from "./pages/UserDetails";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Users />} />
        <Route path="users/:userId" element={<USerDatils />}>
          <Route index element={<UserRepositories />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
