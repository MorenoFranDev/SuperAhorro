import style from "./AboutUs.module.css";
export default function AboutUs() {
  return (
    <section className={style.about}>
      <div className={style.about_area}>
        <p className={style.title}>Sobre Nosotros</p>
        <p className={style.about_desciption}>
          Somos un grupo de personas que trabajamos en conjunto para que este
          proyecto pueda ser posible y así poder otorgar una herramienta (de la
          máxima calidad posible que podamos) a las personas de forma gratuita.
          Así mismo, esperamos que encuentren esta herramienta como algo útil y
          que les sirva para que pueda cumplir con el propósito por la que fue
          creada. Creemos que su opinión es parte fundamental para que el
          proyecto pueda seguir mejorando y creciendo día tras día, es por eso
          que agradecemos cualquier comentario, siempre y cuando sea en un marco
          de respeto y responsable. Los saluda muy atentamente el equipo de
          Super Ahorro 😊
        </p>
      </div>
    </section>
  );
}
