import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with DK postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-dk" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.DK);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1050, validity false", () => {
    fireEvent.change(input, { target: { value: "10501128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1050, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1050" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1050, validity true", () => {
    fireEvent.change(input, { target: { value: "1050" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1123, validity false", () => {
    fireEvent.change(input, { target: { value: "11237128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1123, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1123" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1123, validity true", () => {
    fireEvent.change(input, { target: { value: "1123" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1259, validity false", () => {
    fireEvent.change(input, { target: { value: "12595128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1259, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1259" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1259, validity true", () => {
    fireEvent.change(input, { target: { value: "1259" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1319, validity false", () => {
    fireEvent.change(input, { target: { value: "13194128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1319, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1319" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1319, validity true", () => {
    fireEvent.change(input, { target: { value: "1319" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1327, validity false", () => {
    fireEvent.change(input, { target: { value: "13276128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1327, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1327" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1327, validity true", () => {
    fireEvent.change(input, { target: { value: "1327" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1632, validity false", () => {
    fireEvent.change(input, { target: { value: "16326128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1632, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1632" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1632, validity true", () => {
    fireEvent.change(input, { target: { value: "1632" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1722, validity false", () => {
    fireEvent.change(input, { target: { value: "17227128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1722, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1722" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1722, validity true", () => {
    fireEvent.change(input, { target: { value: "1722" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1752, validity false", () => {
    fireEvent.change(input, { target: { value: "17520128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1752, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1752" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1752, validity true", () => {
    fireEvent.change(input, { target: { value: "1752" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1757, validity false", () => {
    fireEvent.change(input, { target: { value: "17577128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1757, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1757" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1757, validity true", () => {
    fireEvent.change(input, { target: { value: "1757" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1868, validity false", () => {
    fireEvent.change(input, { target: { value: "18685128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1868, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1868" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1868, validity true", () => {
    fireEvent.change(input, { target: { value: "1868" } });
    expect(input.validity.valid).toBe(true);
  });
});
