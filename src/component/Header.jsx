import Image from "next/image";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState('');

  const toggle = () => {
    setToggleBtn((e) => (e === '' ? 'active' : ''));
  };

  const handleNavClick = () => {
    setToggleBtn(''); // Close the navbar-collapse when a link is clicked
  };

  return (
    <div className="container px-0 position-relative">
      <Image src="/images/Star_theme.png" className="Star_theme9" width={36} height={36} alt="hr1" />

      <div className="d-lg-flex align-items-lg-center py-lg-4">
        <nav className="navbar navbar-expand-lg py-3 px-0 p-lg-0">
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
              aria-expanded={toggleBtn === 'active'}
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
        <div
          className={`collapse navbar-collapse ${toggleBtn === 'active' ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0 gap-lg-4 align-items-lg-center">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={handleNavClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={handleNavClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className="nav-link" onClick={handleNavClick}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/features" className="nav-link" onClick={handleNavClick}>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-theme2 px-4" onClick={handleNavClick}>
                Download
              </button>
            </li>
            <li className="nav-item">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
