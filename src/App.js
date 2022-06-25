import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ShopScreen from "./screens/ShopScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer from "./components/Footer";
import ProductDetails from "./screens/ProductDetails";
import Account from "./components/Account";
import { Login } from "./components/Login";
import ScrollToTop from "./utilities/scrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div>
          <Header />

          <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/about" component={AboutScreen}></Route>
            <Route path="/shop" component={ShopScreen}></Route>
            <Route path="/contact" component={ContactScreen}></Route>
            <Route path="/product-details/:id" component={ProductDetails} exact></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/account" component={Account}></Route>
          </main>

          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
