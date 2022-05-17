import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import InputControl from '../InputControl/InputControl';
import styles from "./Login.module.css";
import {signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from "../../firebase";

function Login() {
    const [values,setValues] = useState({
        name: "",
        email: "",
        pass: ""
    });

    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission=()=>{
        if(!values.email || !values.pass){
            setErrorMsg("**Please fill all Fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass).then(
            async (res)=> {
                setSubmitButtonDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate('/resume')
            })
            .catch((err)=>{
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message);
            console.log(err)
            });
    }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
            <InputControl label="Email" placeholder="Enter your Email"
             onChange={(event) =>
                setValues((prev) => ({...prev, email: event.target.value}))    
            }
            />
            <InputControl label="Password" placeholder="Enter the Password" 
             onChange={(event) =>
                setValues((prev) => ({...prev, pass: event.target.value}))    
            }
            />
            <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
                <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
                <p>Don't have an Account? <span><Link to='/signup'>Signup</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Login