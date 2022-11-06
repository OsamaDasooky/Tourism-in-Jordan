import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
function Tour({ data }) {
  const { id } = useParams();
  const [tour, setTour] = useState(
    data.filter((ele) => {
      return ele.id == id;
    })
  );

  return (
    <div className="card col-10 m-5 ">
      <div className="col-md-10  w-100">
        <img
          src={tour[0].image}
          className="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div className="col-md-10">
        <div className="card-body">
          <h5 className="card-title">{tour[0].name} </h5>
          <p> {tour[0].info}</p>
        </div>
      </div>
    </div>
  );
}

export default Tour;
