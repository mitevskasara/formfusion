import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with MP postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-mp" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.MP);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96950, validity false", () => {
    fireEvent.change(input, { target: { value: "969502128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96950, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96950" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96950, validity true", () => {
    fireEvent.change(input, { target: { value: "96950" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 96951, validity false", () => {
    fireEvent.change(input, { target: { value: "969513128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96951, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96951" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96951, validity true", () => {
    fireEvent.change(input, { target: { value: "96951" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 96952, validity false", () => {
    fireEvent.change(input, { target: { value: "969523128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96952, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96952" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96952, validity true", () => {
    fireEvent.change(input, { target: { value: "96952" } });
    expect(input.validity.valid).toBe(true);
  });
});
