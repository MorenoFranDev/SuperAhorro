import { useState } from "react";
import style from "./HeaderComponent.module.css";
import { GrSearch } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    return navigate(`?name=${search}`);
  };

 

  return (
    <header>
      <div className={style.more_info}>
        <h2 className={style.logo}>SuperAhorro</h2>
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
          <button className={style.button_nav} type="submit" >
            <GrSearch  />
          </button>
        </form>
      </div>
      <div className={style.menu}>
        <Link className={style.cartshop} to={"/carrito"}>
        <GrCart/>
        </Link>
      </div>
    </header>
  );
}
