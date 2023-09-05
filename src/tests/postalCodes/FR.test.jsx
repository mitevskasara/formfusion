import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with FR postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-fr" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.FR);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75005, validity false", () => {
    fireEvent.change(input, { target: { value: "750051128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75005, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75005" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75005, validity true", () => {
    fireEvent.change(input, { target: { value: "75005" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75015, validity false", () => {
    fireEvent.change(input, { target: { value: "750158128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75015, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75015" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75015, validity true", () => {
    fireEvent.change(input, { target: { value: "75015" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75032 CEDEX 01, validity false", () => {
    fireEvent.change(input, { target: { value: "75032 CEDEX 012128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75032 CEDEX 01, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75032 CEDEX 01" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75032 CEDEX 01, validity true", () => {
    fireEvent.change(input, { target: { value: "75032 CEDEX 01" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75079 CEDEX 02, validity false", () => {
    fireEvent.change(input, { target: { value: "75079 CEDEX 023128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75079 CEDEX 02, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75079 CEDEX 02" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75079 CEDEX 02, validity true", () => {
    fireEvent.change(input, { target: { value: "75079 CEDEX 02" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75161 CEDEX 04, validity false", () => {
    fireEvent.change(input, { target: { value: "75161 CEDEX 046128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75161 CEDEX 04, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75161 CEDEX 04" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75161 CEDEX 04, validity true", () => {
    fireEvent.change(input, { target: { value: "75161 CEDEX 04" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75189 CEDEX 04, validity false", () => {
    fireEvent.change(input, { target: { value: "75189 CEDEX 046128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75189 CEDEX 04, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75189 CEDEX 04" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75189 CEDEX 04, validity true", () => {
    fireEvent.change(input, { target: { value: "75189 CEDEX 04" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75204 CEDEX 13, validity false", () => {
    fireEvent.change(input, { target: { value: "75204 CEDEX 137128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75204 CEDEX 13, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75204 CEDEX 13" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75204 CEDEX 13, validity true", () => {
    fireEvent.change(input, { target: { value: "75204 CEDEX 13" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75281 CEDEX 06, validity false", () => {
    fireEvent.change(input, { target: { value: "75281 CEDEX 067128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75281 CEDEX 06, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75281 CEDEX 06" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75281 CEDEX 06, validity true", () => {
    fireEvent.change(input, { target: { value: "75281 CEDEX 06" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75288 CEDEX 06, validity false", () => {
    fireEvent.change(input, { target: { value: "75288 CEDEX 062128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75288 CEDEX 06, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75288 CEDEX 06" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75288 CEDEX 06, validity true", () => {
    fireEvent.change(input, { target: { value: "75288 CEDEX 06" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75326 CEDEX 07, validity false", () => {
    fireEvent.change(input, { target: { value: "75326 CEDEX 074128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75326 CEDEX 07, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75326 CEDEX 07" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75326 CEDEX 07, validity true", () => {
    fireEvent.change(input, { target: { value: "75326 CEDEX 07" } });
    expect(input.validity.valid).toBe(true);
  });
});
