import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarCom from "../components/Navbar/Navbar";
import Login from "../views/Login/Login";

const Router = () => (
  <BrowserRouter>
      <NavbarCom />
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/cart" element={<Cart />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Router;