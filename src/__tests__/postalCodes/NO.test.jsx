import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with NO postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-no" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.NO);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6520, validity false", () => {
    fireEvent.change(input, { target: { value: "65205128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6520, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6520" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6520, validity true", () => {
    fireEvent.change(input, { target: { value: "6520" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6521, validity false", () => {
    fireEvent.change(input, { target: { value: "65211128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6521, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6521" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6521, validity true", () => {
    fireEvent.change(input, { target: { value: "6521" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6270, validity false", () => {
    fireEvent.change(input, { target: { value: "62703128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6270, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6270" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6270, validity true", () => {
    fireEvent.change(input, { target: { value: "6270" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6283, validity false", () => {
    fireEvent.change(input, { target: { value: "62832128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6283, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6283" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6283, validity true", () => {
    fireEvent.change(input, { target: { value: "6283" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6146, validity false", () => {
    fireEvent.change(input, { target: { value: "61464128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6146, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6146" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6146, validity true", () => {
    fireEvent.change(input, { target: { value: "6146" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6082, validity false", () => {
    fireEvent.change(input, { target: { value: "60827128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6082, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6082" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6082, validity true", () => {
    fireEvent.change(input, { target: { value: "6082" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6080, validity false", () => {
    fireEvent.change(input, { target: { value: "60803128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6080, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6080" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6080, validity true", () => {
    fireEvent.change(input, { target: { value: "6080" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6174, validity false", () => {
    fireEvent.change(input, { target: { value: "61741128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6174, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6174" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6174, validity true", () => {
    fireEvent.change(input, { target: { value: "6174" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6212, validity false", () => {
    fireEvent.change(input, { target: { value: "62120128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6212, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6212" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6212, validity true", () => {
    fireEvent.change(input, { target: { value: "6212" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 6230, validity false", () => {
    fireEvent.change(input, { target: { value: "62307128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6230, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 6230" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 6230, validity true", () => {
    fireEvent.change(input, { target: { value: "6230" } });
    expect(input.validity.valid).toBe(true);
  });
});
