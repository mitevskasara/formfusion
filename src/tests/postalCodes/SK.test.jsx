import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with SK postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-sk" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.SK);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 976 13, validity false", () => {
    fireEvent.change(input, { target: { value: "976 136128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 976 13, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 976 13" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 976 13, validity true", () => {
    fireEvent.change(input, { target: { value: "976 13" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 969 01, validity false", () => {
    fireEvent.change(input, { target: { value: "969 012128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 969 01, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 969 01" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 969 01, validity true", () => {
    fireEvent.change(input, { target: { value: "969 01" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 976 81, validity false", () => {
    fireEvent.change(input, { target: { value: "976 817128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 976 81, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 976 81" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 976 81, validity true", () => {
    fireEvent.change(input, { target: { value: "976 81" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 976 97, validity false", () => {
    fireEvent.change(input, { target: { value: "976 978128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 976 97, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 976 97" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 976 97, validity true", () => {
    fireEvent.change(input, { target: { value: "976 97" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 962 12, validity false", () => {
    fireEvent.change(input, { target: { value: "962 122128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 962 12, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 962 12" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 962 12, validity true", () => {
    fireEvent.change(input, { target: { value: "962 12" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 962 51, validity false", () => {
    fireEvent.change(input, { target: { value: "962 514128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 962 51, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 962 51" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 962 51, validity true", () => {
    fireEvent.change(input, { target: { value: "962 51" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 962 52, validity false", () => {
    fireEvent.change(input, { target: { value: "962 528128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 962 52, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 962 52" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 962 52, validity true", () => {
    fireEvent.change(input, { target: { value: "962 52" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 985 13, validity false", () => {
    fireEvent.change(input, { target: { value: "985 138128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 985 13, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 985 13" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 985 13, validity true", () => {
    fireEvent.change(input, { target: { value: "985 13" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 985 31, validity false", () => {
    fireEvent.change(input, { target: { value: "985 317128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 985 31, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 985 31" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 985 31, validity true", () => {
    fireEvent.change(input, { target: { value: "985 31" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 985 53, validity false", () => {
    fireEvent.change(input, { target: { value: "985 534128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 985 53, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 985 53" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 985 53, validity true", () => {
    fireEvent.change(input, { target: { value: "985 53" } });
    expect(input.validity.valid).toBe(true);
  });
});
