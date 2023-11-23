import Logo from "../../assets/icon/brandLogo.png"

export const Navbar = () => {
    const menus = [
        { href: '#', label: 'Beranda' },
        { href: '#', label: 'Tentang Kami' },
        { href: '#', label: 'Layanan' },
        { href: '#', label: 'FAQ' },
    ]

    return (
        <header >
            <nav className="navbar navbar-expand-lg fixed-top py-3 mx-4 bg-light">
                <div className="container-xxl px-0">
                    <img src={Logo} alt="Healthify" className="brand-logo" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mt-3" id="navbarNav">
                        <ul className="navbar-nav">
                            {menus.map((menu, index) => (
                                <li key={index} className="nav-item mx-3">
                                    <a
                                        className="text-decoration-none fw-medium"
                                        href={menu.href}
                                    >
                                        {menu.label}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}