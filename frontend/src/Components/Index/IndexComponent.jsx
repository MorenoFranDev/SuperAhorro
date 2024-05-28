import style from "./indexComponent.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function IndexComponent() {
    const [search, setSearch] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/catalogo/find?name=${search}`);
    }

    return (
        <div className={style.home}>
            <div className={style.home_container}>
                <h1>SuperAhorro</h1>
                <h2>Buscar articulo</h2>
                <form className={style.home_form} onSubmit={handleSubmit} >
                    <input type="text" id="findSearch" className={style.home_form_input} placeholder="Buscar producto" onChange={(e)=>setSearch(e.target.value)} value={search}  />
                    {/* <div className={style.home_form_select}>
                        <label htmlFor="membership">Region:</label>
                        <select name="membership" className={style.home_form_select_box} id="membership" >
                            <option value="free">CABA</option>
                            <option value="bronze">Buenos Aires</option>
                            <option value="silver" selected>Formosa</option>
                            <option value="Gold">Corrientes</option>
                        </select>
                    </div> */}
                    <button className={style.home_form_button} type="submit" >Buscar</button>
                </form>
            </div>
        </div>
    )
}
