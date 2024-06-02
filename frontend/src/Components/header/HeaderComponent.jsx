import { useState } from "react";
import style from "./HeaderComponent.module.css";
import { GrSearch } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_cart, delet_all, remove_cart } from "../../feautures/cart/cartSlice";
import logo from "/logoIndex.jpeg"


export default function HeaderComponent() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const productos = useSelector((state) => state.cart.productos);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/catalogo/find?name=${search}`, { replace: true });
  };

  const handleClick = () => {
    const cart = document.querySelector("#cartshop");
    cart.classList.contains(style.disnable)
      ? cart.classList.replace(style.disnable, style.cart_Shop)
      : cart.classList.replace(style.cart_Shop, style.disnable);
  };

  

  return (
    <header className={style.header}>
      <div className={style.more_info}>
        <img src={logo} className={style.imglogo}/>
        <Link  className={style.logo} to={"/"}>SuperAhorro
        </Link>
      </div>

      <div className={style.form}>
        <form onSubmit={handleSubmit}>
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

      <div className={style.button_actions}>
        <button onClick={handleClick} className={style.menu}>
          <GrCart />
        </button>
      </div>

      <div id="cartshop" className={style.disnable}>
        <h2 className={style.link_to_cart}>Lista de compras</h2>
        <div className={style.container_listcart}>
          {productos.map((item, index) => (
            <div key={index} className={style.cartShop_item}>
              <div className={style.product_cart}>
                <p className={style.product_name}>{item.name}</p>
                <p className={style.price}>{item.price}</p>
              </div>
              <div className={style.item_buttons}>
               <button className={style.btn_delet} onClick={()=>dispatch(remove_cart({id: item.id}))}>-</button>
               <p>{item.quantity}</p>
              <button className={style.btn_agregar} onClick={()=>dispatch(add_cart({id: item.id}))}>+</button> 
              </div>
            </div>
          ))}
        </div>
        <Link to={"/carrito"} className={style.link_to_cart}>
          <h2>comprar precios</h2>
        </Link>
        <button onClick={()=>dispatch(delet_all())}>ELIMINAR CARRITO</button>
      </div>
    </header>
  );
}
