import ImageGallery from "react-image-gallery";
import config from "./../../../../../public/store-config.json"
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";

const RawSlider = () => {
    const { SliderImages } = config;
    class MyGallery extends React.Component {
        render() {
            return <ImageGallery
                autoPlay={true}
                infinite={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                showThumbnails={false}
                items={SliderImages} />;
        }
    }
    return <MyGallery />;
};

export default RawSlider;