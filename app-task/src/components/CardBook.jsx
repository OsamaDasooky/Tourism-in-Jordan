import React from "react";

export const CardBook = ({ data }) => {
  return (
    <div className="card text-bg-light m-3 col-lg-3 ">
      <div className="card-header">
        <strong> {data.language}</strong>
      </div>
      <div className="card-body">
        <h6 className="card-title">Edition :{data.edition}</h6>
        <p className="card-text text-success">
          Price :<b> {data.price} JD</b>
        </p>
      </div>
    </div>
  );
};
