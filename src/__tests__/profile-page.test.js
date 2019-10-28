import React from "react"
import ProfilePage from "../profile-page"
import { render } from "@testing-library/react"

it("renders with react-testing-library", async () => {
  const { findByLabelText, getByText } = render(<ProfilePage />)
  expect(getByText(/loading profile.../i)).toBeInTheDocument()
  const result = await findByLabelText("the user's name")
  expect(result).toBeInTheDocument()
})
