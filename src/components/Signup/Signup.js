import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import InputControl from '../InputControl/InputControl';
import styles from "./Signup.module.css";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from "../../firebase";

function Signup() {
    const [values,setValues] = useState({
        name: "",
        email: "",
        pass: ""
    });

    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("**Please fill all Fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass).then(
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
            <h1 className={styles.heading}>Sign Up</h1>
            <InputControl label="Name" placeholder="Enter your Full Name" 
             onChange={(event) =>
                setValues((prev) => ({...prev, name: event.target.value}))    
            }
            />
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
                <button 
                onClick={handleSubmission}
                disabled ={submitButtonDisabled}
                >
                    Signup</button>
                <p>Already have an account? <span><Link to='/login'>Login</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Signup