import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (

    // <h1>Footer</h1>
    <footer>
      <div className="container">
        <div className="row pb-5 row-gap-4 gap-lg-0">
          <div className="col-md-6 col-lg-4">
            <Link href="/" className="navbar-brand">
              <Image
                src="/images/logo.png"
                width={140}
                height={90}
                alt="Mind Monkey"
                className="footer_logo"
                priority={true}
              />
            </Link>
            <ul className="mt-5">
              <li>
                <Link href="/">
                  <span>
                    <Image
                      src="/images/email.png"
                      width={20}
                      height={18}
                      alt="Mind Monkey"
                      priority={true}
                    />
                  </span>
                  help@mindmon.com
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>
                    <Image
                      src="/images/phone.png"
                      width={19}
                      height={19}
                      alt="Mind Monkey"
                      priority={true}
                    />
                  </span>
                  +1 234 456 678
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2">
            <h2>links</h2>
            <ul>
              <li><Link href="/">home</Link></li>
              <li><Link href="/">about us</Link></li>
              <li><Link href="/">bookings</Link></li>
              <li><Link href="/">blog</Link></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2">
            <h2>legal</h2>
            <ul>
              <li><Link href="/">terms of use</Link></li>
              <li><Link href="/">privacy policy</Link></li>
              <li><Link href="/">cookie policy</Link></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <h2>Newsletter</h2>
            <ul>
              <li><Link href="/">Stay up to date</Link></li>
              <form className="footer_form mt-3">
                <input type="email" placeholder="Your Email" name="email" id="email" />
                <button className="btn btn-theme4">Sumbit</button>
              </form>
            </ul>
          </div>
        </div>
        <div className="footer_border"></div>
        <div className="row text-center py-3">
          <div className="col-12">
            <p>Copyright 2025 Mind Monkey all rights reserved</p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
