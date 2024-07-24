import { Link } from "react-router-dom";
import scrollToTop from "./ScrollToTop";
import NavbarLogo from "./navbar/NavbarLogo";

import fb from "../assets/footer/fb.svg";
import ig from "../assets/footer/ig.svg";
import lin from "../assets/footer/in.svg";

import location from "../assets/footer/location.svg";
import email from "../assets/footer/email.svg";
import phone from "../assets/footer/phone.svg";

const FooterContainer = () => {
  return (
    <footer className="bg-kbd-primary text-kbd-accent md:text-xl">
      <section>
        <div className="flex flex-col md:flex-row justify-between py-16 max-w-[1170px] mx-auto px-5 md:px-0">
          <section className="mx-auto md:mx-0">
            <h3
              onClick={scrollToTop}
              className="flex gap-2.5 items-center text-2xl md:text-3xl text-secondary font-semibold cursor-pointer"
            >
              <NavbarLogo />
            </h3>
            <ul className="my-6">
              <li onClick={scrollToTop}>
                <span className="flex items-start gap-2.5">
                  <img className="pt-2" src={location} alt="Location icon" />
                  Mirpur, Dhaka - 1216,
                  <br />
                  Dhaka, Bangladesh.
                </span>
              </li>
              <li>
                <Link
                  to="mailto:mdmmalamin@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2.5"
                >
                  <img className="pt-2" src={email} alt="Email icon" />
                  mdmmalamin@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <Link
                  to="https://wa.me/8801735531005"
                  target="_blank"
                  className="flex items-center gap-2.5"
                >
                  <img className="pt-2" src={phone} alt="Phone icon" />
                  +880 17355-31005,
                </Link>
              </li>
            </ul>
          </section>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-40">
            <section className="max-w-60">
              <h3 className="text-3xl text-secondary font-semibold mb-6">
                Quick Links
              </h3>
              <ul>
                <li onClick={scrollToTop}>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/contact-us">Get a Quote</Link>
                </li>
              </ul>
            </section>

            <section className="">
              <h3 className="text-3xl text-secondary font-semibold mb-6">
                Support
              </h3>
              <ul>
                <li onClick={scrollToTop}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/">Terms of Use</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Medium Device Hidden */}
        <section className="md:hidden mb-5">
          <div className="flex gap-3 items-center justify-center">
            <Link to="https://www.facebook.com/mdmmalamin/" target="_blank">
              <img src={fb} alt="Facebook icon" />
            </Link>
            <Link to="https://www.instagram.com/mdmmalamin" target="_blank">
              <img src={ig} alt="Instagram icon" />
            </Link>

            <Link to="https://www.linkedin.com/in/mdmmalamin/" target="_blank">
              <img src={lin} alt="LinkedIn icon" />
            </Link>
          </div>
        </section>

        {/* ***** Border Natural ***** */}
        <div className="border border-neutral/20"></div>

        <div>
          <section className="max-w-[1170px] mx-auto px-5 md:px-0 flex flex-col-reverse sm:flex-row gap-5 justify-between items-center py-2.5">
            <p>&#169; 2024 , All rights reserved.</p>
            <div className="md:flex gap-3 items-center hidden">
              <Link
                className="hover:translate-y-1 duration-500"
                to="https://www.facebook.com/mdmmalamin/"
                target="_blank"
              >
                <img src={fb} alt="Facebook icon" />
              </Link>
              <Link
                className="hover:translate-y-1 duration-500"
                to="https://www.instagram.com/mdmmalamin/"
                target="_blank"
              >
                <img src={ig} alt="Instagram icon" />
              </Link>

              <Link
                className="hover:translate-y-1 duration-500"
                to="https://www.linkedin.com/in/mdmmalamin/"
                target="_blank"
              >
                <img src={lin} alt="LinkedIn icon" />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </footer>
  );
};

export default FooterContainer;
