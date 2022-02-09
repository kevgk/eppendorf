import { act, renderHook } from "@testing-library/react-hooks";

import { useSortedData } from "./useSortedData";

describe("useSortedData", () => {
  it("returns the array sorted in descending order by default", () => {
    const unsorted = [{ id: 3 }, { id: 1 }, { id: 2 }];

    const { result } = renderHook(() => useSortedData(unsorted, "id"));

    expect(result.current.sorted).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);
  });

  it("returns the array sorted in ascending order when toggling from descending", () => {
    const unsorted = [{ id: 3 }, { id: 1 }, { id: 2 }];

    const { result } = renderHook(() => useSortedData(unsorted, "id"));

    act(() => {
      result.current.toggleOrder();
    });

    expect(result.current.sorted).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
});
