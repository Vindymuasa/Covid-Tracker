import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from './Components/Card.js';
import "./App.css";

const Indonesia = (nama, jumlah) => {
    const[conf, setPstf] = useState([]);
    const[reco, setSem] = useState([]);
    const[deat, setMen] = useState([]);
    useEffect(() => {
        axios.get(("https://indonesia-covid-19.mathdro.id/api"))
         .then((response) => {
             setPstf(response.data.confirmed.value)
             setSem(response.data.recovered.value)
             setMen(response.data.deaths.value)
         });
    }, []);
    console.log(confirmed);
    
    return (
        <div>
            <h2>Data jumlah kasus Covid di Indonesia
                <div className="card">
                <Card
                    nama="Positif"
                    nilai={confirmed.value}
                />
                <Card 
                    nama="Sembuh"
                    nilai={recovered.value}
                />
                <Card 
                    nama="Meninggal"
                    nilai={deaths.value}
                />
                </div>
            </h2>
        </div>
    )
};
export default Indonesia;