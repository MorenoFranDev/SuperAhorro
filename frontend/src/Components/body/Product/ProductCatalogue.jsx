import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
// import axios from "axios";
import FiltersComponent from "../../filters/FiltersComponent";
import { useLocation } from "react-router-dom";
import "./../../../index.css";
import Database from "../../../../DB.json"

export default function ProductCatalogue() {
  const [products, setProducts] = useState(Database.Pruducts);
  const [options, setOptions] = useState(Database.Supermarkets);
  console.log(Database)
  // console.log(products)
  const [loading, setLoading] = useState(true);
  // const location = useLocation();

  // useEffect(() => {
  //   const get = async () => {
  //     const result = await axios.get(
  //       `http://localhost:3000/product/find${location.search}`
  //     );
  //     setProducts(result.data.Pruducts);
  //     setOptions(result.data.Supermarkets);
  //     setLoading(false);
  //   };
  //   get();
  // }, [location]);

  // if (loading) {
  //   return <h1>Loading</h1>;
  // }
  return (
    <div className="catalogue">
      <FiltersComponent options={options} />
      <div className="Catalogue_product">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
