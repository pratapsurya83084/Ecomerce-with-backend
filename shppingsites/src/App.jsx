import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import Mystate from "./context/data/Mystate";
import Login from "./pages/register/Login";
import Signup from "./pages/register/Signup";
import Productinfo from "./pages/productinfo/Productinfo";
import Addproduct from "./pages/admin/dashboard/page/Addproduct";
import Updateproduct from "./pages/admin/dashboard/page/Updateproduct";
import Allproducts from "./pages/allproduct/Allproduct";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Mystate>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts/>}></Route>
          {/*this order page only show for user i.e only user access for this page  */}
          <Route
            path="/order"
            element={
              <ProtectedRoutesForUser>
                <Order />
              </ProtectedRoutesForUser>
            }
          />
          <Route path="/cart" element={<Cart />} />

          {/*dashboard only show for admin i.e admin access only  */}
          <Route
            path="/dashboard"
            element={
              <ProtecterdRoutesForAdmin>
                <Dashboard />
              </ProtecterdRoutesForAdmin>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* productinfo dynamic using productid  */}
          <Route path="/productinfo/:id" element={<Productinfo />} />

          {/*dashboard only show for admin i.e admin access only  */}
          <Route
            path="/addproduct"
            element={
              <ProtecterdRoutesForAdmin>
                <Addproduct />
              </ProtecterdRoutesForAdmin>
            }
          />
          {/*dashboard only show for admin i.e admin access only  */}
          <Route
            path="/updateproduct"
            element={
              <ProtecterdRoutesForAdmin>
                <Updateproduct />
              </ProtecterdRoutesForAdmin>
            }
          />

          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Mystate>
  );
}
export default App;

//create a protected routes for users
export const ProtectedRoutesForUser = ({ children }) => {
  //children means any components
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />; //user is not login redirect to login page
  }
};

//create protected routes for admin i.e admin loggedd then show admin page ,order page ,etc
const ProtecterdRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin?.user?.email === "pratapsuryawanshi83084@gmail.com") {
    //password=pratap@#$83084
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
