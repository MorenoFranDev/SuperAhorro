import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogePage from "./pages/CatalogePage";
import ComparePage from "./pages/ComparePage";


function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/index" />
    <Route path="/catalogo" element={<CatalogePage />} />
    <Route path="/catalogo/find" element={<CatalogePage />} />
    <Route path="/carrito" element={<ComparePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
