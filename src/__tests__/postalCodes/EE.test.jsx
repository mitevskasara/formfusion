import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with EE postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-ee" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.EE);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 76923, validity false", () => {
    fireEvent.change(input, { target: { value: "769232128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 76923, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 76923" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 76923, validity true", () => {
    fireEvent.change(input, { target: { value: "76923" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75019, validity false", () => {
    fireEvent.change(input, { target: { value: "750190128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75019, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75019" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75019, validity true", () => {
    fireEvent.change(input, { target: { value: "75019" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 74702, validity false", () => {
    fireEvent.change(input, { target: { value: "747027128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 74702, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 74702" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 74702, validity true", () => {
    fireEvent.change(input, { target: { value: "74702" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 74709, validity false", () => {
    fireEvent.change(input, { target: { value: "747096128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 74709, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 74709" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 74709, validity true", () => {
    fireEvent.change(input, { target: { value: "74709" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 76008, validity false", () => {
    fireEvent.change(input, { target: { value: "760081128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 76008, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 76008" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 76008, validity true", () => {
    fireEvent.change(input, { target: { value: "76008" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75207, validity false", () => {
    fireEvent.change(input, { target: { value: "752076128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75207, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75207" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75207, validity true", () => {
    fireEvent.change(input, { target: { value: "75207" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75208, validity false", () => {
    fireEvent.change(input, { target: { value: "752084128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75208, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75208" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75208, validity true", () => {
    fireEvent.change(input, { target: { value: "75208" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75209, validity false", () => {
    fireEvent.change(input, { target: { value: "752097128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75209, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75209" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75209, validity true", () => {
    fireEvent.change(input, { target: { value: "75209" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75316, validity false", () => {
    fireEvent.change(input, { target: { value: "753161128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75316, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75316" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75316, validity true", () => {
    fireEvent.change(input, { target: { value: "75316" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 76310, validity false", () => {
    fireEvent.change(input, { target: { value: "763106128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 76310, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 76310" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 76310, validity true", () => {
    fireEvent.change(input, { target: { value: "76310" } });
    expect(input.validity.valid).toBe(true);
  });
});
