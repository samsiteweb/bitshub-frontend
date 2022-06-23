import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ShopScreen from "./screens/ShopScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import { Login } from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/about" component={AboutScreen}></Route>
          <Route path="/shop" component={ShopScreen}></Route>
          <Route path="/contact" component={ContactScreen}></Route>
          <Route path="/product-details" component={ProductDetails}></Route>
          <Route path="/login" component={Login}></Route>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
