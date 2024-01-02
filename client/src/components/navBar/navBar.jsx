import './navBar.css';
import imageSrc from '../../assets/images/logo-transparent.png';

export default function NavBar() {
  return (
      <nav>
        <div className='navLeft'>
          <img title="The Art Museum" className='navLogo' src={imageSrc} alt="Company logo" />
        </div>
        <div className="navCenter">
          <ul className="navList">
            <li className='navListItem'><a href="home"></a>Home</li>
            <li className='navListItem'><a href="about"></a>About</li>
            <li className='navListItem'><a href="showcase"></a>Showcase</li>
            <li className='navListItem'><a href="contact"></a>Contact</li>
          </ul>
        </div>
        <div className="navRight">
          <i class="navUser fa-solid fa-user"></i>
        </div>
      </nav>
  )
}