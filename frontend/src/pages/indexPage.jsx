export default function IndexPage() {
  return (
    <div className="home">
        <div className="home_container">

      <h1>SuperAhorro</h1>
      <h2>Buscar articulo</h2>
      <form className="home_form">
        <input type="text" className="home_form_input" placeholder="Buscar producto"/>
        <div className="home_form_select">
          <label htmlFor="membership">Region:</label>
          <select name="membership" className="home_form_select_box" id="membership" >
            <option value="free">CABA</option>
            <option value="bronze">Buenos Aires</option>
            <option value="silver" selected>Formosa</option>
            <option value="Gold">Corrientes</option>
          </select>
        </div>
        <button className="home_form_button">Buscar</button>
      </form>
        </div>
    </div>
  );
}
