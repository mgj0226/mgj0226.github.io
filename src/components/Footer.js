import Pilibon from '../assets/Pilibon2.gif';
import GitHub from '../assets/GitHub_Invertocat_White.svg';
import LinkedIn from '../assets/InBug-White.png';
import Email from '../assets/email_icon.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Pilibon} alt="Pilibon" className="gif" />
      <p className='copyright'>
        &copy; 2026 Michael's Portfolio
      </p>
      {/* // icons for github, linkedin, email, etc. can be added here */}
      {/* // justify-content: right; */}
      <nav className='nav'>
        <a href="https://github.com/mgj0226" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/michaeldev7/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn" className="icon" />
        </a>
        <a href="mailto:michael27mic@email.com">
          <img src={Email} alt="Email" className="icon" />
        </a>
      </nav>
    </footer>
  );
}