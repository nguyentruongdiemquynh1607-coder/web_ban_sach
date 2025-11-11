import "./styles.css";
//@ts-ignore
import Home from "./Home";
//@ts-ignore
import Layout from "./Layout";
//@ts-ignore
import Trang1 from "./Trang1";
// @ts-ignore
import Member from "./Member";
// @ts-ignore
import ListProduct from "./ListProduct.js";
// @ts-ignore
import ListProducts_SP from "./ListProducts_SP.js";

//@ts-ignore
import Chitietsanpham from "./Chitietsanpham";

//@ts-ignore
import ProductDetail from "./ProductDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//@ts-ignore
import LoginPage from "./LoginPage";
//@ts-ignore
import LogoutPage from "./LogoutPage";
//@ts-ignore
import ProtectedRoute from "./ProtectedRoute";
//@ts-ignore
import ListProducts_SP_Admin from "./ListProducts_SP_Admin";
//@ts-ignore
import EditProduct from "./EditProduct";

export default function App() {
  // return <Home />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListProducts_SP />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="member" element={<Member />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
          <Route path="/admin/edit/:id" element={<EditProduct />} />
          {/* ✅ Trang đăng nhập (nằm trong Layout) */}
          <Route path="login" element={<LoginPage />} />
          {/* ✅ Trang đăng xuất */}
          <Route path="logout" element={<LogoutPage />} />

          {/* ✅ Trang quản trị (nằm trong Layout, chỉ Admin truy cập) */}
          <Route
            path="admin/products"
            element={
              <ProtectedRoute>
                <ListProducts_SP_Admin />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
