import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with ZA postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-za" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.ZA);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0003, validity false", () => {
    fireEvent.change(input, { target: { value: "00034128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0003, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0003" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0003, validity true", () => {
    fireEvent.change(input, { target: { value: "0003" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0010, validity false", () => {
    fireEvent.change(input, { target: { value: "00102128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0010, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0010" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0010, validity true", () => {
    fireEvent.change(input, { target: { value: "0010" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0021, validity false", () => {
    fireEvent.change(input, { target: { value: "00210128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0021, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0021" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0021, validity true", () => {
    fireEvent.change(input, { target: { value: "0021" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0029, validity false", () => {
    fireEvent.change(input, { target: { value: "00294128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0029, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0029" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0029, validity true", () => {
    fireEvent.change(input, { target: { value: "0029" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0040, validity false", () => {
    fireEvent.change(input, { target: { value: "00403128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0040, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0040" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0040, validity true", () => {
    fireEvent.change(input, { target: { value: "0040" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0044, validity false", () => {
    fireEvent.change(input, { target: { value: "00445128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0044, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0044" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0044, validity true", () => {
    fireEvent.change(input, { target: { value: "0044" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0061, validity false", () => {
    fireEvent.change(input, { target: { value: "00616128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0061, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0061" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0061, validity true", () => {
    fireEvent.change(input, { target: { value: "0061" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0081, validity false", () => {
    fireEvent.change(input, { target: { value: "00815128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0081, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0081" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0081, validity true", () => {
    fireEvent.change(input, { target: { value: "0081" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0084, validity false", () => {
    fireEvent.change(input, { target: { value: "00840128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0084, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0084" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0084, validity true", () => {
    fireEvent.change(input, { target: { value: "0084" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 0101, validity false", () => {
    fireEvent.change(input, { target: { value: "01010128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0101, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 0101" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 0101, validity true", () => {
    fireEvent.change(input, { target: { value: "0101" } });
    expect(input.validity.valid).toBe(true);
  });
});
