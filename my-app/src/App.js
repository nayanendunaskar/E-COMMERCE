import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import WishList from "./WishList";
import ErrorPage from "./ErrorPage";
import UserProfile from "./UserProfile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
