import React from "react";
import dog_1 from "./images/dog_1.png";

export default function Dogs() {
  return (
    <div>
      Presidential Dogs
      <div>
        <img src={dog_1} style={{ height: "150px" }}/>
        George W. Bush's dog was a Scottish Terrier named Miss Beazley.  She was a gift to his wife Laura.
      </div>
    </div>
  );
};
