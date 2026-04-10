import icon from '../assets/wolfLogo4.svg';
export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <img src={icon} alt="Icon" className='icon' />
      </a>
      <nav className='nav'>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}