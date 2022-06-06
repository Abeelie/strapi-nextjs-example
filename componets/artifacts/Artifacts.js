import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./artifacts.module.css";
import ReactImageMagnify from 'react-image-magnify';

const Artifacts = ({ data }) => {
    const dataSet = [];

    data.artifacts.data.forEach((item) => {
        dataSet.push({
            name: item.attributes.ArtifactName,
            description: item.attributes.ArtifactDescription,
            image: item.attributes.ArtifactImage.data.attributes.url
        });

    });
    
    return (
        <div className={styles["artifacts-section"]}>
            <div className={styles.sectionTitle} align="center">
                <h1>{data.artifactsPage.data.attributes.Title}</h1>
            </div>
            <Container>
            {dataSet.map((artifacts, i) => (
                <Row key={artifacts.name} className={styles.row1} id={styles.rowMargin}>
                     <Col lg={6}>

                     <ReactImageMagnify {...{
                        smallImage: {
                            alt: '',
                            isFluidWidth: true,
                            src: artifacts.image,
                            width: 400,
                            height: 400
                        },
                            largeImage: {
                                src: artifacts.image,
                                width: 1200,
                                height: 1800,
                            },
                            enlargedImagePosition: "over",
                            isHintEnabled: true
                        }} 
                    />

                        {/* <Image className={styles.artifactsImage} thumbnail={true} src={artifacts.image} /> */}
                    </Col>
                    <Col lg={6}>
                        <div className={styles.godsTitle} align="center">
                            <h1>{artifacts.name}</h1>
                        </div>
                        <p className={styles.descriptionText}>{artifacts.description}</p>
                    </Col>
                </Row>
            ))}
            </Container>
        </div>
    )
}



export default Artifacts;