enum BikeStatus {
  Sold,
  Stolen,
  PartiallyStolen,
  NotYetStolen,
  NotYetBought,
}

const bikes = [
  { id: "a", brand: "Rose", status: BikeStatus.Sold },
  { id: "b", brand: "Canyon", status: BikeStatus.Sold },
  { id: "c", brand: "Focus", status: BikeStatus.Stolen },
  { id: "d", brand: "Focus", status: BikeStatus.PartiallyStolen },
  { id: "e", brand: "Trek", status: BikeStatus.NotYetBought },
];

const getBike = (id: string) => {
  return bikes.find((bike) => bike.id === id);
};

const getBikes = () => {
  return bikes;
};

export { getBike, getBikes };
