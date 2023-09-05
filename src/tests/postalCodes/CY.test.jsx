import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with CY postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-cy" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.CY);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7741, validity false", () => {
    fireEvent.change(input, { target: { value: "77416128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7741, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 7741" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 7741, validity true", () => {
    fireEvent.change(input, { target: { value: "7741" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 1049, validity false", () => {
    fireEvent.change(input, { target: { value: "10494128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1049, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1049" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1049, validity true", () => {
    fireEvent.change(input, { target: { value: "1049" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 2032, validity false", () => {
    fireEvent.change(input, { target: { value: "20322128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2032, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 2032" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2032, validity true", () => {
    fireEvent.change(input, { target: { value: "2032" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 2043, validity false", () => {
    fireEvent.change(input, { target: { value: "20430128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2043, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 2043" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2043, validity true", () => {
    fireEvent.change(input, { target: { value: "2043" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 2066, validity false", () => {
    fireEvent.change(input, { target: { value: "20665128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2066, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 2066" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2066, validity true", () => {
    fireEvent.change(input, { target: { value: "2066" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 2236, validity false", () => {
    fireEvent.change(input, { target: { value: "22368128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2236, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 2236" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2236, validity true", () => {
    fireEvent.change(input, { target: { value: "2236" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 2404, validity false", () => {
    fireEvent.change(input, { target: { value: "24046128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2404, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 2404" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2404, validity true", () => {
    fireEvent.change(input, { target: { value: "2404" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 2530, validity false", () => {
    fireEvent.change(input, { target: { value: "25301128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2530, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 2530" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2530, validity true", () => {
    fireEvent.change(input, { target: { value: "2530" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 2563, validity false", () => {
    fireEvent.change(input, { target: { value: "25634128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2563, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 2563" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2563, validity true", () => {
    fireEvent.change(input, { target: { value: "2563" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 2568, validity false", () => {
    fireEvent.change(input, { target: { value: "25683128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2568, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 2568" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 2568, validity true", () => {
    fireEvent.change(input, { target: { value: "2568" } });
    expect(input.validity.valid).toBe(true);
  });
});
