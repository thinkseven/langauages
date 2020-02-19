import { expect } from "chai"
import addNumber from "./index"

describe("addNumber test", () => {
    it("add 2 numbers", () => {
        const num = addNumber(1, 2);
        expect(num).to.equal(3)
    })
})
