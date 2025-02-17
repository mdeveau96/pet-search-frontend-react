import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route} from "react-router";
import NewLostPet from "./pages/NewLostPet/NewLostPet.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/post-lost-pet" element={<NewLostPet/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
