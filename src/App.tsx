import { Route, Routes, Navigate } from "react-router";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import NewLostPet from "./pages/NewLostPet/NewLostPet";
import Login from "./pages/Auth/Login";

export default function App() {
  // const isLoggedIn = false;
  return (
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      />
      <Route path="/post-lost-pet" element={<NewLostPet />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
