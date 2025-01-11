import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="360" caption="Event" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+233 20 326 6081</h3>
              <br />
              <button className="button-primary purple">
                <a href="/contact">Request a quote</a>
              </button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              {/* <li>
                <Link href='/'>About agency</Link>
              </li> */}
              {/* <li>
                <Link href='/'>Our team</Link>
              </li> */}
              <li>
                <Link href="/showcase">Showcase</Link>
              </li>
              {/* <li>
                <Link href='/blog'>Blog</Link>
              </li> */}
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/services">Talkshow</Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@event360withfafali7s">
                  Interviews
                </Link>
              </li>
              <li>
                <Link href="/advert">Sponshorship</Link>
              </li>
              <li>
                <Link href="/advert">Advertising</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="https://web.facebook.com/profile.php?id=100066589957024">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/_event360withfafali/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/event-360-with-fafali/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2025 EVENT360. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>|Event360withFafali</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
