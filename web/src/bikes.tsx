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

const bikeStatusToDisplayValueMap: Record<BikeStatus, string> = {
  [BikeStatus.Sold]: "Sold",
  [BikeStatus.Stolen]: "Stolen",
  [BikeStatus.PartiallyStolen]: "PartiallyStolen",
  [BikeStatus.NotYetStolen]: "NotYetStolen",
  [BikeStatus.NotYetBought]: "NotYetBought",
};

const Bikes: React.FC = () => {
  const bikes: Bike[] = []; // Get bikes from api

  return (
    <ul>
      {bikes.map((bike) => (
        <li>
          {bike.brand} | {bikeStatusToDisplayValueMap[bike.status]}
        </li>
      ))}
    </ul>
  );
};

export { Bikes };
