import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with GF postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-gf" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.GF);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97357 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97357 CEDEX6128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97357 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97357 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97357 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97357 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97338 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97338 CEDEX2128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97338 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97338 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97338 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97338 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97399 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97399 CEDEX1128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97399 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97399 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97399 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97399 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97337 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97337 CEDEX6128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97337 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97337 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97337 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97337 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97326 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97326 CEDEX5128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97326 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97326 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97326 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97326 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97371 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97371 CEDEX1128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97371 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97371 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97371 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97371 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97320, validity false", () => {
    fireEvent.change(input, { target: { value: "973202128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97320, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97320" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97320, validity true", () => {
    fireEvent.change(input, { target: { value: "97320" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97376 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97376 CEDEX0128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97376 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97376 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97376 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97376 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97312, validity false", () => {
    fireEvent.change(input, { target: { value: "973128128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97312, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97312" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97312, validity true", () => {
    fireEvent.change(input, { target: { value: "97312" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97355, validity false", () => {
    fireEvent.change(input, { target: { value: "973551128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97355, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97355" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97355, validity true", () => {
    fireEvent.change(input, { target: { value: "97355" } });
    expect(input.validity.valid).toBe(true);
  });
});
