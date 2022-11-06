import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <div className="card col-5 m-5">
      <div className="row ">
        <div className="col-md-4">
          <img src={data.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.name} </h5>
            <Link to={`/tour/${data.id}`}>
              <button className="btn btn-primary mt-4"> view Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
