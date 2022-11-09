import React, { useEffect, useState } from "react";
import axios from "axios";
import { TranslateInput } from "./TranslateInput";

export const Api = () => {
    const [apiLanguages, setApiLanguages] = useState({});
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [totLang, setTotLang] = useState("");
    const [fromLand, setFromLand] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const getData = {
        method: "GET",
        url: "https://translef-translator.p.rapidapi.com/language/list",
        headers: {
            "X-RapidAPI-Key":
                "87c3925208msh4044a3911f7f122p1a8ce2jsn9831101b788f",
            "X-RapidAPI-Host": "translef-translator.p.rapidapi.com"
        }
    };
    const fetchResult = () => {
        const encodedParams = new URLSearchParams();
        // encodedParams.append("from", fromLand);
        // encodedParams.append("to", totLang);
        // encodedParams.append("text", from);
        encodedParams.append("from", "en");
        encodedParams.append("to", "ru");
        encodedParams.append("text", "Hello");
        console.log(encodedParams);
        const getResult = {
            method: "POST",
            url: "https://translo.p.rapidapi.com/api/v3/translate",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "X-RapidAPI-Key":
                    "87c3925208msh4044a3911f7f122p1a8ce2jsn9831101b788f",
                "X-RapidAPI-Host": "translo.p.rapidapi.com"
            },
            data: { from: "en", to: "ru", text: "Hello" }
        };

        axios
            .request(getResult)
            .then(function(response) {
                setTo(response.data);
                console.log(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    };

    const fetchData = () => {
        axios
            .request(getData)
            .then(function(response) {
                setApiLanguages(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    };
    function handleFrom(value) {
        setFrom(value);
        // console.log(value);
    }
    function handleTo(value) {
        setTo(value);
        // console.log(value);
    }
    function handleFromLand(value) {
        setFromLand(value);
        // console.log(value);
    }
    function handleToLang(value) {
        setTotLang(value);
        // console.log(value);
    }
    if (apiLanguages.length == undefined || apiLanguages.length == 0) {
        return "loading ......";
    } else {
        return (
            <div className="row justify-content-center">
                <TranslateInput
                    name={"from"}
                    type={"from language"}
                    handleFunction={[handleFrom, handleFromLand]}
                    data={apiLanguages}
                />
                <TranslateInput
                    name={"to"}
                    type={"to language"}
                    handleFunction={[handleTo, handleToLang]}
                    data={apiLanguages}
                />
                ;
                <button
                    className="col-2 btn btn-primary h-25 align-self-end"
                    onClick={() => {
                        fetchResult();
                    }}
                >
                    Translate
                </button>
            </div>
        );
    }
};
