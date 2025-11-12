import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

const ListProducts_SP = () => {
  const [listProduct, setListProduct] = useState([]);
  const navigate = useNavigate();

  // 📦 Lấy danh sách sản phẩm từ Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("product1")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;
        setListProduct(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err.message);
      }
    };

    fetchProducts();
  }, []);

  // 🗑 Xóa sản phẩm
  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      try {
        const { error } = await supabase.from("product1").delete().eq("id", id);
        if (error) throw error;
        alert("Đã xóa sản phẩm!");
        // cập nhật lại danh sách sau khi xóa
        setListProduct(listProduct.filter((item) => item.id !== id));
      } catch (err) {
        console.error("Lỗi khi xóa sản phẩm:", err.message);
      }
    }
  };

  // 🎨 Giao diện hiển thị danh sách
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {listProduct.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                height: "180px",
                width: "100%",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/sanpham/${p.id}`)}
            />
            <h4 style={{ margin: "10px 0 5px" }}>{p.title}</h4>
            <p style={{ color: "#e63946", fontWeight: "bold" }}>
              ${p.price}
            </p>

            {/* 🗑 Nút Xóa sản phẩm */}
            <button
              onClick={() => handleDelete(p.id)}
              style={{
                marginTop: "8px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              🗑 Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts_SP;
