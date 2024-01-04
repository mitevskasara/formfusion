import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with FM postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-fm" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.FM);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96942, validity false", () => {
    fireEvent.change(input, { target: { value: "969421128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96942, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96942" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96942, validity true", () => {
    fireEvent.change(input, { target: { value: "96942" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 96944, validity false", () => {
    fireEvent.change(input, { target: { value: "969440128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96944, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96944" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96944, validity true", () => {
    fireEvent.change(input, { target: { value: "96944" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 96941, validity false", () => {
    fireEvent.change(input, { target: { value: "969418128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96941, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96941" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96941, validity true", () => {
    fireEvent.change(input, { target: { value: "96941" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 96943, validity false", () => {
    fireEvent.change(input, { target: { value: "969437128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96943, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 96943" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 96943, validity true", () => {
    fireEvent.change(input, { target: { value: "96943" } });
    expect(input.validity.valid).toBe(true);
  });
});
