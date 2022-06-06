import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className="footer py-3" id={styles.footer}>
            <div className="container">
                <p className="text-center">
                    <a href="#" className={styles.linkText}>Back to top</a>
                </p>
                <p className="text-center" id={styles.footerTitle}>
                    Ancient Egypt &copy; 2022
                </p>
            </div>
        </footer>
    )
}


export default Footer;