import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from './Components/Card';
import "./App.css";
import "./App.js";

const Global = (nama, jumlah) => {
    const[conf, setPstf] = useState([]);
    const[reco, setSem] = useState([]);
    const[deat, setMen] = useState([]);
    useEffect(() => {
        axios.get("https://covid19.mathdro.id/api")
         .then((response) => {
             setPstf(response.data.confirmed.value)
             setSem(response.data.recovered.value)
             setMen(response.data.deaths.value)
         });
    }, []);
    console.log(confirmed);
    
    return (
        <div>
            <h2>Data jumlah kasus Covid Global
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
export default Global;