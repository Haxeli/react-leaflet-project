import './App.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { SpeedDial } from '@mui/material'

function App() {
  return (
    <div className="App">
      <MapContainer center={[53.3498, -6.2603]} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SpeedDial></SpeedDial>
      </MapContainer>
    </div>
  )
}

export default App
