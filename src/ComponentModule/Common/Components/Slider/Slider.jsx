import RawSlider from "./RawSlider";
import styles from "./Slider.module.css";
const Slider = () => {
    return (
        <div className={styles["sliderContainer"]}>
            <RawSlider/>
        </div>
    );
};

export default Slider;