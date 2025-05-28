import { Footer } from "./components/Footer";
import Header from "./components/Header/page";
import Section from "./components/Section/page";

export default function Home() {
  return (
    <>
      <div className="hero_background"/>
      <Header />
      <Section />
      <Footer />
    </>
  );
}
