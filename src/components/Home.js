import icon from '../assets/wolfLogo4.svg';

export default function Home() {
  return (
    <div className="home">
        <img src={icon} alt="Wolf Logo" className="home-icon" />
        <h1 className='line1'>Front End Developer</h1>
      <h1 className='line2'>Michael Chan</h1>
    </div>
  );
}