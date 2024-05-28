import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogePage from "./pages/CatalogePage";
import IndexPage from "./pages/IndexPage";
import ComparePage from "./pages/ComparePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/Catalogo/find" element={<CatalogePage />} />
        <Route path="/carrito" element={<ComparePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
