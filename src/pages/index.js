import Footer from "@/components/Footer/Footer";
import Header from "../components/header/Header";
import Contact from "../components/Contact/Contact";
import Plans from "../components/Plans/Plans";
import Form from "../components/Form/Form";
import Business from "../components/Business/Business";
import GreatWork from "../components/GreatWork/GreatWork";
import Principalpage from "../components/Principalpage/principalpage";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Principalpage />
      <GreatWork/> */}
      {/* <Business />
      <Form /> */}
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}
