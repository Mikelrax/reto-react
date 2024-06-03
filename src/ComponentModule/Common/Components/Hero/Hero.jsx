import config from "../../../../../public/store-config.json";

import styles from "./Hero.module.css";
const Hero = () => {
    const { Announcement } = config;
    return (
        <div className={styles["hero"]}>
            <img className={styles["hero-icon"]} src={Announcement[0].image} alt={Announcement[0].alt} />
        </div>
    );
};

export default Hero;