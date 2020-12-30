import React from "react";
import cat_1 from "./images/cat_1.png";

export default function Cats() {
  return (
    <div>
      Presidential Cats
      <div>
        <img src={cat_1} style={{ height: "150px" }}/>
        Gerald Ford's cat was a Siamese named Shan.  The cat was his daughter's.
      </div>
    </div>
  );
};
