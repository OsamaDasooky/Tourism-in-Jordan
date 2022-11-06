import React from "react";
import { Card } from "./Card";

export const Home = ({ data }) => {
  const arrayData = data;
  return (
    <div className="row">
      {arrayData.map((tour) => (
        <Card data={tour} key={tour.id} />
      ))}
    </div>
  );
};
