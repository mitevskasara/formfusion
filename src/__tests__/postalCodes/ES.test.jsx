import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with ES postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-es" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.ES);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32823, validity false", () => {
    fireEvent.change(input, { target: { value: "328231128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32823, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32823" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32823, validity true", () => {
    fireEvent.change(input, { target: { value: "32823" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 32839, validity false", () => {
    fireEvent.change(input, { target: { value: "328393128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32839, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32839" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32839, validity true", () => {
    fireEvent.change(input, { target: { value: "32839" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 32847, validity false", () => {
    fireEvent.change(input, { target: { value: "328472128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32847, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32847" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32847, validity true", () => {
    fireEvent.change(input, { target: { value: "32847" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 32879, validity false", () => {
    fireEvent.change(input, { target: { value: "328795128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32879, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32879" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32879, validity true", () => {
    fireEvent.change(input, { target: { value: "32879" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 32892, validity false", () => {
    fireEvent.change(input, { target: { value: "328921128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32892, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32892" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32892, validity true", () => {
    fireEvent.change(input, { target: { value: "32892" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 32897, validity false", () => {
    fireEvent.change(input, { target: { value: "328971128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32897, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32897" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32897, validity true", () => {
    fireEvent.change(input, { target: { value: "32897" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 32898, validity false", () => {
    fireEvent.change(input, { target: { value: "328987128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32898, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32898" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32898, validity true", () => {
    fireEvent.change(input, { target: { value: "32898" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 32950, validity false", () => {
    fireEvent.change(input, { target: { value: "329508128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32950, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32950" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32950, validity true", () => {
    fireEvent.change(input, { target: { value: "32950" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 32980, validity false", () => {
    fireEvent.change(input, { target: { value: "329800128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32980, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 32980" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 32980, validity true", () => {
    fireEvent.change(input, { target: { value: "32980" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 36120, validity false", () => {
    fireEvent.change(input, { target: { value: "361206128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36120, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 36120" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 36120, validity true", () => {
    fireEvent.change(input, { target: { value: "36120" } });
    expect(input.validity.valid).toBe(true);
  });
});
