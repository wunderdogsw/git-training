// This file contains the api

import { getBike, getBikes } from "./bikes";

const api = () => {
  const handlers: (() => unknown)[] = [];
  handlers.push(getBike, getBikes);

  console.log("The api is running...");
};

export default api;
