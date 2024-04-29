import { useEffect, useState } from "react";
import CardProduct from "./Box/CardBoxSingle";
import axios from "axios";
import FiltersComponent from "../Filters/FiltersComponent";
import { useLocation } from "react-router-dom";
import Database from "../../../DB.json";
import CardList from "./List/CardList";
import style from "./ProductCatalogue.module.css";

export default function ProductCatalogue() {
  const [products, setProducts] = useState();
  const [options, setOptions] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [layout, setLayout] = useState("grid");

  useEffect(() => {
    const get = async () => {
      const result = await axios.get(
        `http://localhost:3000/product/find${location.search}`
      );
      setProducts(result.data.Pruducts);
      setOptions(result.data.Supermarkets);
      setLoading(false);
    };
    (location.search.includes("layout=list")) ? setLayout("list") : setLayout("grid")   
    get();
  }, [location]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const groupedData = Object.values(
    products.reduce((acc, curr) => {
      const productId = curr.Product.id;
      if (!acc[productId]) {
        acc[productId] = [];
      }
      acc[productId].push(curr);
      return acc;
    }, {})
  );

  return (
    <section id="products" className={style.catalogue}>
      <FiltersComponent options={options} />

      {layout === "grid" ? (
        <div className={style.Catalogue_product}>
          {products.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className={style.Catalogue_list}>
          {groupedData.map((item, index) => (
            <CardList item={item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
}
