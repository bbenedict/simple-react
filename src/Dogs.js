import React from "react";
import dog_1 from "./images/dog_1.png";

export default function Dogs() {
  return (
    <div>
      <h2 style={{ margin: "10px" }}>
        Presidential Dogs
      </h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <img src={dog_1} style={{ height: "150px" }} alt="President George W. Bush's dog Miss Beazley" />
        </div>
        <div style={{ paddingTop: "10px" }}>
        George W. Bush's dog was a Scottish Terrier named Miss Beazley.  She was a gift to his wife Laura.
        </div>
      </div>
    </div>
  );
};
