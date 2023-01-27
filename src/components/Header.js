function Header() {
  return (
    <nav className="header">
        <input type="checkbox" id="nav-toggle" className="hidden" />
        <div className="header__logo">POKEMON</div>
        <div className="header__link">
            <li className="header__item"><a href="/home">TRANG CHỦ</a></li>
            <li className="header__item"><a href="/home">BỘ SƯU TẬP</a></li>
            <li className="header__item"><a href="/home">TRÒ CHƠI</a></li>
            <li className="header__item"><a href="/home">ĐỐ VUI</a></li>
            <li className="header__item"><a href="/home">TIN TỨC</a></li>
            <li className="header__item"><a href="/home">LIÊN KẾT</a></li>
            <li className="header__item"><a href="/home">LIÊN HỆ</a></li>
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