import './Header.css'
import searchIcon from './icons/search-icon.png'
import micIcon from './icons/microphone-icon.svg'
import hamburgerIcon from './icons/hamburger-icon.svg'
import cameraIcon from './icons/camera-icon.svg'
import bellIcon from './icons/bell-icon.svg'
import youtubeIcon from './icons/youtube-logo-icon.svg'
import pfpIcon from './icons/pfp-icon.svg'

function Header() {
  return (
    <div className="Header">
        <form className='hamburger-and-logo'>
          <button className='hamburger-button'><div><img src={hamburgerIcon}/></div></button>
          <img src={youtubeIcon}/>
          <span>YouTube</span>
        </form>
      <form>
        <input type='text' placeholder='Search'/>
        <button className='search-button'><div><img className='search-icon' src={searchIcon}/></div></button>
        <button className='mic-button'><div><img src={micIcon}/></div></button>
      </form>

      <form>
        <button className='camera-button'><div><img src={cameraIcon}/></div></button>
        <button className='bell-button'><div><img src={bellIcon}/></div></button>
        <button className='pfp-button'><div><img src={pfpIcon}/></div></button>
      </form>
    </div>
  )
}

export default Header
