import React from "react";
import styles from "./hero.module.css";


const Hero = ({ data }) => {
    return (
        <div className={styles.heroSection}>
            <video autoPlay muted loop id={styles.myVideo}>
                <source src={data.home.data.attributes.HeroVideo.data.attributes.url} type="video/mp4"/>
            </video>
            <div className={styles.heroText}>
                <p className={styles.title}>{data.home.data.attributes.HeroTitle}</p>
                <h6 className={styles.subtitle}></h6>
            </div>
        </div>
    )
}


export default Hero;