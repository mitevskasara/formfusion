import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with DZ postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-dz" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.DZ);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 24036, validity false", () => {
    fireEvent.change(input, { target: { value: "240367128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 24036, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 24036" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 24036, validity true", () => {
    fireEvent.change(input, { target: { value: "24036" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 24045, validity false", () => {
    fireEvent.change(input, { target: { value: "240454128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 24045, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 24045" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 24045, validity true", () => {
    fireEvent.change(input, { target: { value: "24045" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 25003, validity false", () => {
    fireEvent.change(input, { target: { value: "250035128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25003, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 25003" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25003, validity true", () => {
    fireEvent.change(input, { target: { value: "25003" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 25005, validity false", () => {
    fireEvent.change(input, { target: { value: "250054128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25005, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 25005" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25005, validity true", () => {
    fireEvent.change(input, { target: { value: "25005" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 25006, validity false", () => {
    fireEvent.change(input, { target: { value: "250067128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25006, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 25006" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25006, validity true", () => {
    fireEvent.change(input, { target: { value: "25006" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 25008, validity false", () => {
    fireEvent.change(input, { target: { value: "250081128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25008, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 25008" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25008, validity true", () => {
    fireEvent.change(input, { target: { value: "25008" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 25013, validity false", () => {
    fireEvent.change(input, { target: { value: "250138128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25013, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 25013" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25013, validity true", () => {
    fireEvent.change(input, { target: { value: "25013" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 25014, validity false", () => {
    fireEvent.change(input, { target: { value: "250142128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25014, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 25014" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25014, validity true", () => {
    fireEvent.change(input, { target: { value: "25014" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 25022, validity false", () => {
    fireEvent.change(input, { target: { value: "250222128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25022, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 25022" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25022, validity true", () => {
    fireEvent.change(input, { target: { value: "25022" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 25035, validity false", () => {
    fireEvent.change(input, { target: { value: "250357128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25035, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 25035" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 25035, validity true", () => {
    fireEvent.change(input, { target: { value: "25035" } });
    expect(input.validity.valid).toBe(true);
  });
});
