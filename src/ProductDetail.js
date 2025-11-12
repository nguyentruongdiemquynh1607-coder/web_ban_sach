import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("product1")
          .select("*")
          .eq("id", id)
          .single();
        if (error) throw error;
        setProduct(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", err.message);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p style={{ textAlign: "center" }}>Đang tải...</p>;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Quay lại
      </button>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <div
          style={{
            flex: "1 1 300px",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>

        <div style={{ flex: "1 1 300px" }}>
          <h2>{product.title}</h2>
          <p style={{ color: "#e63946", fontSize: "1.2rem", fontWeight: "bold" }}>
            ${product.price}
          </p>
          <p>
            ⭐ {product.rating_rate} ({product.rating_count} đánh giá)
          </p>
          <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
            {product.description}
          </p>
          <button
            onClick={() => alert("🛒 Đã thêm vào giỏ hàng!")}
            style={{
              marginTop: "20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            🛒 Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
