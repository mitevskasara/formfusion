import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/patterns";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type url", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="url" name="url" type="url" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns.url)).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(patterns.url);
  });

  test("Testing value: www.example.com, validity false", () => {
    fireEvent.change(input, { target: { value: "www.example.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: regexr.com, validity false", () => {
    fireEvent.change(input, { target: { value: "regexr.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: https://www.example.com, validity true", () => {
    fireEvent.change(input, { target: { value: "https://www.example.com" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: http://subdomain.example.org, validity true", () => {
    fireEvent.change(input, {
      target: { value: "http://subdomain.example.org" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: https://www.test-domain.co.uk, validity true", () => {
    fireEvent.change(input, {
      target: { value: "https://www.test-domain.co.uk" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: http://.@@example.com, validity false", () => {
    fireEvent.change(input, { target: { value: "http://.example.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: htp://www.example.com, validity false", () => {
    fireEvent.change(input, { target: { value: "htp://www.example.com" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: https://wwwexample, validity false", () => {
    fireEvent.change(input, { target: { value: "https://www.example.c" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: ftp://user:password@, validity false", () => {
    fireEvent.change(input, { target: { value: "ftp://user:password@" } });
    expect(input.validity.valid).toBe(false);
  });
});
