import React from "react";

type Bike = {
  id: string;
  brand: string;
};

const Bikes: React.FC = () => {
  const bikes: Bike[] = []; // Get bikes from api

  return (
    <ul>
      {bikes.map((bike) => (
        <li>{bike.brand}</li>
      ))}
    </ul>
  );
};

export { Bikes };
