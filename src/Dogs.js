import React from "react";
import dog_1 from "./images/dog_1.png";

export default function Dogs() {
  return (
    <div>
      <h2 style={{ margin: ".5em" }}>
        Presidential Dogs
      </h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: ".5em" }}>
          <img src={dog_1} style={{ height: "10em" }} alt="President George W. Bush's dog Miss Beazley" />
        </div>
        <div style={{ paddingTop: ".5em" }}>
        George W. Bush's dog was a Scottish Terrier named Miss Beazley.  She was a gift to his wife Laura.
        </div>
      </div>
    </div>
  );
};
