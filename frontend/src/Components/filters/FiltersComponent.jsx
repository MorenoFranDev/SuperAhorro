import BtnFilters from "./BtnFilters";
import Select from "react-select";
import { GrMenu } from "react-icons/gr";
import { GrFlows } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";
import style from "./FiltersComponent.module.css";

export default function FiltersComponent({ options }) {
  const handleClick = () => {
    const options = document.querySelector("#options");
    options.classList.contains(style.options)
      ? options.classList.replace(style.options, style.active)
      : options.classList.replace(style.active, style.options);
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
            <button className={style.button_super} value={item.name} key={index} onClick={handleClick}>
              <img src={item.logo} alt={item.name} className={style.btn_img} />
            </button>
          ))}
        </div>
        <div className={style.grid_button}>
          <button className={style.btn}>
            <GrAppsRounded />
          </button>
          <button className={style.btn}>
            <GrFlows />
          </button>
          <button className={style.btn}>Filtro precio</button>
        </div>
      </div>
    </div>
  );
}
