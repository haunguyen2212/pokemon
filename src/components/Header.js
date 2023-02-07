import { Link } from "react-router-dom";

function Header() {

  const handleClick = () => {
    document.getElementById('nav-toggle').click();
  }
  
  return (
    <nav className="header">
        <input type="checkbox" id="nav-toggle" className="hidden" />
        <div className="header__logo">Pokemon</div>
        <div className="header__link">
            <li className="header__item"><Link to="/pokemon" onClick={() => handleClick()}>Trang chủ</Link></li>
            <li className="header__item"><Link to="/collection" onClick={() => handleClick()}>Bộ sưu tập</Link></li>
            <li className="header__item"><Link to="/game" onClick={() => handleClick()}>Trò chơi</Link></li>
            <li className="header__item"><Link to="/quiz" onClick={() => handleClick()}>Đố vui</Link></li>
            <li className="header__item"><Link to="/post" onClick={() => handleClick()}>Bài viết</Link></li>
            <li className="header__item"><Link to="/link" onClick={() => handleClick()}>Liên kết</Link></li>
            <li className="header__item"><Link to="/contact" onClick={() => handleClick()}>Liên hệ</Link></li>
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