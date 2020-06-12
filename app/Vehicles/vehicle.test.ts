import {countVehicles} from "./vehicle";

describe("Test vehicle count", () => {
  it("Returns 0 for empty list", () => {
    const result = countVehicles([]);
    expect(result).toBe(0);
  });
});
