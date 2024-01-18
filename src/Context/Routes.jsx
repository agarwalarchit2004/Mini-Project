import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SingleProduct from "../components/SingleProduct";
import Products from "../pages/Products";
import {Profile} from "../pages/Profile";
import {Cart} from "../pages/Cart";
import PageNotFound from "../pages/PageNotFound";
import  {PrivateR} from "./PrivateR"; 


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
     
      <Route
        path="/products/:id"
        element={
         
            <PrivateR>
              <SingleProduct />
            </PrivateR>
         
        }
      />
      <Route path="/profile" element={<PrivateR><Profile/></PrivateR>} />
      
      <Route
        path="/cart"
        element={
         
            <PrivateR>
              <Cart />
            </PrivateR>
         
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
