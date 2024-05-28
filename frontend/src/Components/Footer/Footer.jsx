import { Link } from "react-router-dom";
import style from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={style.footer}>
      <Link className={style.link}>Nosotros</Link>
      <Link className={style.link}>Contacto</Link>
    </div>
  );
}
