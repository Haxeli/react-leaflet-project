import './App.css'
import MapBox from './components/MapBox'
import SearchBox from './components/SearchBox'

function App() {
  return (
    <div className="App">
      <div>
        <MapBox />
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  )
}

export default App
