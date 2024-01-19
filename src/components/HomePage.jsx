import React from "react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";
import './HomeStyles.css';

const HomePage = () => {
  return (
    <div>
      <div className='parent'>
       <LeftHome />
        <RightHome></RightHome>
      </div>
    </div>
  );
};

export default HomePage;
