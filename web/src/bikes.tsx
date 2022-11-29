import React from "react";

enum BikeStatus {
  Sold,
  Stolen,
  PartiallyStolen,
  NotYetStolen,
  NotYetBought,
}

type Bike = {
  id: string;
  brand: string;
  status: BikeStatus;
};

const Bikes: React.FC = () => {
  const bikes: Bike[] = []; // Get bikes from api

  return (
    <ul>
      {bikes.map((bike) => (
        <li>{bike.brand} | {bike.status}</li>
      ))}
    </ul>
  );
};

export { Bikes };
