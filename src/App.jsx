import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AppLayout from "./ui/AppLayout";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import Login from "./pages/Log/Login";
import UserSingel from "./pages/Users/UserSingel";
import ProductsSingle from "./pages/Products/ProductsSingle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductsSingle />} />
            <Route path="/users/" element={<Users />} />
            <Route path="users/:id" element={<UserSingel />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
