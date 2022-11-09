import React, { useRef, useEffect, useState } from "react";
import { faCheck, faTimes, faInfoIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardLaravel } from "./CardLaravel";
import axios from "axios";

export const Laravel = ({ token }) => {
    const [data, setdata] = useState([]);
    const config = {
        method: "get",
        url: "http://127.0.0.1:8000/api/tasks",
        headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${token}`
        }
    };
    const getData = () => {
        axios
            .request(config)
            .then(function(response) {
                setdata(response.data.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    };
    useEffect(() => {
        getData();
    }, []);
    if (data == undefined || data.length == 0) {
        return "loading...........";
    } else
        return (
            <div className="row">
                {data.map((ele, ind) => (
                    <CardLaravel key={"card" + ind} data={ele} />
                ))}
            </div>
        );
};
