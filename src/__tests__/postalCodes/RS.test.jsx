import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with RS postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-rs" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.RS);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11215, validity false", () => {
    fireEvent.change(input, { target: { value: "112158128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11215, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 11215" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11215, validity true", () => {
    fireEvent.change(input, { target: { value: "11215" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 11235, validity false", () => {
    fireEvent.change(input, { target: { value: "112352128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11235, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 11235" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11235, validity true", () => {
    fireEvent.change(input, { target: { value: "11235" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 11328, validity false", () => {
    fireEvent.change(input, { target: { value: "113280128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11328, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 11328" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11328, validity true", () => {
    fireEvent.change(input, { target: { value: "11328" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 11427, validity false", () => {
    fireEvent.change(input, { target: { value: "114275128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11427, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 11427" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 11427, validity true", () => {
    fireEvent.change(input, { target: { value: "11427" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 14251, validity false", () => {
    fireEvent.change(input, { target: { value: "142518128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 14251, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 14251" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 14251, validity true", () => {
    fireEvent.change(input, { target: { value: "14251" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 15321, validity false", () => {
    fireEvent.change(input, { target: { value: "153211128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 15321, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 15321" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 15321, validity true", () => {
    fireEvent.change(input, { target: { value: "15321" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 17541, validity false", () => {
    fireEvent.change(input, { target: { value: "175415128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 17541, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 17541" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 17541, validity true", () => {
    fireEvent.change(input, { target: { value: "17541" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 17544, validity false", () => {
    fireEvent.change(input, { target: { value: "175445128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 17544, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 17544" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 17544, validity true", () => {
    fireEvent.change(input, { target: { value: "17544" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 18223, validity false", () => {
    fireEvent.change(input, { target: { value: "182238128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 18223, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 18223" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 18223, validity true", () => {
    fireEvent.change(input, { target: { value: "18223" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 18241, validity false", () => {
    fireEvent.change(input, { target: { value: "182410128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 18241, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 18241" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 18241, validity true", () => {
    fireEvent.change(input, { target: { value: "18241" } });
    expect(input.validity.valid).toBe(true);
  });
});
