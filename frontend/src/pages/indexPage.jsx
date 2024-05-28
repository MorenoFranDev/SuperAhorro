import AboutUs from "../Components/About/AboutUs/AboutUs";
import Contact from "../Components/About/Contact/Contact";
import IndexComponent from "../Components/Index/IndexComponent";

export default function IndexPage() {
  return (
    <>
    <section className="index">
      <IndexComponent />
    </section>
      <AboutUs />
      <Contact />
    </> 
  );
}
