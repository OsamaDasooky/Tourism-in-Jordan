import React from "react";

export const CardWeather = ({ data }) => {
    return (
        <div className="row algin-content-start">
            <div className="card text-bg-light m-3 col-lg-3 align-self-start">
                <div className="card-body">
                    <h6 className="card-title">
                        {data.location.name}: {data.location.country}{" "}
                    </h6>
                    <span>
                        {data.forecast.forecastday[0].day.condition.text}
                    </span>
                    <img
                        src={data.forecast.forecastday[0].day.condition.icon}
                        alt=""
                    />
                    <p className="card-text ">
                        local time :{data.location.localtime}
                    </p>
                    <p className="card-text ">
                        Temperature :
                        {data.forecast.forecastday[0].day.avgtemp_c}C
                    </p>
                    <p className="card-text ">
                        wind speed :
                        {data.forecast.forecastday[0].day.maxwind_kph}C
                    </p>
                    <p className="card-text ">
                        {data.forecast.forecastday[0].date}
                    </p>
                </div>
            </div>

            <ul class="list-group col-6 align-self-end">
                {data.forecast.forecastday[0].hour.map((ele, ind) => (
                    <li key={"img" + ind} class="list-group-item">
                        <img src={ele.condition.icon} alt="" />
                        <b>{ele.condition.text}</b> - {ele.time} <br />
                        Temperature :{ele.temp_c}
                        {"C "}
                    </li>
                ))}
            </ul>
        </div>
    );
};
