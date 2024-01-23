import React from "react";
import "./projects.css";
import Cards from "./Cards.jsx";
import image1 from "./phots/mys.png";

const Projects = () => {
  return (
    <div className="flexproject">
      <div className="containproject">
        <h1 id="hproject">Project</h1>
        <p>
        Designed and implemented an e-commerce platform using React and Node.js, enhancing user experience through responsive design and seamless checkout processes. Successfully integrated third-party APIs for payment processing, resulting in a 20% increase in conversion rates. Employed agile methodologies to collaborate with cross-functional teams and deliver the project ahead of schedule.

        </p>
        <div className="boxcontainerp">
          <div className="boxp">
          < Cards image={image1} name="Image Search App" view="https://superlative-nasturtium-62d5ad.netlify.app" github="https://github.com/skranveer098/Image-Search-App.git" techStack="HTML CSS JS"/>
       < Cards image="https://i.pinimg.com/1200x/9e/a7/b5/9ea7b548bb35114bdd527eefbe40166e.jpg" name="Image Search App" view="https://superlative-nasturtium-62d5ad.netlify.app" github="https://github.com/skranveer098/Image-Search-App.git" techStack="HTML CSS JS"/>
       < Cards image="https://i.pinimg.com/1200x/9e/a7/b5/9ea7b548bb35114bdd527eefbe40166e.jpg" name="Image Search App" view="https://superlative-nasturtium-62d5ad.netlify.app" github="https://github.com/skranveer098/Image-Search-App.git" techStack="HTML CSS JS"/>
       < Cards image="https://i.pinimg.com/1200x/9e/a7/b5/9ea7b548bb35114bdd527eefbe40166e.jpg" name="Image Search App" view="https://superlative-nasturtium-62d5ad.netlify.app" github="https://github.com/skranveer098/Image-Search-App.git" techStack="HTML CSS JS"/>
       < Cards image="https://i.pinimg.com/1200x/9e/a7/b5/9ea7b548bb35114bdd527eefbe40166e.jpg" name="Image Search App" view="https://superlative-nasturtium-62d5ad.netlify.app" github="https://github.com/skranveer098/Image-Search-App.git" techStack="HTML CSS JS"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
