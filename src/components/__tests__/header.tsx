import * as React from "react"
import * as renderer from "react-test-renderer"

import Header from "../layout/header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
			.create(<Header siteSubTitle="Your favourite food delivery collective" />)
			.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
