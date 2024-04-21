import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogePage from "./pages/CatalogePage";
// import ComparePage from "./pages/ComparePage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/Catalogo" element={<CatalogePage />} />
        {/* <Route path="/carrito" element={<ComparePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
