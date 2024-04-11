import "../../index.css";
import BtnFilters from "./BtnFilters";
import Select from "react-select";
import { GrMenu } from "react-icons/gr";
import style from "./FiltersComponent.module.css";

export default function FiltersComponent({ options }) {
  const handleClick = () => {
    const options = document.querySelector("#options");
    (options.classList.contains(style.options)) ?
    options.classList.replace(style.options, style.active) : options.classList.replace(style.active, style.options);
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
    <>
      <button onClick={handleClick} className={style.toggle}><GrMenu/></button>
      <div id="options" className={style.options}>
        <div className={style.options_list_category}>
          <Select options={dropdown} placeholder="Categoria" />
        </div>
        <div className={style.buttons}>
          {options.map((item, index) => (
            <BtnFilters {...item} key={index} />
          ))}
        </div>
        <button className={style.btn}>Filtro precio</button>
      </div>
    </>
  );
}
