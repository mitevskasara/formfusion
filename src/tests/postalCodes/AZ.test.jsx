import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with AZ postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-az" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.AZ);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0404, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 04048128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0404, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 0404" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0404, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 0404" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 0528, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 05288128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0528, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 0528" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0528, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 0528" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 0625, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 06258128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0625, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 0625" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0625, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 0625" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 1002, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 10020128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1002, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 1002" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1002, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 1002" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 1050, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 10505128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1050, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 1050" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1050, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 1050" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 1079, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 10790128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1079, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 1079" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1079, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 1079" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 1117, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 11172128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1117, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 1117" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1117, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 1117" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 1123, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 11236128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1123, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 1123" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 1123, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 1123" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 0824, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 08246128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0824, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 0824" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0824, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 0824" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AZ 0912, validity false", () => {
    fireEvent.change(input, { target: { value: "AZ 09124128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0912, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AZ 0912" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AZ 0912, validity true", () => {
    fireEvent.change(input, { target: { value: "AZ 0912" } });
    expect(input.validity.valid).toBe(true);
  });
});
