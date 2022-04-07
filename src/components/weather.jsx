import React, { useEffect, useState } from "react";

function Weather() {
const [location, setlocation] = useState("");
const [loading, setloading] = useState(false);
const [opdata, setopdata] = useState(null);
const [error, seterror] = useState("");

const getcityweather = ()=> {
    setloading(true);
    const url = `https://openweathermap.org/data/2.5/find?q=${location}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`
     fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
    setloading(false);

        console.log(data);
        if(data.count===0) {
            seterror("city not found")
        }else{
    setopdata(data);

        }
    });
    

};





if(loading) {
    return<h1>loading...</h1>
}

    return(
        <>
        <input placeholder="enter location" value={location} onChange={(e)=> {
        setlocation(e.target.value);
    }}></input>

    <button onClick={getcityweather}>search</button>

{error?(<h4 style={{color:"red"}}>{error}</h4>):(null)}


    {opdata?(
        <>
<h1>current weather</h1>
<div>place: {location}</div>
    <div>temperature: {opdata.list[0].main.temp}</div>
    <div>country: {opdata.list[0].sys.country}</div>
    <div>weather: {opdata.list[0].weather[0].main} & {opdata.list[0].weather[0].description}</div>
        </>
    
    )
    :(null)}
        </>
    
    )
}

export default Weather;