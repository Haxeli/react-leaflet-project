import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { SpeedDial, SpeedDialIcon } from '@mui/material'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import ExploreIcon from '@mui/icons-material/Explore'
import EditIcon from '@mui/icons-material/Edit'
import SearchBox from './SearchBox'

function MapBox() {
    const [showSearch, setShowSearch] = useState(false)

    

  return (
    <div
        className='MapBox'
        style={{
            visibility: showSearch !== true ? {width: '100vw', height: '100vh'} : {width: '80vw', height: '100vh'}
        }}  
    >
        <MapContainer
            center={[53.3498, -6.2603]}
            zoom={11}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SpeedDial
            sx={{ position: 'absolute', bottom: 32, right: 16 }}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            ariaLabel="SpeedDial openIcon example"
        >
            <SpeedDialAction
                key={"LocationSearch"}
                icon={<ExploreIcon />}
                tooltipTitle={"Search Location"}
                onClick={() => setShowSearch(!showSearch)}
            />
        </SpeedDial>
        {showSearch && <SearchBox />}
      </MapContainer>
    </div>
  )
}

export default MapBox