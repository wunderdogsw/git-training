// This file contains the api

import { getBikes } from "./bikes";

const api = () => {
  const handlers: (() => unknown)[] = [];
  handlers.push(getBikes);

  console.log("The api is running...");
};

export default api;
