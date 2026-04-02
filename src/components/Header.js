import icon from '../assets/wolfLogo4.svg';
export default function Header() {
  return (
    <header className="header">
      <img src={icon} alt="Icon" className='icon' />
      <h1 className='name'>Michael Chan</h1>
      <nav className='nav'>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}