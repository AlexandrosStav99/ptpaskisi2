describe("Testing ex1_lab1.js", () => {
    it("Testing positive values for POSITIVE", () => {
        expect(subtract(3,2)).toBe("POSITIVE")
    })
    it("Testing negative values for NEGATIVE", () => {
        expect(subtract(0,3)).toBe("NEGATIVE")
    })
    it("Testing equal values", () => {
        expect(subtract(0,0)).toBe("POSITIVE")
    })
    it("Testing negative values for POSITIVE", () => {
        expect(subtract(-2,-3)).toBe("POSITIVE")
    })
    it("Testing negative values for NEGATIVE", () => {
        expect(subtract(-3,-2)).toBe("NEGATIVE")
    })
    it("Testing string values that are numbers", () => {
        expect(subtract("33","22")).toBe("POSITIVE")
    })
    it("Testing string values that arent numbers", () => {
        expect(subtract("33er!!","help me")).toBe("incorrect input")
    })
    it("Testing float values for POSITIVE", () => {
        expect(subtract(33.35,25.43)).toBe("POSITIVE")
    })
    it("Testing float values for NEGATIVE", () => {
        expect(subtract(34,58.33)).toBe("NEGATIVE")
    })
})
