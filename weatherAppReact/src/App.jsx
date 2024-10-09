import React from "react";
import { Component } from "react";
import Info from "./Info";

class App extends Component{
    constructor(){
        super()

        this.state = {
            city: "jaipur",
            weatherData: null,
        }
    }

    fetchData = async(e) => {
        e.preventDefault();
        // console.log(this.state.city);
        try{
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f6f99450382a4bfa84390735242304&q=${this.state.city}&aqi=no`);
            if(!response.ok){
              throw new Error("Error")
            }
            const data = await response.json();
            // console.log(data);
            this.setState({weatherData : data});
          }catch(e){
            console.log(e);
          }
    }

    render(){
        return(
            <>  
                <div className="container">
                    <h1>Weather App</h1>
                    <div className="form__container" onSubmit={this.fetchData}>
                        <form action="">
                            <label htmlFor="">City :</label>
                            <input type="text" placeholder="Enter City Name" onChange={(e) => {this.setState({city : e.target.value})}}/>
                            <input type="submit" />
                        </form>
                    </div>

                    <div className="info__container">
                        {this.state.weatherData && <Info data={this.state.weatherData} />}
                        {/* <Info data={this.state.weatherData} /> */}
                    </div>
                </div>
            </>
        )
    }
}

export default App