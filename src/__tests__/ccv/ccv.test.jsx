import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type ccv", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="ccv" name="ccv" type="ccv" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns.ccv)).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(patterns.ccv);
  });

  test("Testing value: 123, validity true", () => {
    fireEvent.change(input, { target: { value: "123" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 987, validity true", () => {
    fireEvent.change(input, { target: { value: "987" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 000, validity true", () => {
    fireEvent.change(input, { target: { value: "000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 12, validity false", () => {
    fireEvent.change(input, { target: { value: "12" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 1234, validity false", () => {
    fireEvent.change(input, { target: { value: "1234" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: abc, validity false", () => {
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: !@#, validity false", () => {
    fireEvent.change(input, { target: { value: "!@#" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value:      , validity false", () => {
    fireEvent.change(input, { target: { value: "     " } });
    expect(input.validity.valid).toBe(false);
  });
});
