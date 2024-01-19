import React from 'react'
import LeftScroll from './LeftScroll.jsx';

import './AboutMe.css';

const AboutMe= () => {
  return (
    <div className="flexabout">
      <LeftScroll></LeftScroll>
      <div className="contain" >
        <h1 id="habout">About Me</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, facere blanditiis reprehenderit nostrum nam nobis ratione? Veritatis assumenda vero asperiores, amet soluta eius ipsa aspernatur culpa possimus facilis expedita aut.</p>

      </div>
    </div>
  )
}

export default AboutMe
