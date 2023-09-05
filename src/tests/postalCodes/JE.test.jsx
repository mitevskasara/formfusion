import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with JE postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-je" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.JE);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: JE3, validity false", () => {
    fireEvent.change(input, { target: { value: "JE37128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: JE3, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ JE3" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: JE3, validity true", () => {
    fireEvent.change(input, { target: { value: "JE3" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: JE2, validity false", () => {
    fireEvent.change(input, { target: { value: "JE26128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: JE2, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ JE2" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: JE2, validity true", () => {
    fireEvent.change(input, { target: { value: "JE2" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: JE1, validity false", () => {
    fireEvent.change(input, { target: { value: "JE18128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: JE1, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ JE1" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: JE1, validity true", () => {
    fireEvent.change(input, { target: { value: "JE1" } });
    expect(input.validity.valid).toBe(true);
  });
});
