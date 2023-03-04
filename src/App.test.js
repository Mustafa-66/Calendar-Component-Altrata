import { render, screen } from "@testing-library/react";
import App from "./App";

test("calendar is loaded", () => {
  render(<App />);
  const calendarComponent = screen.getByTestId("calendar");
  expect(calendarComponent).toBeInTheDocument();
});
