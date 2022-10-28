import React from "react";

const Rusher__PickUp = () => {
  const person = {
    name: "Jacop",
    number: "4K538",
    items: 5,
    adress: "Mosaic Building FLoor 4 Room 3B",
    eta: 10,
  };
  return (
    <div className="rusherPickUp" draggable>
      <div className="namePhone">
        <span className="name">{person.name}</span> - {person.number} (
        {person.items} items)
      </div>
      <div className="adress">{person.adress}</div>
      <div className="eta">
        <b>PICKUP</b> ETA {person.eta} min
      </div>
    </div>
  );
};

export default Rusher__PickUp;