import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with DE postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-de" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.DE);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21391, validity false", () => {
    fireEvent.change(input, { target: { value: "213911128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21391, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 21391" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21391, validity true", () => {
    fireEvent.change(input, { target: { value: "21391" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 21395, validity false", () => {
    fireEvent.change(input, { target: { value: "213951128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21395, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 21395" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21395, validity true", () => {
    fireEvent.change(input, { target: { value: "21395" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 21710, validity false", () => {
    fireEvent.change(input, { target: { value: "217101128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21710, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 21710" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21710, validity true", () => {
    fireEvent.change(input, { target: { value: "21710" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 21727, validity false", () => {
    fireEvent.change(input, { target: { value: "217271128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21727, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 21727" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21727, validity true", () => {
    fireEvent.change(input, { target: { value: "21727" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 21755, validity false", () => {
    fireEvent.change(input, { target: { value: "217551128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21755, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 21755" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21755, validity true", () => {
    fireEvent.change(input, { target: { value: "21755" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 26316, validity false", () => {
    fireEvent.change(input, { target: { value: "263160128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26316, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 26316" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26316, validity true", () => {
    fireEvent.change(input, { target: { value: "26316" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 26345, validity false", () => {
    fireEvent.change(input, { target: { value: "263456128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26345, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 26345" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26345, validity true", () => {
    fireEvent.change(input, { target: { value: "26345" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 26409, validity false", () => {
    fireEvent.change(input, { target: { value: "264091128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26409, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 26409" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26409, validity true", () => {
    fireEvent.change(input, { target: { value: "26409" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 26506, validity false", () => {
    fireEvent.change(input, { target: { value: "265068128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26506, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 26506" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26506, validity true", () => {
    fireEvent.change(input, { target: { value: "26506" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 26556, validity false", () => {
    fireEvent.change(input, { target: { value: "265565128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26556, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 26556" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 26556, validity true", () => {
    fireEvent.change(input, { target: { value: "26556" } });
    expect(input.validity.valid).toBe(true);
  });
});
