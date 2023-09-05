import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with JP postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-jp" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.JP);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0414, validity false", () => {
    fireEvent.change(input, { target: { value: "518-04144128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0414, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 518-0414" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0414, validity true", () => {
    fireEvent.change(input, { target: { value: "518-0414" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 518-0437, validity false", () => {
    fireEvent.change(input, { target: { value: "518-04374128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0437, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 518-0437" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0437, validity true", () => {
    fireEvent.change(input, { target: { value: "518-0437" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 518-0439, validity false", () => {
    fireEvent.change(input, { target: { value: "518-04395128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0439, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 518-0439" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0439, validity true", () => {
    fireEvent.change(input, { target: { value: "518-0439" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 518-0443, validity false", () => {
    fireEvent.change(input, { target: { value: "518-04433128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0443, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 518-0443" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0443, validity true", () => {
    fireEvent.change(input, { target: { value: "518-0443" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 518-0462, validity false", () => {
    fireEvent.change(input, { target: { value: "518-04628128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0462, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 518-0462" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0462, validity true", () => {
    fireEvent.change(input, { target: { value: "518-0462" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 518-0634, validity false", () => {
    fireEvent.change(input, { target: { value: "518-06343128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0634, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 518-0634" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0634, validity true", () => {
    fireEvent.change(input, { target: { value: "518-0634" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 518-0716, validity false", () => {
    fireEvent.change(input, { target: { value: "518-07161128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0716, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 518-0716" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0716, validity true", () => {
    fireEvent.change(input, { target: { value: "518-0716" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 518-0738, validity false", () => {
    fireEvent.change(input, { target: { value: "518-07383128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0738, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 518-0738" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 518-0738, validity true", () => {
    fireEvent.change(input, { target: { value: "518-0738" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 510-1234, validity false", () => {
    fireEvent.change(input, { target: { value: "510-12340128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 510-1234, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 510-1234" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 510-1234, validity true", () => {
    fireEvent.change(input, { target: { value: "510-1234" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 515-0000, validity false", () => {
    fireEvent.change(input, { target: { value: "515-00003128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 515-0000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 515-0000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 515-0000, validity true", () => {
    fireEvent.change(input, { target: { value: "515-0000" } });
    expect(input.validity.valid).toBe(true);
  });
});
