import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";
import { joinPatterns } from "../../utils/general";

describe("Testing validity of combined patterns", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="alphabetic"
          name="alphabetic"
          pattern={[patterns.alphanumeric, patterns.minLetters(2)]}
        />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns.alphabetic)).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(
      joinPatterns([patterns.alphanumeric, patterns.minLetters(2)]),
    );
  });

  test("Testing value: AbC 123 xYz!, validity true", () => {
    fireEvent.change(input, { target: { value: "AbC 123 xYz!" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: Hello World, validity true", () => {
    fireEvent.change(input, { target: { value: "Hello World" } });
    expect(input.validity.valid).toBe(true);
  });
});
