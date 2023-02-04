function Header() {
  return (
    <nav className="header">
        <input type="checkbox" id="nav-toggle" className="hidden" />
        <div className="header__logo">Pokemon</div>
        <div className="header__link">
            <li className="header__item"><a href="/home">Trang chủ</a></li>
            <li className="header__item"><a href="/home">Bộ sưu tập</a></li>
            <li className="header__item"><a href="/home">Trò chơi</a></li>
            <li className="header__item"><a href="/home">Đố vui</a></li>
            <li className="header__item"><a href="/home">Tin tức</a></li>
            <li className="header__item"><a href="/home">Liên kết</a></li>
            <li className="header__item"><a href="/home">Liên hệ</a></li>
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