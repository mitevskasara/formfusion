import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with SM postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-sm" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.SM);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47893, validity false", () => {
    fireEvent.change(input, { target: { value: "478936128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47893, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47893" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47893, validity true", () => {
    fireEvent.change(input, { target: { value: "47893" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47890, validity false", () => {
    fireEvent.change(input, { target: { value: "478901128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47890, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47890" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47890, validity true", () => {
    fireEvent.change(input, { target: { value: "47890" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47898, validity false", () => {
    fireEvent.change(input, { target: { value: "478987128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47898, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47898" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47898, validity true", () => {
    fireEvent.change(input, { target: { value: "47898" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47899, validity false", () => {
    fireEvent.change(input, { target: { value: "478990128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47899, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47899" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47899, validity true", () => {
    fireEvent.change(input, { target: { value: "47899" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47891, validity false", () => {
    fireEvent.change(input, { target: { value: "478912128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47891, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47891" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47891, validity true", () => {
    fireEvent.change(input, { target: { value: "47891" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47894, validity false", () => {
    fireEvent.change(input, { target: { value: "478942128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47894, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47894" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47894, validity true", () => {
    fireEvent.change(input, { target: { value: "47894" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47896, validity false", () => {
    fireEvent.change(input, { target: { value: "478967128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47896, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47896" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47896, validity true", () => {
    fireEvent.change(input, { target: { value: "47896" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47897, validity false", () => {
    fireEvent.change(input, { target: { value: "478974128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47897, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47897" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47897, validity true", () => {
    fireEvent.change(input, { target: { value: "47897" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47892, validity false", () => {
    fireEvent.change(input, { target: { value: "478923128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47892, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47892" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47892, validity true", () => {
    fireEvent.change(input, { target: { value: "47892" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47895, validity false", () => {
    fireEvent.change(input, { target: { value: "478956128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47895, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47895" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47895, validity true", () => {
    fireEvent.change(input, { target: { value: "47895" } });
    expect(input.validity.valid).toBe(true);
  });
});
