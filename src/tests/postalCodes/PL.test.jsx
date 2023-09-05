import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with PL postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-pl" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.PL);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 59-720, validity false", () => {
    fireEvent.change(input, { target: { value: "59-7204128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 59-720, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 59-720" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 59-720, validity true", () => {
    fireEvent.change(input, { target: { value: "59-720" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 58-241, validity false", () => {
    fireEvent.change(input, { target: { value: "58-2410128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 58-241, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 58-241" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 58-241, validity true", () => {
    fireEvent.change(input, { target: { value: "58-241" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 55-100, validity false", () => {
    fireEvent.change(input, { target: { value: "55-1000128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 55-100, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 55-100" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 55-100, validity true", () => {
    fireEvent.change(input, { target: { value: "55-100" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 55-120, validity false", () => {
    fireEvent.change(input, { target: { value: "55-1204128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 55-120, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 55-120" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 55-120, validity true", () => {
    fireEvent.change(input, { target: { value: "55-120" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 55-121, validity false", () => {
    fireEvent.change(input, { target: { value: "55-1210128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 55-121, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 55-121" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 55-121, validity true", () => {
    fireEvent.change(input, { target: { value: "55-121" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 55-140, validity false", () => {
    fireEvent.change(input, { target: { value: "55-1403128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 55-140, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 55-140" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 55-140, validity true", () => {
    fireEvent.change(input, { target: { value: "55-140" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 58-308, validity false", () => {
    fireEvent.change(input, { target: { value: "58-3081128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 58-308, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 58-308" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 58-308, validity true", () => {
    fireEvent.change(input, { target: { value: "58-308" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 58-330, validity false", () => {
    fireEvent.change(input, { target: { value: "58-3306128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 58-330, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 58-330" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 58-330, validity true", () => {
    fireEvent.change(input, { target: { value: "58-330" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 50-160, validity false", () => {
    fireEvent.change(input, { target: { value: "50-1608128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 50-160, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 50-160" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 50-160, validity true", () => {
    fireEvent.change(input, { target: { value: "50-160" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 56-100, validity false", () => {
    fireEvent.change(input, { target: { value: "56-1006128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 56-100, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 56-100" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 56-100, validity true", () => {
    fireEvent.change(input, { target: { value: "56-100" } });
    expect(input.validity.valid).toBe(true);
  });
});
