import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function BtnFilters({ name, logo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const supermarket = location.search.split("&")[1];
  const url_actual = `${location.pathname}${location.search}`;

  const handleClick = (e) => {
    console.log(e.target.alt)
    if (url_actual.includes(supermarket)) {
      const url = url_actual.replace(supermarket, "").replace("&", "");
      navigate(url);
    } else {
      const url = `${location.pathname}${location.search}&market=${e.target.alt}`;
      navigate(url);
    }
  };
  return (
    <button value={name} className="btn" onClick={handleClick}>
      <img src={logo} alt={name} className="btn_img" />
    </button>
  );
}
