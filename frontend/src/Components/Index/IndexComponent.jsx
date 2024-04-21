import style from "./indexComponent.module.css"

export default function IndexComponent() {
    return (
        <div className={style.home}>
            <div className={style.home_container}>
                <h1>SuperAhorro</h1>
                <h2>Buscar articulo</h2>
                <form className={style.home_form}>
                    <input type="text" className={style.home_form_input} placeholder="Buscar producto" />
                    <div className={style.home_form_select}>
                        <label htmlFor="membership">Region:</label>
                        <select name="membership" className={style.home_form_select_box} id="membership" >
                            <option value="free">CABA</option>
                            <option value="bronze">Buenos Aires</option>
                            <option value="silver" selected>Formosa</option>
                            <option value="Gold">Corrientes</option>
                        </select>
                    </div>
                    <button className={style.home_form_button}>Buscar</button>
                </form>
            </div>
        </div>
    )
}
