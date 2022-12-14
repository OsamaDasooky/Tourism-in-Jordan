import { useState, useEffect } from "react";
import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Footer from "./components/Footer";
import Tour from "./components/Tour";
import UseEffectTask from "./components/UseEffectTask";
import UseEffect from "./components/UseEffect";
import { Api } from "./components/Api";
import { Weather } from "./components/Weather";
import { Laravel } from "./components/Laravel";
import { Login } from "./components/Login";
import axios from "axios";

function App() {
    const [tours] = useState([
        {
            id: 1,
            name: "Petra",
            info:
                "Petra was later annexed to the Roman Empire and continued to thrive until a large earthquake in 363 AD destroyed much of the city in the 4th century AD. ",
            image:
                "https://www.worldatlas.com/r/w768/upload/ea/82/5c/ad-deir.jpg"
        },
        {
            id: 2,
            name: "Jerash",
            info:
                "Jerash (aka Gerasa, Gerash or Gerasha) is the capital and the largest city of the Jerash Governorate in Jordan, but in ancient times it was one of the wealthiest and most cosmopolitan cities in the ancient Near East. ",
            image:
                "https://www.planetware.com/wpimages/2021/02/jordan-jerash-top-ruins-temples-nymphaeum.jpg"
        },
        {
            id: 3,
            name: "Zarqa",
            info:
                "Zarqa is a Jordanian city and the capital of the Zarqa Governorate, which is nearly 20 km northeast of the capital city of Amman. Zarqa is the third largest city in terms of population, with a population of about 572,290 in 2013, and is considered the industrial capital of Jordan. There are many locations not to be missed in Zarqa including a wildlife reserve, a wetland reserve and several castles. ",
            image:
                "https://strongcitiesnetwork.org/en/wp-content/uploads/sites/5/2019/01/Qurtobah_Az-Zarqa_Jordan_-_panoramio_2-e1548255158541.jpg"
        },
        {
            id: 4,
            name: "Irbid",
            info:
                "Home to the prestigious Yarmouk University, Irbid is a bustling Jordanian city brimming with museums, ancient architecture, and an upmarket city charm. As the city is less frequented by tourists than Jordan???s more popular cities, a visit to Irbid will uncover an authentic Jordanian lifestyle with delicious street side food stalls, restaurants and local shops.",
            image:
                "https://theculturetrip.com/wp-content/uploads/2018/06/um-qais-wiki.jpg"
        },
        {
            id: 5,
            name: "Aqaba",
            info:
                "Aqaba Port Authority was established in 1952 by a royal decree and took its present name (Aqaba Ports Corporation, APC)  in 1978.  APC is a  governmental body with an independent character responsible for establishing, developing, maintaining and operating port activities (receiving of ships, handling and storing cargo).",
            image:
                "https://austria-forum.org/attach/Geography/Asia/Jordan/Special_Information/Aqaba%2C_Jordan/scaled-900x555-02_Aqabe.jpg"
        }
    ]);
    const [test, setTest] = useState(0);
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/logout",
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const deleteToken = () => {
        axios
            .request(config)
            .then(function(response) {
                console.log(response.data.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    };
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    useEffect(() => {
        if (token == null) {
            navigate("/");
        }
    }, [token]);

    function handleClickFromHeader(newValue) {
        setTest(newValue);
    }
    const logout = () => {
        deleteToken();
        localStorage.removeItem("token");
        setToken(null);
    };

    return (
        <>
            <Header logout={logout} token={token} />
            <Routes>
                <Route exact path="/" element={<Home data={tours} />} />
                <Route
                    exact
                    path="/useEffect"
                    element={
                        <UseEffect
                            stateFromApp={test}
                            onClick={handleClickFromHeader}
                        />
                    }
                />
                <Route exact path="/tour/:id" element={<Tour data={tours} />} />
                <Route
                    exact
                    path="/useEffect/task"
                    element={<UseEffectTask />}
                />
                <Route exact path="/api" element={<Api />} />
                <Route exact path="/weather" element={<Weather />} />
                <Route
                    exact
                    path="/laravel"
                    element={<Laravel token={token} />}
                />
                <Route
                    exact
                    path="/login"
                    element={<Login setToken={setToken} token={token} />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
