import style from "./Ticket.module.css";
export default function Ticket({ name, products }) {
  var total = 0;
  return (
    <div className="card">
      <div className={style.card_two}>
        <p className={style.card_two_title}>{name}</p>
        <table className={style.card_table}>
          <thead>
            <tr>
              <th className={style.th_name}>Producto</th>
              <th className={style.th_price}>Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.map((element, index) => {
              total += element.price;
              return (
                <tr key={index}>
                  <th className={style.th_item}>{element.Product.name}</th>
                  <th>{element.price}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className={style.price_cart}>Subtotal: {total}</p>
      </div>
    </div>
  );
}
