import Carousel from "./components/Carousel/Carousel.component";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import Main from "./components/Main/Main.component";
import Product from "./components/Product/Product.component";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
