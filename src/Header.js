import './Header.css'
import searchIcon from './icons/search-icon.png'
import micIcon from './icons/microphone-icon.svg'

function Header() {
  return (
    <div className="Header">
      <form>
        <input type='text' placeholder='Search'/>
        <button className='search-button'><div><img className='search-icon' src={searchIcon}/></div></button>
        <button className='mic-button'><div><img src={micIcon}/></div></button>
      </form>
    </div>
  )
}

export default Header
