import React from "react";
import "./projects.css";
import Cards from "./Cards.jsx";
const Projects = () => {
  return (
    <div className="flexproject">
      <div className="containproject">
        <h1 id="hproject">Project</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
          facere blanditiis reprehenderit nostrum nam nobis ratione? Veritatis
          assumenda vero asperiores, amet soluta eius ipsa aspernatur culpa
          possimus facilis expedita aut.
        </p>
        <div className="boxcontainerp">
          <div className="boxp">
       < Cards image="https://i.pinimg.com/1200x/9e/a7/b5/9ea7b548bb35114bdd527eefbe40166e.jpg" name="Image Search App" view="https://superlative-nasturtium-62d5ad.netlify.app" github="https://github.com/skranveer098/Image-Search-App.git" techStack="HTML CSS JS"/>
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
