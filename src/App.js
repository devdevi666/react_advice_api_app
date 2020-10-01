import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
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
        <motion.div
            className="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
                className="card"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            >
                <motion.h1
                    className="header"
                    initial={{ opacity: 0 }}
                    animate={{opacity: 1 }}
                >
                    {advice === ""
                        ? " To get an advice press the button below."
                        : advice}
                </motion.h1>
                <button onClick={getAdvice} className="button">
                    GET ADVICE
                </button>
            </motion.div>
            <Footer />
        </motion.div>
    );
};

export default App;
