import Image from "next/image";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState('');

  const toggle = () => {
    setToggleBtn((e) => (e === '' ? 'active' : ''));
  };

  return (
    <div className="container px-0 position-relative">
      <Image src="/images/Star_theme.png" className="Star_theme9" width={36} height={36} alt="hr1" />

      <div className="d-lg-flex align-items-lg-center py-4">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <Image
                src="/images/logo.png"
                width={129}
                height={65}
                alt="The Praetors"
                priority={true}
              />
            </Link>
            <Button
              className={`navbar-toggler ${toggleBtn}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggle}
            >
              <div className="drawer-open">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Button>
          </div>
        </nav>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0 gap-lg-4 align-items-lg-center">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className="nav-link">Pricing</Link>
            </li>
            {/* <li className="nav-item dropdown">
                <Link 
                  href="/mobile-app-development" 
                  className="nav-link dropdown-toggle" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link href="/mobile-app-development" className="dropdown-item">Mobile App Development</Link></li>
                  <li><Link href="/web-development" className="dropdown-item">Web Development</Link></li>
                  <li><Link href="/ui-ux-design" className="dropdown-item">UI/UX Design</Link></li>
                </ul>
              </li> */}
            <li className="nav-item">
              <Link href="/features" className="nav-link">Features</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-theme2 px-4">Download</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;