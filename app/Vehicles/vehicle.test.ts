import {countVehicles} from "./vehicle";

describe("Test vehicle count", () => {
  const result = countVehicles([]);
  expect(result).toBe(0);
});
