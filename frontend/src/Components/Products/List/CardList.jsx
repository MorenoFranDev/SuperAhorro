import style from "./CardList.module.css";

export default function CardList({ item }) {
  return (
    <div className={style.card}>
      <p className={style.product_name}>{item[0].Product.name}</p>
      <div className={style.card_product}>
        <img src={item[0].Product.img} alt={item[0].Product.name} />
        <div className={style.card_table}>
          <table>
            <thead>
              <tr>
                <th className={style.item_name}>Supermarket</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {item.map((element, index) => (
              <tr key={index}>
                  <th className={style.item_name}>
                    {element.Supermarket.name}
                  </th>
                  <th>{element.price}</th>
              </tr>
                ))}
            </tbody>
          </table>
          <button>Agregar</button>
        </div>
      </div>
    </div>
  );
}
