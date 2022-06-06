import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./about.module.css";
import ReactImageMagnify from 'react-image-magnify';

const About = ({ data }) => {
    return (
        <div className={styles["about-section"]}>
            <Container>
                <Row className={styles.row1}>
                    <Col lg={6}>
                        <div className={styles.titleAbout} align="center"><h1>{data.home.data.attributes.Period1}</h1></div>
                        <p className={styles.aboutText}>{data.home.data.attributes.Description1}</p>
                    </Col>
                    <Col lg={6}>

                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: '',
                            isFluidWidth: true,
                            src: data.home.data.attributes.DescriptionImage1.data.attributes.url,
                            width: 400,
                            height: 400
                        },
                            largeImage: {
                                src: data.home.data.attributes.DescriptionImage1.data.attributes.url,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImagePosition: "over",
                            isHintEnabled: true
                        }} 
                    />


                        {/* <Image thumbnail={true} src={data.home.data.attributes.DescriptionImage1.data.attributes.url} /> */}
                    </Col>
                </Row>
                <Row className={styles.row2} id={styles.rowMargin} >
                    <Col lg={6}>

                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: '',
                            isFluidWidth: true,
                            src: data.home.data.attributes.DescriptionImage2.data.attributes.url,
                            width: 400,
                            height: 400
                        },
                            largeImage: {
                                src: data.home.data.attributes.DescriptionImage2.data.attributes.url,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImagePosition: "over",
                            isHintEnabled: true
                        }} 
                    />


                        {/* <Image thumbnail={true} src={data.home.data.attributes.DescriptionImage2.data.attributes.url} /> */}
                    </Col>
                    <Col lg={6}>
                        <div className={styles.titleAbout} align="center"><h1>{data.home.data.attributes.Period2}</h1></div>
                        <p className={styles.aboutText}>{data.home.data.attributes.Description2}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About