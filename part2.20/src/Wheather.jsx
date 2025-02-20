import { useEffect,useState } from "react";
import axios from "axios";

const Wheather = ({Country}) =>{
    const [wheather,setWheather] = useState({});
    useEffect(()=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${Country.capital}&appid=b1b15e88fa797225412429c1c50c122a1`)
        .then((response)=>{
            setWheather(response.data);
        })
    })
    if(wheather){
        return(
            <div>
                <p>Temperature {Math.round(wheather?.main?.temp - 273,2)}C</p>
                <p><img src={`https://openweathermap.org/img/wn/${wheather.weather && Array.isArray(wheather.weather) && wheather.weather[0].icon}@2x.png`}/></p>
                <p>{wheather?.wind?.speed} km/h</p>
            </div>
        )
    }
}
export default Wheather;