import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://6731c05f7aaf2a9aff11dd05.mockapi.io/products", product);
      alert("✅ Đã thêm sản phẩm thành công!");
      navigate("/listproduct");
    } catch (err) {
      console.error("Lỗi khi thêm sản phẩm:", err.message);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto" }}>
      <h2>➕ Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input name="title" placeholder="Tên sản phẩm" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Giá" onChange={handleChange} required />
        <input name="image" placeholder="Link hình ảnh" onChange={handleChange} required />
        <input name="category" placeholder="Loại sản phẩm" onChange={handleChange} />
        <textarea name="description" placeholder="Mô tả" rows="4" onChange={handleChange} />
        <button type="submit" style={{ background: "#28a745", color: "#fff", padding: "10px", border: "none" }}>
          💾 Lưu sản phẩm
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
