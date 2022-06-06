import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,  Nav, Container } from "react-bootstrap";
import styles from "./navbar.module.css";
import Router from 'next/router';
import { destroyCookie } from "nookies";

const Navbars = () => {
    const [cookie, setCookie] = useState(null);

    useEffect(() => {
        const _doc = document.cookie.split(",");
        _doc.forEach(data => {
            if(data.includes("jwt")){
                setCookie(true);
            }else {
                setCookie(false);
            }
        })
    },);


    const handleLogOut = () => {
        Router.push("/");
        setTimeout(() => destroyCookie(null, "jwt"), 3000);
    }


    const loggedInNav = () => {
        return (
            <Nav className="ms-auto">              
                <Nav.Link className={styles.navLink} href={"/goodgods"}>Good Gods</Nav.Link> 
                <Nav.Link className={styles.navLink} href={"/badgods"}>Bad Gods</Nav.Link> 
                <Nav.Link className={styles.navLink} href={"/artifacts"}>Artifacts</Nav.Link> 
                <Nav.Link className={styles.navLink} onClick={handleLogOut}>Logout</Nav.Link> 
            </Nav>
        )
    }


    const loggedOutNav = () => {
        return (
            <Nav className="ms-auto">
                <Nav.Link className={styles.navLink} href={"/goodgods"}>Good Gods</Nav.Link> 
                <Nav.Link className={styles.navLink} href={"/badgods"}>Bad Gods</Nav.Link> 
                <Nav.Link className={styles.navLink} href={"/artifacts"}>Artifacts</Nav.Link> 
                <Nav.Link className={styles.navLink} href="/login">Login</Nav.Link> 
                <Nav.Link className={styles.navLink} href="/register" >Register</Nav.Link> 
            </Nav>
        )
    }


  
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="/" className={styles["navbar-brand"]}>Ancient Egypt</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles["navbar-toggler"]} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {cookie ? loggedInNav() : loggedOutNav()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}







export default Navbars;