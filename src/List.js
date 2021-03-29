import React from "react";
import Item from './Item';

export default function List() {
  const items = Array(100).fill().map((x,i)=>i)

  return (
    <div>
      <h1 style={{ margin: ".5em" }}>
        Performance test 
      </h1>
      { items.map((i) => <Item key={i} index={i} />)}
    </div>
  );
};
