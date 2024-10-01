import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Categories from './Categories'
import Videos from './Videos'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <Sidebar />
        <div className='categories-videos'>
          <Categories />
          <Videos />
        </div>
      </div>
    </div>
  )
}

export default App
