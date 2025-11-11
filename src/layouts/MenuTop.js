import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const MenuTop = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <div class="menu_top">
      <ul>
        <li>
          <a href="/trang1">Trang 1</a>
        </li>
        <li>
          <a target="blank" href="/member">
            Member
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.t1.gg/">
            Community
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.t1.gg/teams">
            About
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.t1.gg/socials-1">
            Socials
          </a>
        </li>
        <li>
          <a target="blank" href="https://t1a.gg/">
            E-learning
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.t1.gg/news">
            News
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://drive.google.com/file/d/1i0dE785sZgkMck2-j_z-kUJT8dYFWZFn/view?usp=sharing"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </li>

        <li>
          {user ? (
            <>
              <span className="username">👤 {user.username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Đăng xuất
              </button>
            </>
          ) : (
            <a href="/login" className="login-link">
              Đăng nhập
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};
export default MenuTop;
