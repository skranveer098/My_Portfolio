import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";


import './skills.css';

const Skills = () => {
  return (
    <div className="flexskills" style={{backgroundColor:"rgb(34, 28, 28)"}}>
      <div className="containskills" style={{ color: "white", backgroundColor: "#221c1c" }}>
        <h1 id="hskills" style={{ color: "white" }}>Skills</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, facere blanditiis reprehenderit nostrum nam nobis ratione? Veritatis assumenda vero asperiores, amet soluta eius ipsa aspernatur culpa possimus facilis expedita aut.</p>
        <div className='boxcontainer'>
          <div className='box'>
            <FaHtml5 size='50%'/>
            HTML5
          </div>
          <div className='box'>
            <FaCss3Alt size='50%'/>
            CSS3
          </div>
          <div className='box'>
            <FaJs size='50%'/>
            JAVASCRIPT
          </div>
          <div className='box'>
            <IoLogoReact size='50%'/>
            REACT JS
          </div>
          <div className='box'>
            <FaGithub size='50%'/>
            GIT HUB
          </div>
          <div className='box'>
            <img src="https://cdn.icon-icons.com/icons2/3397/PNG/512/plus_c_icon_214370.png" alt="c++" id="cpp" style={{objectFit:"contain", borderRadius:"10px"}}/>
            C++
          </div>
          <div className='box'>
            <FaBootstrap size='50%'/>
            BOOTSTRAP
          </div>
          <div className='box'>
            <img src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1664-edw9bz9l.png" alt="c++" id="cpp" style={{objectFit:"contain", borderRadius:"10px"}}/>
            MATERIAL UI
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
