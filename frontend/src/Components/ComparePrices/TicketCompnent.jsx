import axios from "axios";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function TicketCompnent() {
  const [tickets, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const productosEnLocalStorage = JSON.parse(
        localStorage.getItem("productos")
      );
      if (productosEnLocalStorage) {
        const ids = productosEnLocalStorage.map((producto) => producto.id);
        const body = { ProductId: ids };
        const result = await axios.post(
          "http://localhost:4000/product/cartshop",
          body
        );
        const productosConCantidad = result.data.map((tienda) =>({
          name: tienda.name,
          products: tienda.products.map((producto) => ({
            ...producto,
            cantidad:
              productosEnLocalStorage.find((p) => p.id == producto.id)
                ?.quantity || 0,
          })),
        }));
        console.log(productosConCantidad);
        setTicket(productosConCantidad);
      }
      setLoading(false);
    };
    get();
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="tiket_container">
      {tickets.map((item) => (
        <Ticket {...item} key={item.name} />
      ))}
    </div>
  );
}
