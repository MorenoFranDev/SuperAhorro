import axios from "axios";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function TicketCompnent() {
  const [tickets, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productQuantity, setProductQuantity] = useState();

  useEffect(() => {
    const get = async () => {
      const productosEnLocalStorage = JSON.parse(
        localStorage.getItem("productos")
      );
      if (productosEnLocalStorage) {
        const cart_quantity = productosEnLocalStorage.map((producto) => ({
          id: producto.id,
          cantidad: producto.quantity,
        }));
        setProductQuantity(cart_quantity);
        const ids = productosEnLocalStorage.map((producto) => producto.id);
        const body = { ProductId: ids };
        const result = await axios.post(
          "https://apisuperahorro.onrender.com/product/cartshop",
          body
        );

        const productosConCantidad = result.data.map((tienda) => ({
          name: tienda.name,
          products: tienda.products.map((producto) => ({
            ...producto,
            cantidad:
              productosEnLocalStorage.find((p) => p.id == producto.id)
                ?.quantity || 0,
          })),
        }));

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
