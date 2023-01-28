import React, { useState } from "react";
import axios from 'axios';
const Textinput = (props) => {
    const [value,setvalue]=useState('')
    const [res,setRes]=useState('')
    const handleChange = (event) => {
        setvalue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data ={'input_text':value}
        axios.post('http://127.0.0.1:5000/',data)
        .then(function (response) {
            console.log(response.data)
            const re = response.data
            setRes(re.isvalid_English_text)
          });
        console.log(value)
    }
    return (<div>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <div class="w3-container">
            <div class="w3-card-4">
                <div class="w3-container w3-#e66465">
                    <h2>Enter your text</h2>
                </div>
            <form class="w3-container">
            <p/>
                <input value={value} className="w3-input" type="text" onChange={handleChange}/>
                <p/>
            <input className="w3-btn w3-ripple w3-blue" type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
            </div>
        </div>
    
    {res ? <p>Valid English Text</p> : <p>Not Valid English Text</p>}
    </div>
    );
    }
export default Textinput;