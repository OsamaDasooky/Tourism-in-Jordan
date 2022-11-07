import React from "react";

export const Search = ({ handleSearch, handlePrice }) => {
  return (
    <div className="row justify-content-center align-content-center">
      <div className="col-lg-10">
        <input
          className="form-control  w-25 col-lg-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />

        <input
          type="range"
          className="form-range  mx-auto my-3  w-50 "
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
    </div>
  );
};
