import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import WishList from "./WishList";
import ErrorPage from "./ErrorPage";
import UserProfile from "./UserProfile";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {

  const theme = {

    colors: {

      bg: "#fafaf6",

      footer_bg: "#e0c358",

      btn: "rgb( 60 600)",

      border: "rgba(98, 84, 243, 0.5)",

      hr: "#ffffff",

      gradient:

        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",

      shadow:

        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",

      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px"

    },

    media: {

      mobile: "768px",

      tab: "998px"

    }

  }

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
