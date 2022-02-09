import { getKeysFromObjectArray } from "./getKeysFromObjects";

describe("getKeysFromObjects", () => {
  it("gets all keys of an object array, with homogeneous structure", () => {
    const objArr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];

    const keys = getKeysFromObjectArray(objArr);

    expect(keys).toEqual(["id", "name"]);
  });

  it("gets all keys of an object array, with inhomogeneous structure", () => {
    const objArr = [
      { id: 1, name: "Alice" },
      { id: 2, age: 35 },
      { status: "employed" },
    ];

    const keys = getKeysFromObjectArray(objArr);

    expect(keys).toEqual(["id", "name", "age", "status"]);
  });
});
