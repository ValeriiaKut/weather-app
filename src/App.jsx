
import './App.css'
import { useState } from 'react'
import WeatherCard from './components/WeatherCard'

function App() {

  const miasta = [
    {miasto: 'warszawa', temp: 18, pogoda: "slonecznie" , wiatr: 90},
    {miasto: 'wroclaw', temp: 19, pogoda: "deszczowo" , wiatr: 90 },
    {miasto: 'krakow', temp: 4, pogoda: "witrzenie" , wiatr: 90 },
    {miasto: 'kyiv', temp: 9, pogoda: "slonecznie" , wiatr: 90},
    {miasto: 'new york', temp: 7, pogoda: "deszczowo" , wiatr: 90},
    {miasto: 'dofodf', temp: 3, wiatr: 90, pogoda: "slonecznie"}
  ]

  const [wybraneMiasto, setWybraneMiasto] = useState(null);


  const handleClick = (miasto) =>{
   setWybraneMiasto(miasto);
  }



return (
    <>
      <h1>Pogoda</h1>
     
      {miasta.map((dane) =>{
          return(
           <WeatherCard miasto={dane.miasto} temp={dane.temp} onClick={() => handleClick(dane)}></WeatherCard>
          )
        }
      )}

      {wybraneMiasto && (
        <div>
          <h3>szczegoly pogody dla {wybraneMiasto.miasto} </h3>
          <h3>szczegoly pogody dla {wybraneMiasto.temp} </h3>
          <p>Wiatr:{wybraneMiasto.wiatr}</p>
          <p>Pogoda:{wybraneMiasto.pogoda}</p>
        </div>
      )}


    </>
  )
}

export default App
