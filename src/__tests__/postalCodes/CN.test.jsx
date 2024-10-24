import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with CN postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-cn" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.CN);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 510000, validity false", () => {
    fireEvent.change(input, { target: { value: "5100002128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 510000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 510000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 510000, validity true", () => {
    fireEvent.change(input, { target: { value: "510000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 226000, validity false", () => {
    fireEvent.change(input, { target: { value: "2260005128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 226000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 226000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 226000, validity true", () => {
    fireEvent.change(input, { target: { value: "226000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 215400, validity false", () => {
    fireEvent.change(input, { target: { value: "2154004128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 215400, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 215400" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 215400, validity true", () => {
    fireEvent.change(input, { target: { value: "215400" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 646000, validity false", () => {
    fireEvent.change(input, { target: { value: "6460006128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 646000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 646000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 646000, validity true", () => {
    fireEvent.change(input, { target: { value: "646000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 215600, validity false", () => {
    fireEvent.change(input, { target: { value: "2156004128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 215600, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 215600" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 215600, validity true", () => {
    fireEvent.change(input, { target: { value: "215600" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 232000, validity false", () => {
    fireEvent.change(input, { target: { value: "2320007128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 232000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 232000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 232000, validity true", () => {
    fireEvent.change(input, { target: { value: "232000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 571700, validity false", () => {
    fireEvent.change(input, { target: { value: "5717006128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 571700, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 571700" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 571700, validity true", () => {
    fireEvent.change(input, { target: { value: "571700" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 224000, validity false", () => {
    fireEvent.change(input, { target: { value: "2240007128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 224000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 224000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 224000, validity true", () => {
    fireEvent.change(input, { target: { value: "224000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 012100, validity false", () => {
    fireEvent.change(input, { target: { value: "0121001128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 012100, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 012100" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 012100, validity true", () => {
    fireEvent.change(input, { target: { value: "012100" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 362100, validity false", () => {
    fireEvent.change(input, { target: { value: "3621000128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 362100, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 362100" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 362100, validity true", () => {
    fireEvent.change(input, { target: { value: "362100" } });
    expect(input.validity.valid).toBe(true);
  });
});
