import React, { useState } from "react";
import Footer from './components/Footer'
import axios from "axios";
import "./app.css";

const App = () => {
    const [advice, setAdvice] = useState("");

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const url = `https://api.adviceslip.com/advice/${getRandomInt(217)}`;
    console.log(url);

    const getAdvice = () => {
        axios
            .get(url)
            .then((response) => {
                // console.log(response);
                const data = JSON.parse(response.data + "}");
                // console.log("parsed: ", data.slip.advice);
                setAdvice(data.slip.advice);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="app">
            <div className="card">
                <h1 className="header">
                    {advice === "" ? " To get an advice press the button below." : advice}
                </h1>
                <button onClick={getAdvice} className="button">
                    GET ADVICE
                </button>
               
            </div>
            <Footer />
        </div>
    );
};

export default App;
