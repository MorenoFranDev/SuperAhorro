import "../../../index.css";
import style from "./CardProduct.module.css";
import { GrCircleInformation } from "react-icons/gr";

export default function CardProduct({ price, no_offer, offer, Product,Supermarket }) {
  const handleClick = (e) =>{
    const productId = parseInt(e.target.value)
    const arrayProducts =  JSON.parse(localStorage.getItem("CartShop")) ?  JSON.parse(localStorage.getItem("CartShop")) :  []
     arrayProducts.push(productId)
    localStorage.setItem("CartShop",JSON.stringify(arrayProducts))
    console.log(arrayProducts)

  }
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
        <button className={style.btn} onClick={handleClick} value={Product.id}>anadir</button>
      </div>
    </div>
  );
}
