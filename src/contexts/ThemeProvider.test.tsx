import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeContext } from "./ThemeContext";
import React from "react";

/**
 * Helper component to test the ThemeProvider.
 * Uses ThemeContext to access the current theme and toggleTheme function.
 */
const Consumer = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </>
  );
};

describe("ThemeProvider", () => {
  /**
   * Test Setup
   */
  beforeEach(() => {
    localStorage.clear();
    document.body.className = "";
  });

  /**
   * Test if the theme is correctly set from localStorage.
   * The theme should be retrieved from localStorage and applied to the page.
   */
  test("set theme from localStorage", () => {
    localStorage.setItem("theme", "dark");

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(document.body.classList.contains("dark")).toBe(true);
  });

  /**
   * Test if the theme is correctly set based on prefers-color-scheme: dark.
   * The theme should be set to dark when prefers-color-scheme is dark.
   */
  test("set theme from prefers-color-scheme to dark", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: dark)",
      media: query,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(document.body.classList.contains("dark")).toBe(true);
    expect(document.body.classList.contains("light")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  /**
   * Test if the theme is correctly set based on prefers-color-scheme: light.
   * The theme should be set to light when prefers-color-scheme is light.
   */
  test("set theme from prefers-color-scheme to light", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: light)",
      media: query,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme").textContent).toBe("light");
    expect(document.body.classList.contains("light")).toBe(true);
    expect(document.body.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
