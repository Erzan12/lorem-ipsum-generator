import { describe, it, expect } from "vitest"; import { generateLorem } from "./generateLorem";

// describe("generateLorem", () => { it("returns the requested number of paragraphs", () => { const result = generateLorem(3);

// console.log(result.length); // 3 console.log(result[0]); // First generated paragraph

// expect(result).toHaveLength(3); });

// it("returns an array of strings", () => { const result = generateLorem(3);

// expect(result.every(p => typeof p === "string")).toBe(true); });

// it("generates non-empty paragraphs", () => { const result = generateLorem(3);

// expect(result.every(p => p.trim().length > 0)).toBe(true); });

// it("returns an empty array when count is zero", () => { const result = generateLorem(0);

// expect(result).toEqual([]); }); });

describe("generateLorem", () => {
  it("generates the requested number of paragraphs", () => {
    const result = generateLorem(3);

    expect(result).toHaveLength(3);
    expect(result.every((paragraph) => paragraph.length > 0)).toBe(true);
  });

  it("returns an empty array for zero paragraphs", () => {
    expect(generateLorem(0)).toEqual([]);
  });

  it("returns an array containing strings", () => {
    const result = generateLorem(2);

    expect(result.every((paragraph) => typeof paragraph === "string")).toBe(true);
  });
});