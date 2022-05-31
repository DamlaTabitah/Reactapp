import './ak.css'
import React from 'react'

const Ak = () => {
  return (
    <div className='bg-blue '>
        <div className="content">
            <h4>Hello My Name Is</h4>
            <h1>DAMLA <span>TABITHA</span></h1>
            <h3>I Am A Web Developer</h3>
            <div className="p2">
                <label>Email</label>
                  <input type="email" name="email" id="mail" placeholder="Enter your Email"/><br/>
                <label>Submit</label>
                  <input type="submit" name="Submit" value="Lets Start"/>
            </div>
        </div>
    </div>
  );
}

export default Ak