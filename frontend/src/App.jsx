import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import clothingbanner from "./assets/clothingBanner.png";
import electronicsbanner from "./assets/electronicsBanner.png";
import cosmeticsbanner from "./assets/cosmeticsBanner.png";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/clothing"
            element={<Category category={"clothing"} banner={clothingbanner} />}
          />
          <Route
            path="/cosmetics"
            element={
              <Category category={"cosmetics"} banner={cosmeticsbanner} />
            }
          />
          <Route
            path="/electronics"
            element={
              <Category category={"electronics"} banner={electronicsbanner} />
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
