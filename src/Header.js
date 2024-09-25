import './Header.css'
import searchIcon from './icons/search-icon.png'

function Header() {
  return (
    <div className="Header">
      <form>
        <input type='text' placeholder='Search'/>
        <button className='search-button'><div><img className='search-icon' src={searchIcon}/></div></button>
      </form>
    </div>
  )
}

export default Header
