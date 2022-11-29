enum BikeStatus {
  Sold,
  Stolen,
  PartiallyStolen,
  NotYetStolen,
  NotYetBought,
}

const getBikes = () => {
  return [
    { id: "a", brand: "Rose", status: BikeStatus.Sold },
    { id: "b", brand: "Canyon", status: BikeStatus.Sold },
    { id: "c", brand: "Focus", status: BikeStatus.Stolen },
    { id: "d", brand: "Focus", status: BikeStatus.PartiallyStolen },
    { id: "e", brand: "Trek", status: BikeStatus.NotYetBought },
  ];
};

export { getBikes };
