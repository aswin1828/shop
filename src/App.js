import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shophome from "./pages/shop/Shophome";
import Shopcategory from "./pages/shopcategory/Shopcategory";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Loginsignup from "./pages/loginsignup/Loginsignup";
import Footer from "./components/footer/Footer";
import mens_banner from "./components/assests/banner_mens.png";
import womens_banner from "./components/assests/banner_women.png";
import kids_banner from "./components/assests/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shophome />} />
          <Route
            path="/mens"
            element={<Shopcategory banner={mens_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<Shopcategory banner={womens_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Shopcategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginsignup" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
