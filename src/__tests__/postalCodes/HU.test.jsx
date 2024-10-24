import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with HU postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-hu" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.HU);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7715, validity false", () => {
    fireEvent.change(input, { target: { value: "77154128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7715, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7715" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7715, validity true", () => {
    fireEvent.change(input, { target: { value: "7715" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7735, validity false", () => {
    fireEvent.change(input, { target: { value: "77350128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7735, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7735" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7735, validity true", () => {
    fireEvent.change(input, { target: { value: "7735" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7775, validity false", () => {
    fireEvent.change(input, { target: { value: "77751128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7775, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7775" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7775, validity true", () => {
    fireEvent.change(input, { target: { value: "7775" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7814, validity false", () => {
    fireEvent.change(input, { target: { value: "78142128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7814, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7814" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7814, validity true", () => {
    fireEvent.change(input, { target: { value: "7814" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7824, validity false", () => {
    fireEvent.change(input, { target: { value: "78243128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7824, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7824" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7824, validity true", () => {
    fireEvent.change(input, { target: { value: "7824" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7833, validity false", () => {
    fireEvent.change(input, { target: { value: "78334128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7833, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7833" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7833, validity true", () => {
    fireEvent.change(input, { target: { value: "7833" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7843, validity false", () => {
    fireEvent.change(input, { target: { value: "78436128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7843, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7843" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7843, validity true", () => {
    fireEvent.change(input, { target: { value: "7843" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7951, validity false", () => {
    fireEvent.change(input, { target: { value: "79512128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7951, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7951" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7951, validity true", () => {
    fireEvent.change(input, { target: { value: "7951" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7957, validity false", () => {
    fireEvent.change(input, { target: { value: "79572128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7957, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7957" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7957, validity true", () => {
    fireEvent.change(input, { target: { value: "7957" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 7973, validity false", () => {
    fireEvent.change(input, { target: { value: "79732128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7973, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7973" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7973, validity true", () => {
    fireEvent.change(input, { target: { value: "7973" } });
    expect(input.validity.valid).toBe(true);
  });
});
