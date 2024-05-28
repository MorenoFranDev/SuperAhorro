import { useEffect, useState } from "react";
import CardProduct from "./Box/CardBoxSingle";
import axios from "axios";
import FiltersComponent from "../Filters/FiltersComponent";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./ProductCatalogue.module.css";

export default function ProductCatalogue() {
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [totalPage, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://apisuperahorro.onrender.com/product/find${location.search}`
        );
        setOptions(response.data.Supermarkets);
        setProducts(response.data.Products);
        setTotalPages(response.data.Pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [location.search]);

  const prueba = async (page) => {
    setCurrentPage(page);
    const response = await axios.get(
      `https://apisuperahorro.onrender.com/product/find${location.search}&page=${page}`
    );
    setProducts(response.data.Products);
  };

  const onPreviusPage = () => {
    prueba(currentPage - 1);
  };

  const onNextPage = () => {
    prueba(currentPage + 1);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <section id="products" className={style.catalogue}>
      <FiltersComponent options={options} />

      <div className={style.Catalogue_product}>
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
      <div className={style.buttons}>
        <button className={style.btn} onClick={onPreviusPage}>
          Anterior
        </button>
        <p className={style.page}>{currentPage}</p>

        <button className={style.btn} onClick={onNextPage}>
          Siguiente
        </button>
      </div>
    </section>
  );
}
