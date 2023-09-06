import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/patterns";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type uuid", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="uuid" name="uuid" type="uuid" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns["uuid"])).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(patterns["uuid"]);
  });

  test("Testing value: f47ac10b-58cc-4372-a567-0e02b2c3d479, validity true", () => {
    fireEvent.change(input, {
      target: { value: "f47ac10b-58cc-4372-a567-0e02b2c3d479" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 123e4567-e89b-12d3-a456-426655440000, validity true", () => {
    fireEvent.change(input, {
      target: { value: "123e4567-e89b-12d3-a456-426655440000" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 6ba7b810-9dad-11d1-80b4-00c04fd430c8, validity true", () => {
    fireEvent.change(input, {
      target: { value: "6ba7b810-9dad-11d1-80b4-00c04fd430c8" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 550e8400-e29b-41d4-a716-446655440000, validity true", () => {
    fireEvent.change(input, {
      target: { value: "550e8400-e29b-41d4-a716-446655440000" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: d2c7d4e2-8d47-4dcb-a996-6b1c01ffab87, validity true", () => {
    fireEvent.change(input, {
      target: { value: "d2c7d4e2-8d47-4dcb-a996-6b1c01ffab87" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: not-a-uuid, validity false", () => {
    fireEvent.change(input, { target: { value: "not-a-uuid" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 123e4567-e89b-12d3-a456-42665544000, validity false", () => {
    fireEvent.change(input, {
      target: { value: "123e4567-e89b-12d3-a456-42665544000" },
    });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: f47ac10b-58cc-4372-a567-0e02b2c3d4791, validity false", () => {
    fireEvent.change(input, {
      target: { value: "f47ac10b-58cc-4372-a567-0e02b2c3d4791" },
    });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: f47ac10b58cc4372a5670e02b2c3d479, validity false", () => {
    fireEvent.change(input, {
      target: { value: "f47ac10b58cc4372a5670e02b2c3d479" },
    });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: g47ac10b-58cc-4372-a567-0e02b2c3d479, validity false", () => {
    fireEvent.change(input, {
      target: { value: "g47ac10b-58cc-4372-a567-0e02b2c3d479" },
    });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: f47ac10b-58cc-4372-a567-0e02b2c3d47g, validity false", () => {
    fireEvent.change(input, {
      target: { value: "f47ac10b-58cc-4372-a567-0e02b2c3d47g" },
    });
    expect(input.validity.valid).toBe(false);
  });
});
