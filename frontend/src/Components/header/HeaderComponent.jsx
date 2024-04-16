import { useState } from "react";
import style from "./HeaderComponent.module.css";
import { GrSearch } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  let cartshop = JSON.parse(localStorage.getItem("CartShop"));
  console.log(cartshop);
  const handleSubmit = (e) => {
    e.preventDefault();
    return navigate(`?name=${search}`);
  };

  const handleClick = () => {
    const cart = document.querySelector("#cartshop");
    console.log(cart);
    cart.classList.contains(style.disnable)
      ? cart.classList.replace(style.disnable, style.cart_Shop)
      : cart.classList.replace(style.cart_Shop, style.disnable);
  };

  return (
    <header>
      <div className={style.more_info}>
        <p className={style.logo}>SuperAhorro</p>
        <p>Contactanos</p>
        <p>Nosotros</p>
      </div>
      <div className={style.form}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={style.input_nav}
            placeholder="Busqueda de productos"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={style.button_nav} type="submit">
            <GrSearch />
          </button>
        </form>
      </div>
      <button onClick={handleClick} className={style.menu}>
        <GrCart />
      </button>

      <div id="cartshop" className={style.disnable}>
        <h2 className={style.link_to_cart}>Lista de compras</h2>
        <div className={style.cartShop_item}>
          <p>Aceite De Girasol Cocinero 900 Ml </p>
          <div className={style.item_buttons}>
            <button className={style.btn_delet}>-</button>
            <p className={style.cartshop_item_quantity}> 2</p>
            <button className={style.btn_agregar}>+</button>
          </div>
        </div>

        <Link to={"/cartshop"} className={style.link_to_cart}>
          <h2>comprar precios</h2>
        </Link>
      </div>
    </header>
  );
}
