import style from "./Contact.module.css"

export default function Contact() {

  return (
    <section className={style.contact} id="contact">
    <div className={style.contact_area}>
      <form className={style.form}>
        <h2 className={style.contact_label}>Contact</h2>
        <div className={style.group}>
          <input type="text" placeholder="Asunto" className={style.input_form} />
          <span className={style.bar}></span>
        </div>
        <div className={style.group}>
          <input type="text" placeholder="Email" className={style.input_form} />
          <span className={style.bar}></span>
        </div>
        <div className={style.group}>
          <textarea rows="4" className={style.decription_form} placeholder="description"></textarea>
          <span className={style.bar}></span>
        </div>
        <button className={style.button}>Send</button>
      </form>
    </div>
  </section>
  )
}
