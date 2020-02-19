import { expect } from "chai"
import fibonacci from './fibonacci'

describe("fibonacci test", () => {
  it("for 10", () => {
    expect(fibonacci(10)).to.equal(89);
  })
})