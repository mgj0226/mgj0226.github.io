import LittleLemonIcon from "../../assets/LittleLemon.png";

export default function Projects() {
  return (
    <div className="projects">
      <section id="projects" className="projects-title">
        <h2>Projects</h2>
        <p>Here are some of my projects:</p>
      </section>
      <section className="project-list">
        <a href="/LittleLemon" className="project-item">
          <img 
          src={LittleLemonIcon} 
          alt="Little Lemon logo" 
          className="project-image" />
          <h2>Little Lemon</h2>
        </a>
      </section>
    </div>
  );
}