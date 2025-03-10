import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ShopEase from "./Pages/ProjectPages/ShopEase";
import HetainCodes from "./Pages/ProjectPages/HetainCodes";
import Weddingzzz from "./Pages/ProjectPages/Weddingzzz";
import ContactMe from "./Pages/ContactMe";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="ShopEase" element={<ShopEase />} />
          <Route path="HetainCodes" element={<HetainCodes />} />
          <Route path="Weddingzzz" element={<Weddingzzz />} />
          <Route path="contactMe" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
