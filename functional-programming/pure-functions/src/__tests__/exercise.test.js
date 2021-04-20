import { hexToRgb, rgbToHex } from "../exercise";

describe("Exercises", () => {
  describe("Exercise One: hexToRgb", () => {
    it("throws an error if not a string", () => {
      expect(() => hexToRgb(null)).toThrow();
    });

    it("throws an error if not a valid hexcode", () => {
      expect(() => hexToRgb("#aaa")).toThrow();
      expect(() => hexToRgb("#aaaa")).toThrow();
      expect(() => hexToRgb("#aaammm")).toThrow();
    });

    it("does not throw for valid hex code", () => {
      expect(() => hexToRgb("#aaaaaa")).not.toThrow();
    });

    it("returns an rgb object", () => {
      expect(hexToRgb("#000000")).toEqual({ red: 0, green: 0, blue: 0 });
    });

    it("return the correct value when only a single channel is set", () => {
      expect(hexToRgb("#ff0000")).toEqual({ red: 255, green: 0, blue: 0 });
      expect(hexToRgb("#00ff00")).toEqual({ red: 0, green: 255, blue: 0 });
      expect(hexToRgb("#0000ff")).toEqual({ red: 0, green: 0, blue: 255 });
    });

    it("does not log to console", () => {
      const originalConsoleLog = console.log;
      console.log = jest.fn();

      hexToRgb("#000000");

      expect(console.log).not.toHaveBeenCalled();

      console.log = originalConsoleLog;
    });
  });

  describe("Exercise Two: rgbToHex", () => {
    it("throws an error if not given an object with red green and blue properties", () => {
      expect(() => rgbToHex({})).toThrow();
      expect(() => rgbToHex({ red: 123 })).toThrow();
      expect(() => rgbToHex({ green: 123 })).toThrow();
      expect(() => rgbToHex({ blue: 123 })).toThrow();
      expect(() => rgbToHex({ red: 123, green: 123, blue: 123 })).not.toThrow();
    });

    it("throws an error if rgb properties are not numbers between 0 and 255", () => {
      expect(() => rgbToHex({ red: "hello", green: 123, blue: 123 })).toThrow();
      expect(() => rgbToHex({ red: 123, green: 123, blue: 256 })).toThrow();
      expect(() =>
        rgbToHex({ red: 0, green: 123, blue: new Date() })
      ).toThrow();
      expect(() => rgbToHex({ red: 0, green: 255, blue: 255 })).not.toThrow();
    });

    it("returns valid hex codes", () => {
      expect(rgbToHex({ red: 0, green: 0, blue: 0 })).toBe("#000000");
      expect(rgbToHex({ red: 255, green: 255, blue: 255 })).toBe("#ffffff");
    });

    it("returns the correct hex code for various values", () => {
      expect(rgbToHex({ red: 0, green: 0, blue: 255 })).toBe("#0000ff");
      expect(rgbToHex({ red: 0, green: 255, blue: 0 })).toBe("#00ff00");
      expect(rgbToHex({ red: 255, green: 0, blue: 0 })).toBe("#ff0000");
      // Fuschia
      expect(rgbToHex({ red: 252, green: 3, blue: 236 })).toBe("#fc03ec");
      // Amarinth Purple
      expect(rgbToHex({ red: 166, green: 58, blue: 80 })).toBe("#a63a50");
      // Lilac Luster
      expect(rgbToHex({ red: 183, green: 150, blue: 172 })).toBe("#b796ac");
    });

    it("Does not modify the input", () => {
      const originalInput = { red: 166, green: 58, blue: 80 };
      const localCopyForTest = { red: 166, green: 58, blue: 80 };

      rgbToHex(originalInput);

      expect(originalInput).toEqual(localCopyForTest);
    });

    it("does not log to console", () => {
      const originalConsoleLog = console.log;
      console.log = jest.fn();

      rgbToHex({ red: 0, green: 0, blue: 0 });

      expect(console.log).not.toHaveBeenCalled();

      console.log = originalConsoleLog;
    });
  });
});
