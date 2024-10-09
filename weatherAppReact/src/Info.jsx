import React from "react";
import { Component } from "react";

class Info extends Component{
    render(){
        console.log(this.props.data);
        // const {temperature} = this.props.current.condition.temp_c;
        // console.log(temperature);

        // const { name } = this.props.location.name;
        
        const temp = this.props.data.current.temp_c;
        const humidity = this.props.data.current.humidity;
        console.log(this.props.data.current.temp_c);
        console.log(this.props.data.current.humidity);
        
        return(
            <div className="info__container">
                {/* <div className="cityName">City Name is {name}</div> */}
                <div className="temp">Temperature (in celcius) : {temp}</div>
                <div className="humidity">Humidity is : {humidity}</div>
            </div>
        )
    }
}

export default Info