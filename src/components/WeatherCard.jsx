function WeatherCard(props){
    return(
     <div onClick={props.onClick}>
        <p>Pogoda w: </p>
              <h2>{props.miasto}</h2>
              <h2>{props.temp}</h2>
              <h2>{props.wiatr}</h2>
            </div>
    )

}
export default WeatherCard;