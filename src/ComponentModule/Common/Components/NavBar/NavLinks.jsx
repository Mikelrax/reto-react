import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";


const NavLinks = ({title, link}) => {
  return (
    <li className={styles["nav-li"]}>
      <Link className={styles["nav-a"] + " " + styles["nav-link"]} to={link}>
        {title}
      </Link>
    </li>
  );
};

export default NavLinks;
