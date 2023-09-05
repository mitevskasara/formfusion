import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with SJ postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-sj" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.SJ);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9176, validity false", () => {
    fireEvent.change(input, { target: { value: "91765128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9176, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9176" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9176, validity true", () => {
    fireEvent.change(input, { target: { value: "9176" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9173, validity false", () => {
    fireEvent.change(input, { target: { value: "91733128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9173, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9173" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9173, validity true", () => {
    fireEvent.change(input, { target: { value: "9173" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9178, validity false", () => {
    fireEvent.change(input, { target: { value: "91780128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9178, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9178" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9178, validity true", () => {
    fireEvent.change(input, { target: { value: "9178" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 8099, validity false", () => {
    fireEvent.change(input, { target: { value: "80993128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8099, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 8099" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8099, validity true", () => {
    fireEvent.change(input, { target: { value: "8099" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9171, validity false", () => {
    fireEvent.change(input, { target: { value: "91710128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9171, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9171" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9171, validity true", () => {
    fireEvent.change(input, { target: { value: "9171" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9174, validity false", () => {
    fireEvent.change(input, { target: { value: "91743128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9174, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9174" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9174, validity true", () => {
    fireEvent.change(input, { target: { value: "9174" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9175, validity false", () => {
    fireEvent.change(input, { target: { value: "91755128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9175, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9175" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9175, validity true", () => {
    fireEvent.change(input, { target: { value: "9175" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 9170, validity false", () => {
    fireEvent.change(input, { target: { value: "91702128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9170, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 9170" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 9170, validity true", () => {
    fireEvent.change(input, { target: { value: "9170" } });
    expect(input.validity.valid).toBe(true);
  });
});
