import React from "react";
import cat_1 from "./images/cat_1.png";

export default function Cats() {
  return (
    <div>
      <h2 style={{ margin: ".5em" }}>
        Presidential Cats
      </h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "1em" }}>
          <img src={cat_1} style={{ height: "10em" }} alt="President Gerald Ford's cat Shan" />
        </div>
        <div style={{ paddingTop: ".5em" }}>
          Gerald Ford's cat was a Siamese named Shan.  The cat was his daughter's.
        </div>
      </div>
    </div>
  );
};
