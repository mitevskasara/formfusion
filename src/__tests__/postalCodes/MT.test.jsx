import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with MT postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-mt" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.MT);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: ZBG, validity false", () => {
    fireEvent.change(input, { target: { value: "ZBG6128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: ZBG, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ ZBG" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: ZBG, validity true", () => {
    fireEvent.change(input, { target: { value: "ZBG" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MST, validity false", () => {
    fireEvent.change(input, { target: { value: "MST7128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MST, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MST" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MST, validity true", () => {
    fireEvent.change(input, { target: { value: "MST" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: SLM, validity false", () => {
    fireEvent.change(input, { target: { value: "SLM7128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: SLM, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ SLM" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: SLM, validity true", () => {
    fireEvent.change(input, { target: { value: "SLM" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: MRS, validity false", () => {
    fireEvent.change(input, { target: { value: "MRS3128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MRS, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ MRS" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: MRS, validity true", () => {
    fireEvent.change(input, { target: { value: "MRS" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: GSR, validity false", () => {
    fireEvent.change(input, { target: { value: "GSR5128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: GSR, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ GSR" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: GSR, validity true", () => {
    fireEvent.change(input, { target: { value: "GSR" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: GDJ, validity false", () => {
    fireEvent.change(input, { target: { value: "GDJ4128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: GDJ, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ GDJ" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: GDJ, validity true", () => {
    fireEvent.change(input, { target: { value: "GDJ" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: XJR, validity false", () => {
    fireEvent.change(input, { target: { value: "XJR2128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: XJR, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ XJR" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: XJR, validity true", () => {
    fireEvent.change(input, { target: { value: "XJR" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: LQA, validity false", () => {
    fireEvent.change(input, { target: { value: "LQA2128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LQA, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ LQA" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: LQA, validity true", () => {
    fireEvent.change(input, { target: { value: "LQA" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: BBG, validity false", () => {
    fireEvent.change(input, { target: { value: "BBG8128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: BBG, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ BBG" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: BBG, validity true", () => {
    fireEvent.change(input, { target: { value: "BBG" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: PTA, validity false", () => {
    fireEvent.change(input, { target: { value: "PTA0128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: PTA, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ PTA" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: PTA, validity true", () => {
    fireEvent.change(input, { target: { value: "PTA" } });
    expect(input.validity.valid).toBe(true);
  });
});
