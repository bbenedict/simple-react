import React, { useEffect } from "react";

export default function Item({index}) {

  // Create a slight delay to make the profile more interesting
  const Delay = (i) => {
    if (!(i % 10)) setTimeout(() => console.log('Delay'), 5000);
  };

  return (
    <div key={index} style={{ margin: ".5em" }}>
      {`Item ${index} in list of items random number ${Delay(index)}`}
    </div>
  );
};
