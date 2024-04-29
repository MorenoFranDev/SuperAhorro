import Select from "react-select";
import { GrMenu } from "react-icons/gr";
import { GrFlows } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";
import style from "./FiltersComponent.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function FiltersComponent({ options }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    const options = document.querySelector("#options");
    options.classList.contains(style.options)
      ? options.classList.replace(style.options, style.active)
      : options.classList.replace(style.active, style.options);
  };

  const handleClickLayoutGird = (e) => {
    if (location.search.includes("layout=list")) {
      const search = location.search.replace("layout=list", "layout=grid");
      navigate(`${location.pathname}${search}`);
    }
  };
  const handleClickLayoutList = () => {
    if (!location.search.includes("layout=list"))
      navigate(`${location.pathname}${location.search}` + "&layout=list");

    if (location.search.includes("layout=grid")) {
      const search = location.search.replace("layout=grid", "layout=list");
      navigate(`${location.pathname}${search}`);
    }
  };

  const handleClickFiltro = () => {
    if (location.search.includes("order=ASC")) {
      const search = location.search.replace("&order=ASC", "");
      navigate(`${location.pathname}${search}`);
    } else {
      navigate(`${location.pathname}${location.search}` + "&order=ASC");
    }
  };

  const handleClickSupermarket = (e) => {
    console.log(e.target.alt);
    if (url_actual.includes(supermarket)) {
      const url = url_actual.replace(supermarket, "").replace("&", "");
      navigate(url);
    } else {
      const url = `${location.pathname}${location.search}&market=${e.target.alt}`;
      navigate(url);
    }
  };

  const dropdown = [
    { value: "chocolate", label: "almacen" },
    { value: "strawberry", label: "bebidas" },
    { value: "vanilla", label: "carnes" },
    { value: "vanilla", label: "frutas y verduras" },
    { value: "vanilla", label: "lacteos" },
    { value: "vanilla", label: "limpieza" },
    { value: "vanilla", label: "quesos y fiambres" },
    { value: "vanilla", label: "congelados" },
    { value: "vanilla", label: "panaderia y reposteria" },
    { value: "vanilla", label: "comidas preparadas" },
    { value: "vanilla", label: "panaderia y reposteria" },
  ];

  return (
    <div>
      <button onClick={handleClick} className={style.toggle}>
        <GrMenu />
      </button>
      <div id="options" className={style.options}>
        <div className={style.options_list_category}>
          <Select options={dropdown} placeholder="Categoria" />
        </div>
        <div className={style.buttons}>
          {options.map((item, index) => (
            <button
              className={style.button_super}
              value={item.name}
              key={index}
              onClick={handleClickSupermarket}
            >
              <img src={item.logo} alt={item.name} className={style.btn_img} />
            </button>
          ))}
        </div>
        <div className={style.grid_button}>
          <button className={style.btn} onClick={handleClickLayoutGird}>
            <GrAppsRounded />
          </button>
          <button className={style.btn} onClick={handleClickLayoutList}>
            <GrFlows />
          </button>
          <button className={style.btn} onClick={handleClickFiltro}>
            Filtro precio
          </button>
        </div>
      </div>
    </div>
  );
}

// const handleClick = (e) => {
//   console.log(e.target.alt)
//   if (url_actual.includes(supermarket)) {
//     const url = url_actual.replace(supermarket, "").replace("&", "");
//     navigate(url);
//   } else {
//     const url = `${location.pathname}${location.search}&market=${e.target.alt}`;
//     navigate(url);
//   }
// };
