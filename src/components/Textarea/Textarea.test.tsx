import { fireEvent, render, screen } from "@testing-library/react";
import Textarea from "./Textarea";

describe("Textarea component", () => {


  const setup = (overrides = {}) => {
    const defaultProps = {
      text: "Default text",
      onChangeText: jest.fn(),
      excludeSpaces: false,
      onChangeExcludeSpace: jest.fn(),
    };
    const props = { ...defaultProps, ...overrides };
    render(<Textarea {...props} />);
    return props;
  };


  test("should render text and allow changes", () => {
    const { onChangeText } = setup({ text: "Start Text" });
    const textarea = screen.getByPlaceholderText(
      "Start typing here… (or paste your text)"
    );
    expect(textarea).toHaveValue("Start Text");
    fireEvent.change(textarea, { target: { value: "New Text" } });
    expect(onChangeText).toHaveBeenCalledWith("New Text");
  });


  test("should display error when text exceeds character limit", () => {
    setup({ text: '1234567890'});

    // set character limit
    fireEvent.click(screen.getByLabelText("Set Character Limit"));
    const numberInput = screen.getByRole("spinbutton");
    fireEvent.change(numberInput, { target: { value: 9 } });

    expect(screen.getByText("Limit reached! Your text exceeds 9 characters.")).toBeInTheDocument();
  });


  test("should not display error if text without spaces is under limit", () => {
    setup({ text: '123 456789', excludeSpaces: true });

    // set character limit
    fireEvent.click(screen.getByLabelText("Set Character Limit"));
    const numberInput = screen.getByRole("spinbutton");
    fireEvent.change(numberInput, { target: { value: 9 } });

    expect(screen.queryByText(/Limit reached!/)).toBeNull();

  })


  test("should display estimated reading time of '0 minute'", () => {
    setup({text: ''})
    expect(screen.getByText(/Approx. reading time/)).toHaveTextContent('Approx. reading time: 0 minute');
  });


  test("should display estimated reading time of '< 1 minute'", () => {
    setup()
    expect(screen.getByText(/Approx. reading time/)).toHaveTextContent('Approx. reading time: < 1 minute');
  });


  test("should display estimated reading time of '< 2 minute'", () => {
    const fourHundredWords = Array(400).fill("word").join(" ");
    setup({text: fourHundredWords})
    expect(screen.getByText(/Approx. reading time/)).toHaveTextContent('Approx. reading time: < 2 minutes');
  });


  test("should call onChangeExcludeSpace when checkbox clicked", () => {
    const { onChangeExcludeSpace } = setup();
    fireEvent.click(screen.getByLabelText("Exclude Spaces"));
    expect(onChangeExcludeSpace).toHaveBeenCalled();
  });
  

});

