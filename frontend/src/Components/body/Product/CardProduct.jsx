import "../../../index.css";
import style from "./CardProduct.module.css";
import { GrCircleInformation } from "react-icons/gr";

export default function CardProduct({
  price,
  no_offer,
  offer,
  Product,
  Supermarket,
}) {
  const handleClick = (e) => {
    let item = {
      name: e.target.name,
      id: e.target.id,
    };
    const arrayProducts = JSON.parse(localStorage.getItem("CartShop"))
      ? JSON.parse(localStorage.getItem("CartShop"))
      : [];
    let result = arrayProducts.indexOf(
      (element) => element.name === item.name && element.id === item.id
    );
    // for(let i = 0; i < arrayProducts.length; i++){
    //   if(arrayProducts[i].name === item.name && arrayProducts[i].id === item.id){

    //   }
    // }

    console.log(result);
    // arrayProducts.push({ name: e.target.name, id: e.target.id, cantidad: 0 }) &&
    //   localStorage.setItem("CartShop", JSON.stringify(arrayProducts));
    console.log(arrayProducts);
  };
  return (
    <div className={style.card_product}>
      <div className={style.card_offert}>
        {offer === "No" ? null : <div className={style.Oferta}>Oferta</div>}
      </div>
      <div className={style.card_img}>
        <img src={Product.img} alt={Product.name} />
      </div>
      <div className={style.card_text}>
        <div className={style.card_labelOffer}>
          {offer == "No" ? null : <p className={style.promo_info}>{offer}</p>}
        </div>

        <p className={style.card_product_name}>{Product.name}</p>

        <div className={style.card_product_prices}>
          {offer == "No" ? null : (
            <p className={style.no_offert}>${no_offer}</p>
          )}
          <p> ${price} </p>
        </div>
      </div>
      <div className={style.button_area}>
        <GrCircleInformation className={style.link_fallen} />
        <label className={style.supermarket_name}>{Supermarket.name}</label>
        <button
          className={style.btn}
          onClick={handleClick}
          value={[Product.name, Product.id]}
          name={Product.name}
          id={Product.id}
        >
          anadir
        </button>
      </div>
    </div>
  );
}
