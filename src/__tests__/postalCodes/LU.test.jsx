import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with LU postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-lu" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.LU);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8472, validity false", () => {
    fireEvent.change(input, { target: { value: "L-84727128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8472, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8472" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8472, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8472" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-8286, validity false", () => {
    fireEvent.change(input, { target: { value: "L-82868128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8286, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8286" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8286, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8286" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-8135, validity false", () => {
    fireEvent.change(input, { target: { value: "L-81351128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8135, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8135" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8135, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8135" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-8161, validity false", () => {
    fireEvent.change(input, { target: { value: "L-81610128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8161, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8161" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8161, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8161" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-8215, validity false", () => {
    fireEvent.change(input, { target: { value: "L-82151128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8215, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8215" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8215, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8215" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-8309, validity false", () => {
    fireEvent.change(input, { target: { value: "L-83098128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8309, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8309" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8309, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8309" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-8363, validity false", () => {
    fireEvent.change(input, { target: { value: "L-83637128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8363, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8363" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8363, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8363" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-8364, validity false", () => {
    fireEvent.change(input, { target: { value: "L-83641128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8364, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8364" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8364, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8364" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-8423, validity false", () => {
    fireEvent.change(input, { target: { value: "L-84233128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8423, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-8423" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-8423, validity true", () => {
    fireEvent.change(input, { target: { value: "L-8423" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: L-4920, validity false", () => {
    fireEvent.change(input, { target: { value: "L-49205128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-4920, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ L-4920" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: L-4920, validity true", () => {
    fireEvent.change(input, { target: { value: "L-4920" } });
    expect(input.validity.valid).toBe(true);
  });
});
