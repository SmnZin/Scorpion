import Header from "./Header";
import Footer from "../Footer";
import Body from "./Body";
import "./container-main.css";

function MainPage() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default MainPage;
