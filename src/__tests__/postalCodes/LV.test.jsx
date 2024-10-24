import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with LV postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-lv" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.LV);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4594, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-45943128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4594, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-4594" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4594, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-4594" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-3914, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-39142128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-3914, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-3914" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-3914, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-3914" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-3927, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-39270128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-3927, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-3927" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-3927, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-3927" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-3924, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-39246128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-3924, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-3924" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-3924, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-3924" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-4126, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-41262128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4126, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-4126" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4126, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-4126" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-4102, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-41028128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4102, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-4102" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4102, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-4102" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-3730, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-37305128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-3730, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-3730" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-3730, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-3730" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-4428, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-44285128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4428, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-4428" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-4428, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-4428" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-5222, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-52224128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-5222, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-5222" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-5222, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-5222" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LV-5230, validity false", () => {
    fireEvent.change(input, { target: { value: "LV-52306128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-5230, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LV-5230" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LV-5230, validity true", () => {
    fireEvent.change(input, { target: { value: "LV-5230" } });
    expect(input.validity.valid).toBe(true);
  });
});
