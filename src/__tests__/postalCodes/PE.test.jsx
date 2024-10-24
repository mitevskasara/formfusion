import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with PE postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-pe" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.PE);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13130, validity false", () => {
    fireEvent.change(input, { target: { value: "131306128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13130, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13130" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13130, validity true", () => {
    fireEvent.change(input, { target: { value: "13130" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13135, validity false", () => {
    fireEvent.change(input, { target: { value: "131357128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13135, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13135" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13135, validity true", () => {
    fireEvent.change(input, { target: { value: "13135" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13200, validity false", () => {
    fireEvent.change(input, { target: { value: "132000128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13200, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13200" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13200, validity true", () => {
    fireEvent.change(input, { target: { value: "13200" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13220, validity false", () => {
    fireEvent.change(input, { target: { value: "132205128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13220, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13220" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13220, validity true", () => {
    fireEvent.change(input, { target: { value: "13220" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13221, validity false", () => {
    fireEvent.change(input, { target: { value: "132217128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13221, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13221" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13221, validity true", () => {
    fireEvent.change(input, { target: { value: "13221" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13230, validity false", () => {
    fireEvent.change(input, { target: { value: "132302128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13230, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13230" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13230, validity true", () => {
    fireEvent.change(input, { target: { value: "13230" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13800, validity false", () => {
    fireEvent.change(input, { target: { value: "138005128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13800, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13800" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13800, validity true", () => {
    fireEvent.change(input, { target: { value: "13800" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13831, validity false", () => {
    fireEvent.change(input, { target: { value: "138313128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13831, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13831" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13831, validity true", () => {
    fireEvent.change(input, { target: { value: "13831" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13840, validity false", () => {
    fireEvent.change(input, { target: { value: "138401128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13840, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13840" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13840, validity true", () => {
    fireEvent.change(input, { target: { value: "13840" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 13500, validity false", () => {
    fireEvent.change(input, { target: { value: "135001128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13500, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 13500" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 13500, validity true", () => {
    fireEvent.change(input, { target: { value: "13500" } });
    expect(input.validity.valid).toBe(true);
  });
});
