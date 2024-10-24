import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with AD postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-ad" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.AD);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD200, validity false", () => {
    fireEvent.change(input, { target: { value: "AD2007128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD200, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AD200" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD200, validity true", () => {
    fireEvent.change(input, { target: { value: "AD200" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AD500, validity false", () => {
    fireEvent.change(input, { target: { value: "AD5004128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD500, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AD500" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD500, validity true", () => {
    fireEvent.change(input, { target: { value: "AD500" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AD300, validity false", () => {
    fireEvent.change(input, { target: { value: "AD3008128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD300, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AD300" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD300, validity true", () => {
    fireEvent.change(input, { target: { value: "AD300" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AD100, validity false", () => {
    fireEvent.change(input, { target: { value: "AD1005128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD100, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AD100" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD100, validity true", () => {
    fireEvent.change(input, { target: { value: "AD100" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AD400, validity false", () => {
    fireEvent.change(input, { target: { value: "AD4004128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD400, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AD400" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD400, validity true", () => {
    fireEvent.change(input, { target: { value: "AD400" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AD600, validity false", () => {
    fireEvent.change(input, { target: { value: "AD6003128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD600, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AD600" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD600, validity true", () => {
    fireEvent.change(input, { target: { value: "AD600" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AD700, validity false", () => {
    fireEvent.change(input, { target: { value: "AD7003128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD700, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AD700" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AD700, validity true", () => {
    fireEvent.change(input, { target: { value: "AD700" } });
    expect(input.validity.valid).toBe(true);
  });
});
