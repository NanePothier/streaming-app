import { screen, render } from "@testing-library/react";
import AllPlanInfo from "./AllPlanInfo";

describe("The AllPlanInfo component", () => {
  it("should show a heading", () => {
    render(<AllPlanInfo />);
    const headingText = screen.getByText("INCLUDED IN ALL PLANS");
    expect(headingText).toBeInTheDocument();
  });

  it("should show a second heading", () => {
    render(<AllPlanInfo />);
    const headingText = screen.getByText("All The TV You Love");
    expect(headingText).toBeInTheDocument();
  });

  it("should display some general info", () => {
    render(<AllPlanInfo />);
    const info = screen.getByTestId("heading3");
    expect(info).toBeInTheDocument();
  });
});
