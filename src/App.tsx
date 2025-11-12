import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Các component chính
//@ts-ignore
import Layout from "./Layout";
//@ts-ignore
import Trang1 from "./Trang1";
//@ts-ignore
import Member from "./Member";
//@ts-ignore
import ListProducts_SP from "./ListProducts_SP";
//@ts-ignore
import ProductDetail from "./ProductDetail";
//@ts-ignore
import AddProduct from "./AddProduct";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Trang mặc định */}
          <Route index element={<ListProducts_SP />} />

          {/* Các trang khác */}
          <Route path="trang1" element={<Trang1 />} />
          <Route path="member" element={<Member />} />

          {/* Chi tiết sản phẩm */}
          <Route path="sanpham/:id" element={<ProductDetail />} />

          {/* Form thêm sản phẩm */}
          <Route path="addproduct" element={<AddProduct />} />

          {/* Trang chỉnh sửa sản phẩm */}
          <Route path="admin/edit/:id" element={<EditProduct />} />

          {/* Trang đăng nhập / đăng xuất */}
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />

          {/* Trang quản trị (chỉ admin vào được) */}
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
