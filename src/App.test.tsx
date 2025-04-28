import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {

  test("should render header and main sections", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("should update statistics when typing in textarea", () => {
    render(<App />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Hello world." } });

    expect(screen.getByText("12")).toBeInTheDocument(); // 12 characters
    expect(screen.getByText("2")).toBeInTheDocument(); // 2 words
    expect(screen.getByText("1")).toBeInTheDocument(); // 1 sentence
  });

  test("should toggle exclude spaces correctly", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: /exclude spaces/i });
    fireEvent.click(checkbox);

    // Expect the label to show (no space)
    expect(screen.getByText(/no space/i)).toBeInTheDocument();
  });

});
