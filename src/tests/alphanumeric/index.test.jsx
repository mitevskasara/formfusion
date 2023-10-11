import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type alphanumeric", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="alphanumeric"
          name="alphanumeric"
          type="alphanumeric"
          required={true}
        />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns.alphanumeric)).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(patterns.alphanumeric);
  });

  test("Testing value: Asas, validity true", () => {
    fireEvent.change(input, { target: { value: "Asas" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: ABC, validity true", () => {
    fireEvent.change(input, { target: { value: "ABC" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: asbHss1232, validity true", () => {
    fireEvent.change(input, { target: { value: "asbHss1232" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: abcvvc 1234, validity true", () => {
    fireEvent.change(input, { target: { value: "abcvvc 1234" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: AB123, validity true", () => {
    fireEvent.change(input, { target: { value: "AB123" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 12343, validity true", () => {
    fireEvent.change(input, { target: { value: "12343" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 13vffd!@, validity false", () => {
    fireEvent.change(input, { target: { value: "13vffd!@" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 12-8344, validity false", () => {
    fireEvent.change(input, { target: { value: "12-8344" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: Assc !@, validity false", () => {
    fireEvent.change(input, { target: { value: "Assc !@" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: ABCDE1_, validity false", () => {
    fireEvent.change(input, { target: { value: "ABCDE1_" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: !@#$, validity false", () => {
    fireEvent.change(input, { target: { value: "!@#$" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: ab-bcb-s ds, validity false", () => {
    fireEvent.change(input, { target: { value: "ab-bcb-s ds" } });
    expect(input.validity.valid).toBe(false);
  });
});
