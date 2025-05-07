import React from 'react'
import './Weather.css'
import search from '../images/search.png'
// import clear from '../images/clear.png'
// import clouds from '../images/clouds.png'
// import drizzle from '../images/drizzle.png'
// import humidity from '../images/humidity.png'
// import mist from '../images/mist.png'
// import rain from '../images/rain.png'
// import snow from '../images/snow.png'
// import wind from '../images/wind.png'
const Weather = () => {
  return (
    <div>
      <div className="weather">
        <div className="search-bar">
          <input type="text" placeholder='Search' />
          <img src={search} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Weather