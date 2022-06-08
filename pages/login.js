import React, {useState} from "react";
import styles from "../styles/login.module.css";
import Router from "next/router";
import axios from "axios";
import swal from 'sweetalert';
import { setCookie } from "nookies";
import Head from "next/head";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();
        setLoggingIn(true);

        try {
            const login = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/local`, {
                identifier: username, 
                password: password
            });

            if(login.status === 200){

                setCookie(null, 'jwt', login.data.jwt , {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                });

                setTimeout(() => Router.push('/artifacts'), 2000);
            }

        }catch(error){
            swal({
                title: "Incorrect username or password",
                icon: "error",
            });
            
            setLoggingIn(false);
            setUsername("");
            setPassword("");
        }
    }

    return (
        <>
        <Head>
            <title>Login</title>
        </Head>
        <div className="container" id={styles.loginContainer}>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-5">Login</h5>
                            <form onSubmit={handleLogin}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" required placeholder="Username" onChange={e => setUsername(e.target.value) } value={username}/>
                                    <label htmlFor="floatingInput">UserName</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" required placeholder="Password" onChange={e => setPassword(e.target.value) } value={password} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                        {loggingIn ? "Logging....." : "Login"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}





export default Login;