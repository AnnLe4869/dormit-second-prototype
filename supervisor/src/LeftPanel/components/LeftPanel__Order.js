import React from "react";

const LeftPanel__Order = () => {
  const person = {
    name: "Jacop",
    number: "4K538",
    items: 5,
    adress: "Mosaic Building FLoor 4 Room 3B",
    eta: 10,
  };
  return (
    <div className="leftPanel__Order">
      <div className="namePhone">
        <span className="name">{person.name}</span> - {person.number} (
        {person.items} items)
      </div>
      <div className="adress">{person.adress}</div>
      <div className="eta">ETA {person.eta} min</div>
    </div>
  );
};

export default LeftPanel__Order;
