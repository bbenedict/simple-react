import React from "react";
import cat_1 from "./images/cat_1.png";

export default function Cats() {
  return (
    <div>
      <h2 style={{ margin: "10px" }}>
        Presidential Cats
      </h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <img src={cat_1} style={{ height: "150px" }} alt="President Gerald Ford's cat Shan" />
        </div>
        <div style={{ paddingTop: "10px" }}>
          Gerald Ford's cat was a Siamese named Shan.  The cat was his daughter's.
        </div>
      </div>
    </div>
  );
};
