import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with AT postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-at" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.AT);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9334, validity false", () => {
    fireEvent.change(input, { target: { value: "93345128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9334, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9334" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9334, validity true", () => {
    fireEvent.change(input, { target: { value: "9334" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9341, validity false", () => {
    fireEvent.change(input, { target: { value: "93415128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9341, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9341" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9341, validity true", () => {
    fireEvent.change(input, { target: { value: "9341" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9345, validity false", () => {
    fireEvent.change(input, { target: { value: "93452128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9345, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9345" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9345, validity true", () => {
    fireEvent.change(input, { target: { value: "9345" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9346, validity false", () => {
    fireEvent.change(input, { target: { value: "93460128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9346, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9346" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9346, validity true", () => {
    fireEvent.change(input, { target: { value: "9346" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9360, validity false", () => {
    fireEvent.change(input, { target: { value: "93602128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9360, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9360" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9360, validity true", () => {
    fireEvent.change(input, { target: { value: "9360" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9361, validity false", () => {
    fireEvent.change(input, { target: { value: "93610128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9361, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9361" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9361, validity true", () => {
    fireEvent.change(input, { target: { value: "9361" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9363, validity false", () => {
    fireEvent.change(input, { target: { value: "93634128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9363, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9363" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9363, validity true", () => {
    fireEvent.change(input, { target: { value: "9363" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9371, validity false", () => {
    fireEvent.change(input, { target: { value: "93717128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9371, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9371" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9371, validity true", () => {
    fireEvent.change(input, { target: { value: "9371" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9374, validity false", () => {
    fireEvent.change(input, { target: { value: "93746128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9374, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9374" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9374, validity true", () => {
    fireEvent.change(input, { target: { value: "9374" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9556, validity false", () => {
    fireEvent.change(input, { target: { value: "95564128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9556, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9556" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9556, validity true", () => {
    fireEvent.change(input, { target: { value: "9556" } });
    expect(input.validity.valid).toBe(true);
  });
});
