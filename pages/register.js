import React, {useState} from "react";
import styles from "../styles/register.module.css";
import Router from "next/router";
import axios from "axios";
import swal from 'sweetalert';
import Head from "next/head";

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registering, setRegistering] = useState(false);

    const handleRegisteration = async (e) => {
        e.preventDefault();
        setRegistering(true);

        try {
            const register = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/local/register`, {
                    username: username, 
                    email: email,
                    password: password
            });

            if(register.status === 200){
                Router.push('/login');
            }

        }catch(error){
            swal({
                title: "Username or Email already exist",
                icon: "error",
            });
            
            setRegistering(false);
            setEmail("");
            setUsername("");
            setPassword("");
        }
    }

    return (
        <>
        <Head>
            <title>Register</title>
        </Head>
        <div className="container" id={styles.registerContainer}>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-5">Registeration</h5>
                            <form onSubmit={handleRegisteration}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" required placeholder="Bob@gmail.com" onChange={e => setEmail(e.target.value) } value={email}/>
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput1" required placeholder="Username" onChange={e => setUsername(e.target.value) } value={username}/>
                                    <label htmlFor="floatingInput">UserName</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" required placeholder="Password" onChange={e => setPassword(e.target.value) } value={password} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                        {registering ? "Registering......." : "Register"}
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



export default Register;