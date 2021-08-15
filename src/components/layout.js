import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  outerBorder,
  decor,
  innerBorder,
} from "../templates/layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className={container}>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
        <div className={`${outerBorder} ${decor}`}></div>
        <div className={`${innerBorder} ${decor}`}></div>
      </div>
    </div>
  );
};

export default Layout;
