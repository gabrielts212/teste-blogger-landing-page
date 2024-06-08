import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Contact from "../components/contact/contact";
import Plans from "../components/plans/plans";
import Form from "../components/form/form";
import Business from "../components/business/business";
import GreatWork from "../components/greatwork/greatwork";
import Principalpage from "../components/principalpage/principalpage";

export default function Home() {
  return (
    <div>
      <Header />
      <Principalpage />
      <GreatWork/>
      <Business />
      <Form />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}
