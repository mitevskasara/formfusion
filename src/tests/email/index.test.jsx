import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type email", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="email" name="email" type="email" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns.email)).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(patterns.email);
  });

  test("Testing value: test@example.com, validity true", () => {
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: user@mail.example.com, validity true", () => {
    fireEvent.change(input, { target: { value: "user@mail.example.com" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: user@example-domain.com, validity true", () => {
    fireEvent.change(input, { target: { value: "user@example-domain.com" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: user+tag@example.com, validity true", () => {
    fireEvent.change(input, { target: { value: "user+tag@example.com" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: user@123example.com, validity true", () => {
    fireEvent.change(input, { target: { value: "user@123example.com" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: user@example.co.uk, validity true", () => {
    fireEvent.change(input, { target: { value: "user@example.co.uk" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: user.name@example.com, validity true", () => {
    fireEvent.change(input, { target: { value: "user.name@example.com" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: testexample.com, validity false", () => {
    fireEvent.change(input, { target: { value: "testexample.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: user@, validity false", () => {
    fireEvent.change(input, { target: { value: "user@" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: @example.com, validity false", () => {
    fireEvent.change(input, { target: { value: "@example.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: user!name@example.com, validity false", () => {
    fireEvent.change(input, { target: { value: "user!name@example.com" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: user@example.com@domain, validity false", () => {
    fireEvent.change(input, { target: { value: "user@example.com@domain" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: .user@example.com, validity false", () => {
    fireEvent.change(input, { target: { value: ".user@example.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: user@.com, validity false", () => {
    fireEvent.change(input, { target: { value: "user@.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: user@example., validity false", () => {
    fireEvent.change(input, { target: { value: "user@example." } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: user..name@example.com, validity false", () => {
    fireEvent.change(input, { target: { value: "user..name@example.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: user@example#.com, validity false", () => {
    fireEvent.change(input, { target: { value: "user@example#.com" } });
    expect(input.validity.valid).toBe(false);
  });
});
