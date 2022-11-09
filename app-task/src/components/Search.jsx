import React from "react";

export const Search = ({ handleSearch, handlePrice, price, totalBooks }) => {
  return (
    <div className="row justify-content-center align-content-center">
      <div className="col-lg-10">
        <input
          className="form-control  w-25 col-lg-5 d-inline-block"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />

        <input
          type="range"
          className="form-range  ms-3 my-3  w-25 "
          min="0"
          max="35"
          step="1"
          id="customRange3"
          onChange={(e) => handlePrice(e.target.value)}
        />

        <span
          className="btn btn-primary ms-3"
          onClick={() => {
            handlePrice("0");
            document.getElementById("customRange3").value = 0;
          }}
        >
          rest
        </span>
      </div>
      <p className="text-capitalize m-3 col-lg-10 d-flex">
        current prices are between <b> {price} </b> and 35 JD total results is
        <b>{totalBooks}</b>
      </p>
    </div>
  );
};
