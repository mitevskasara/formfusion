import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with MD postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-md" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.MD);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5618, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-56181128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5618, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-5618" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5618, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-5618" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-5621, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-56212128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5621, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-5621" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5621, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-5621" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-5639, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-56395128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5639, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-5639" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5639, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-5639" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-5711, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-57115128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5711, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-5711" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5711, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-5711" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-5839, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-58394128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5839, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-5839" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5839, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-5839" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-5923, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-59237128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5923, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-5923" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-5923, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-5923" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-6217, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-62170128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-6217, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-6217" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-6217, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-6217" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-6223, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-62237128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-6223, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-6223" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-6223, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-6223" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-6301, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-63015128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-6301, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-6301" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-6301, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-6301" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MD-6316, validity false", () => {
    fireEvent.change(input, { target: { value: "MD-63161128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-6316, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MD-6316" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MD-6316, validity true", () => {
    fireEvent.change(input, { target: { value: "MD-6316" } });
    expect(input.validity.valid).toBe(true);
  });
});
