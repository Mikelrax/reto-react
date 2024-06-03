import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";
import Logo from "./Logo.jsx";
import config from "../../../../../public/store-config.json";
import SocialLink from "./SocialLink.jsx";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const { logo, navLinks, socialLinks } = config;

  const useOnChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const checkPathName = search === ""
      ? window.location.pathname
      : `?search=${search}`;

    window.history.pushState({}, "", checkPathName);
  }, [search]);

  return (
    <>
      <header>
        <div className={styles["header-container"]}>
          <Logo logo={logo} />
          <form className={styles["header-form"]}>
            <input
              className={styles["header-input"]}
              type="text"
              placeholder="Search"
              id="search"
              onChange={useOnChange}
            />
          </form>
          <ul className={styles["header-social"]}>
            {socialLinks.map((socialLink, index) => (
              <SocialLink
                key={index}
                name={socialLink.name}
                link={socialLink.link}
                icon={socialLink.icon}
              />
            ))}
          </ul>
        </div>
        <nav id="navbar" className={styles["nav"]}>
          {navLinks.map((navLink, index) => (
            <NavLinks
              key={index}
              title={navLink.name}
              link={navLink.link} />
          ))}
        </nav>
      </header>
    </>
  );
};

export default NavBar;