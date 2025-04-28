import { fireEvent, render, screen } from "@testing-library/react";
import LetterDensity from "./LetterDensity";

describe("LetterDensity component", () => {
  describe("Notification behaviour", () => {
    test("should render notification if text is empty", () => {
      render(<LetterDensity text="" />);
      const notification = screen.getByText(
        "No characters found. Start typing to see letter density."
      );
      expect(notification).toBeInTheDocument();
    });

    test("should not render notification if text is not empty", () => {
      render(<LetterDensity text="Text" />);
      const notification = screen.queryByText(
        "No characters found. Start typing to see letter density."
      );
      expect(notification).toBeNull();
    });
  });

  describe("Letter item rendering", () => {
    test("should display a list item for each unique character", () => {
      render(<LetterDensity text="Text" />);
      expect(screen.getByText("T")).toBeInTheDocument();
      expect(screen.getByText("E")).toBeInTheDocument();
      expect(screen.getByText("X")).toBeInTheDocument();
    });
  });

  describe("See more button behaviour", () => {
    test("should render only 5 letter items by default when there are more than 5 unique characters", () => {
      render(<LetterDensity text="ABCDEF" />);
      const items = screen.getAllByRole("listitem");
      expect(items.length).toBe(5);
    });

    test("should render all letter items after clicking 'See more'", () => {
      render(<LetterDensity text="ABCDEF" />);
      const seeMoreButton = screen.getByRole("button", { name: /show more letters/i });
      fireEvent.click(seeMoreButton);
      const items = screen.getAllByRole("listitem");
      expect(items.length).toBe(6);
    });

    test("should display 'See more' button if there are more than 5 unique letters", () => {
      render(<LetterDensity text="ABCDEF" />);
      const seeMoreButton = screen.getByRole("button", { name: /show more letters/i });
      expect(seeMoreButton).toBeInTheDocument();
    });

    test("should not display 'See more' button if there are 5 or fewer unique letters", () => {
      render(<LetterDensity text="ABCD" />);
      const seeMoreButton = screen.queryByRole("button", { name: /show more letters/i });
      expect(seeMoreButton).toBeNull();
    });

    test("should toggle between 'See more' and 'See less' when the button is clicked", () => {
      render(<LetterDensity text="ABCDEF" />);
      
      const seeMoreButton = screen.getByRole("button", { name: /show more letters/i });
      fireEvent.click(seeMoreButton);
    
      const seeLessButton = screen.getByRole("button", { name: /show fewer letters/i });
      expect(seeLessButton).toBeInTheDocument();
    
      fireEvent.click(seeLessButton);
    
      const seeMoreButtonAgain = screen.getByRole("button", { name: /show more letters/i });
      expect(seeMoreButtonAgain).toBeInTheDocument();
    });
    
  });

});
