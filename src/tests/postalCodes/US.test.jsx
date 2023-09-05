import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with US postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-us" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.US);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36273, validity false", () => {
    fireEvent.change(input, { target: { value: "362733128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36273, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 36273" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36273, validity true", () => {
    fireEvent.change(input, { target: { value: "36273" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 36442, validity false", () => {
    fireEvent.change(input, { target: { value: "364428128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36442, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 36442" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36442, validity true", () => {
    fireEvent.change(input, { target: { value: "36442" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 36455, validity false", () => {
    fireEvent.change(input, { target: { value: "364555128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36455, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 36455" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36455, validity true", () => {
    fireEvent.change(input, { target: { value: "36455" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 36483, validity false", () => {
    fireEvent.change(input, { target: { value: "364838128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36483, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 36483" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36483, validity true", () => {
    fireEvent.change(input, { target: { value: "36483" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 35077, validity false", () => {
    fireEvent.change(input, { target: { value: "350770128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 35077, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 35077" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 35077, validity true", () => {
    fireEvent.change(input, { target: { value: "35077" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 36352, validity false", () => {
    fireEvent.change(input, { target: { value: "363526128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36352, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 36352" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36352, validity true", () => {
    fireEvent.change(input, { target: { value: "36352" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 35474, validity false", () => {
    fireEvent.change(input, { target: { value: "354743128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 35474, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 35474" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 35474, validity true", () => {
    fireEvent.change(input, { target: { value: "35474" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 36744, validity false", () => {
    fireEvent.change(input, { target: { value: "367441128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36744, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 36744" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36744, validity true", () => {
    fireEvent.change(input, { target: { value: "36744" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 35771, validity false", () => {
    fireEvent.change(input, { target: { value: "357711128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 35771, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 35771" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 35771, validity true", () => {
    fireEvent.change(input, { target: { value: "35771" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 35958, validity false", () => {
    fireEvent.change(input, { target: { value: "359585128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 35958, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 35958" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 35958, validity true", () => {
    fireEvent.change(input, { target: { value: "35958" } });
    expect(input.validity.valid).toBe(true);
  });
});
