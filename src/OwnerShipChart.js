import React from "react";
import chart_1 from "./images/chart_1.png";

export default function OwnerShipChart() {
  return (
    <div>
      <h2 style={{ margin: "10px" }}>
        American Pet Ownership
      </h2>
      <figure role="group">
        <img
          src={chart_1} style={{ height: "250px" }}
          alt="American pet ownership 2018"
          aria-describedby="chart-description"
        />
        <p id="chart-description" style={{ width: "500px" }}>
          Chart showing American pet ownership in 2018.
          33% of responders own only dogs. 11% own only cats.
          14% own a dog and a cat. 39% have no pets.
          5% responded other.
          Source the 2018 General Source Survey.
        </p>
      </figure>
    </div>
  );
};
