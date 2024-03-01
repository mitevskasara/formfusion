import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type credit-card-number-discover", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => { }}>
        <Input
          id="credit-card-number-discover"
          name="credit-card-number-discover"
          type="credit-card-number-discover"
          required={true}
        />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns["credit-card-number-discover"])).toBe(
      true,
    );
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(
      patterns["credit-card-number-discover"],
    );
  });

  test("Testing value: 6011981111111113, validity true", () => {
    fireEvent.change(input, { target: { value: "6011981111111113" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 6011111111111117, validity true", () => {
    fireEvent.change(input, { target: { value: "6011111111111117" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 6011000990139424, validity true", () => {
    fireEvent.change(input, { target: { value: "6011000990139424" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 201212345678, validity false", () => {
    fireEvent.change(input, { target: { value: "201212345678" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 401212345678, validity false", () => {
    fireEvent.change(input, { target: { value: "401212345678" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 3011123456, validity false", () => {
    fireEvent.change(input, { target: { value: "3011123456" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 3012ABCD5678, validity false", () => {
    fireEvent.change(input, { target: { value: "3012ABCD5678" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 301112345$678, validity false", () => {
    fireEvent.change(input, { target: { value: "301112345$678" } });
    expect(input.validity.valid).toBe(false);
  });
});
