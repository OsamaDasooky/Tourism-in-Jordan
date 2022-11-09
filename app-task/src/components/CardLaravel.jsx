import React from "react";
import { Link } from "react-router-dom";

export const CardLaravel = ({ data }) => {
    return (
        <div className="card col-5 m-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">
                            {data.task_info.task_name}{" "}
                        </h5>
                        <p>{data.user_info.user_name} </p>
                        <p>{data.task_info.task_description} </p>
                        <p>{data.task_info.task_priority} </p>
                        <p>{data.task_info.time_created} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
