import Pilibon from '../assets/Pilibon2.gif';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <img src={Pilibon} alt="Pilibon" className="footer-gif" />
        &copy; 2026 Michael's Portfolio
      </p>
    </footer>
  );
}