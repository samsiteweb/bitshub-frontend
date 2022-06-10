import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ShopScreen from "./screens/ShopScreen";
import ContactScreen from "./screens/ContactScreen";
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
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
