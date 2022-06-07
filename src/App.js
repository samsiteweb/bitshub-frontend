import Header from "./components/Header";
import Banner from "./pages/Banner";
import moneyBack from "./images/money-back.png";
import transit from "./images/transit.png";
import support from "./images/support.png";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 justify-center flex items-center gap-5">
            <img src={transit} alt="" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Free shipping</h4>
              <p className="text-gray-500 text-sm">order over N200,000</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 justify-center flex items-center gap-5">
            <img src={moneyBack} alt="" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Returns</h4>
              <p className="text-gray-500 text-sm">15 days money return</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 justify-center flex items-center gap-5">
            <img src={support} alt="" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
