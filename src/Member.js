const Member = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Nguyễn Trương Diễm Quỳnh",
      lop: "24140354",
      email: "quun.com",
      anh: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/465858055_1068801845053636_2588775470283495979_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_ohc=yYCf0HJBmuoQ7kNvwGSlVe9&_nc_oc=AdkKazB3Oleu6dUqyfDrFLvDMpX1pZCNii08N6zrTvKdbfyurqokCT2N2iqGPxzpRO4&_nc_zt=24&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=lWxgpzauoMyQ1Xt7eG9Gmg&oh=00_AfgHTzD9O0uOGuszs-e2E4rIKI1Y5e7vVXiOhyj4Y12IUg&oe=6918411F",
    },
    {
      id: 2,
      hoten: "Diệp Yến Khoa",
      lop: "24150009",
      email: "khoa.com",
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbYiLT4quOyCRnpvukQueu4u810lP4QiPQg&s",
    },
    {
      id: 3,
      hoten: "Trần Thái Hòa",
      lop: "24140585",
      email: "hoa.com",
      anh: "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      hoten: "Phan Nguyễn Nhân Tâm",
      lop: "24150102",
      email: "tam.com",
      anh: "https://www.anhnghethuatdulich.com/wp-content/uploads/2025/09/chiikawa-anh-cuoi.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0d0d0d", // nền đen sâu
        padding: "40px",
        fontFamily: "Inter, sans-serif",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {dssv.map((sv) => (
          <div
            key={sv.id}
            style={{
              backgroundColor: "#1c1c1e", // nền thẻ tối hơn
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            }}
          >
            <img
              src={sv.anh}
              alt={sv.hoten}
              style={{
                width: "180%",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3
                style={{
                  margin: "8px 0 4px",
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                {sv.hoten}
              </h3>
              <p
                style={{
                  margin: "4px 0",
                  color: "#cccccc",
                  fontSize: "14px",
                }}
              >
                {sv.lop}
              </p>
              <p
                style={{
                  margin: "0",
                  fontSize: "13px",
                  color: "#888888",
                }}
              >
                {sv.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
