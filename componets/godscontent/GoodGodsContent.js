import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import styles from "./godscontent.module.css";


const GoodGodsContent = ({ data }) => {
    const dataSet = [];

    data.goodGodDescriptions.data.forEach((item) => {
        const imgs = [];

        item.attributes.Image.data.forEach(img => {
            imgs.push({image: img.attributes.url});
        });

        dataSet.push({
            name: item.attributes.Name,
            description: item.attributes.Description,
            image: imgs
        });

    });

    
    return (
        <div className={styles["gods-section"]}>
            <div className={styles.sectionTitle} align="center">
                <h1>{data.goodGodsPage.data.attributes.Title}</h1>
            </div>
            <Container>
            {dataSet.map((god, i) => (
                <Row key={god.name} className={styles.row1} id={styles.rowMargin}>
                     <Col lg={6}>
                        <Carousel fade variant="dark">
                        {god.image.map((godImage, i) => (
                        <Carousel.Item key={i} interval={10000}>
                            <img
                                className="d-block w-100"
                                src={godImage.image}
                                alt={god.name}
                                id={styles.imageCarousel}
                            />
                        </Carousel.Item>
                        ))}
                        </Carousel>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.godsTitle} align="center">
                            <h1>{god.name}</h1>
                        </div>
                        <p className={styles.descriptionText}>{god.description}</p>
                    </Col>
                </Row>
            ))}
            </Container>
        </div>
    )
}


export default GoodGodsContent;










