import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type guid", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="guid" name="guid" type="guid" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns["guid"])).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(patterns["guid"]);
  });

  test("Testing value: 3f2504e0-4f89-11d3-9a0c-0305e82c3301, validity true", () => {
    fireEvent.change(input, {
      target: { value: "3f2504e0-4f89-11d3-9a0c-0305e82c3301" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 6B29FC40-CA47-1067-B31D-00DD010662DA, validity true", () => {
    fireEvent.change(input, {
      target: { value: "6B29FC40-CA47-1067-B31D-00DD010662DA" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 6b29fc40-ca47-1067-b31d-00dd010662da, validity true", () => {
    fireEvent.change(input, {
      target: { value: "6b29fc40-ca47-1067-b31d-00dd010662da" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: F47AC10B-58CC-4372-A567-0E02B2C3D479, validity true", () => {
    fireEvent.change(input, {
      target: { value: "F47AC10B-58CC-4372-A567-0E02B2C3D479" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: not-a-guid, validity false", () => {
    fireEvent.change(input, { target: { value: "not-a-guid" } });
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
