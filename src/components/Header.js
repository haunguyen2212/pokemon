import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
        <input type="checkbox" id="nav-toggle" className="hidden" />
        <div className="header__logo">Pokemon</div>
        <div className="header__link">
            <li className="header__item"><Link to="/pokemon">Trang chủ</Link></li>
            <li className="header__item"><Link to="/collection">Bộ sưu tập</Link></li>
            <li className="header__item"><Link to="/game">Trò chơi</Link></li>
            <li className="header__item"><Link to="/quiz">Đố vui</Link></li>
            <li className="header__item"><Link to="/posts">Bài viết</Link></li>
            <li className="header__item"><Link to="/link">Liên kết</Link></li>
            <li className="header__item"><Link to="/contact">Liên hệ</Link></li>
        </div>
        <label htmlFor="nav-toggle" className="header__icon-menu">
            <div className="header__icon-line"></div>
            <div className="header__icon-line"></div>
            <div className="header__icon-line"></div>
        </label>
    </nav>
  );
}

export default Header;