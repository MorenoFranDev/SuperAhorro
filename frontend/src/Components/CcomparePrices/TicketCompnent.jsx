import axios from "axios";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function TicketCompnent() {
  const [tickets, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const body  = {"ProductId" : JSON.parse(localStorage.getItem("CartShop"))}
      const result = await axios.post(
        "http://localhost:3000/product/cartshop",
        body
      );
      setTicket(result.data);
      setLoading(false);
      console.log(result)
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
