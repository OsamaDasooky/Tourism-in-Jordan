import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { CardWeather } from "./CardWeather";

export const Weather = () => {
    const [data, setData] = useState([]);
    const [city, setCity] = useState("amman");
    const [date, setDate] = useState("2022-11-09");

    const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/history.json",
        params: { q: city, dt: date, lang: "en" },
        headers: {
            "X-RapidAPI-Key":
                "87c3925208msh4044a3911f7f122p1a8ce2jsn9831101b788f",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
        }
    };
    const fetchData = () => {
        axios
            .request(options)
            .then(function(response) {
                setData(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleNameCity = value => {
        setCity(value);
    };
    const handleDate = value => {
        setDate(value);
    };

    if (data.length == 0) {
        return "loading ......";
    } else {
        return (
            <div className="row justify-content-center">
                <div className="col-lg-8 d-flex">
                    <input
                        type="text"
                        className="form-control m-3 "
                        onChange={e => {
                            handleNameCity(e.target.value);
                        }}
                        placeholder={"City"}
                    />
                    <input
                        type="date"
                        className="form-control m-3 "
                        onChange={e => {
                            handleDate(e.target.value);
                        }}
                    />
                    <button
                        className="col-2 btn btn-primary h-50 align-self-center"
                        onClick={() => {
                            fetchData();
                        }}
                    >
                        check
                    </button>
                </div>
                <div className="col-lg-10 ">
                    <CardWeather data={data} />
                </div>
            </div>
        );
    }
};
