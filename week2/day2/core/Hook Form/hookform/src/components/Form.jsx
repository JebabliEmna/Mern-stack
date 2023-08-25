import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");
    return(
        <form>
            <div >
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div  >
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email : </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <h3>Your Form Data </h3>
            <p>First Name {firstname} </p>
            <p>Last Name {lastname}</p>
            <p>Email {email}</p>
            <p>Password {password}</p> 
            <p>Confirm Password {confirmpassword}</p> 
            { confirmpassword.length>password.length || confirmpassword!==password ? <p style={{ color: "red" }}>Invalid password</p> : <p style={{ color: "green" }}>Valid password</p>}
        </form>
    );
};
    
export default Form;
