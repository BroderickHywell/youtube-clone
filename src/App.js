import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Categories from './Categories'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <Sidebar />
        <Categories />
      </div>
    </div>
  )
}

export default App
