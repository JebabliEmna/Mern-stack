
import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [cpassError, setCpassError] = useState("");
    const validationFN = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length< 2) {
            setNameError("First Name must be at least 2 characters");
        }
        else {
            setNameError("");
        }
    }
    const validationLN = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length< 2) {
            setLastnameError("Last Name must be at least 2 characters");
        }
        else {
            setLastnameError("");
        }
    }
    const validationEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length< 2) {
            setEmailError("Email must be at least 2 characters");
        }
        else {
            setEmailError("");
        }
    }
    const validationPass = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length< 8) {
            setPassError("Password must be at least 8characters");
        }
        else {
            setPassError("");
        }

    }
    const validationCpass = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value!==password) {
            setCpassError("Passwords much match");
        }
        else {
            setCpassError("");
        }
    }
    return(
        <form>
            <div >
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ validationFN } />
                {
                    nameError ?
                    <p>{ nameError}</p> :
                    ''
                }
            </div>
            <div  >
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ validationLN} />
                {
                    lastnameError ?
                    <p>{ lastnameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email : </label> 
                <input type="text" value={email} onChange={ validationEmail} />
                {
                    emailError?
                    <p>{ emailError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ validationPass} />
                {
                    passError?
                    <p>{passError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmpassword} onChange={ validationCpass}/>
                {
                    cpassError?
                    <p>{cpassError}</p> :
                    ''
                }
            </div>
            
        </form>
    );
};  
export default Form;   
