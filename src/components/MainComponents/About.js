import pilibon from '../../assets/Pilibon2.gif';

export default function About() {
  return (
    <section id="about" className="about">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
            Hi! I'm Michael, a passionate front-end developer. 
            I enjoy anime, gaming, and exploring new technologies.
            I like to put things I like into my designs, 
            and I hope to create engaging and visually appealing 
            web experiences.
        </p>
        <img 
            src={pilibon} 
            alt="cute 8-bit character" 
            className="about-image" />
    </section>
  );
}