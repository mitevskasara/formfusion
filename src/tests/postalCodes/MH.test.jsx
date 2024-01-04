import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with MH postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-mh" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.MH);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96970, validity false", () => {
    fireEvent.change(input, { target: { value: "969700128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96970, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96970" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96970, validity true", () => {
    fireEvent.change(input, { target: { value: "96970" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 96960, validity false", () => {
    fireEvent.change(input, { target: { value: "969603128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96960, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96960" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96960, validity true", () => {
    fireEvent.change(input, { target: { value: "96960" } });
    expect(input.validity.valid).toBe(true);
  });
});
