import React from "react";

export const CardBook = ({ data }) => {
  return (
    <div className="card text-bg-light m-3 col-lg-3 ">
      <div className="card-header">{data.language}</div>
      <div className="card-body">
        <h5 className="card-title">Edition :{data.edition}</h5>
        <p className="card-text">Price : {data.price}</p>
      </div>
    </div>
  );
};
