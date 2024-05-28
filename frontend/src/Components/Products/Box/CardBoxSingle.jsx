import style from "./CardProduct.module.css";
import { GrCircleInformation } from "react-icons/gr";
import useSound from "use-sound";
import song from "../../../assets/compra.mp3";
import { add_cart } from "../../../feautures/cart/cartSlice";
import { useDispatch } from 'react-redux'


export default function CardBoxSingle({price,no_offer,offer,Product,Supermarket}) {
  const [playSound] = useSound(song);
  const dispatch = useDispatch()

  const handleClick = (e) => {
    // playSound();
    const addToCartAction = {
        id: e.target.id,
        quantity: 1,
        name: e.target.name,
        price: e.target.value,
    };
    dispatch(add_cart(addToCartAction))
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
          <p className={style.price_label}> ${price} </p>
        </div>
      </div>
      <div className={style.button_area}>
        <GrCircleInformation className={style.link_fallen} />
        <label className={style.supermarket_name}>{Supermarket.name}</label>
        <button
          className={style.btn}
          onClick={handleClick}
          name={Product.name}
          value={price}
          id={Product.id}
        >
          anadir
        </button>
      </div>
    </div>
  );
}
