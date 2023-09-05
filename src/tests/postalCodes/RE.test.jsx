import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with RE postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-re" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.RE);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97861 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97861 CEDEX4128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97861 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97861 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97861 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97861 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97421, validity false", () => {
    fireEvent.change(input, { target: { value: "974210128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97421, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97421" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97421, validity true", () => {
    fireEvent.change(input, { target: { value: "97421" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97449 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97449 CEDEX3128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97449 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97449 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97449 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97449 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97821 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97821 CEDEX4128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97821 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97821 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97821 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97821 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97863 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97863 CEDEX1128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97863 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97863 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97863 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97863 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97454 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97454 CEDEX5128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97454 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97454 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97454 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97454 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97458 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97458 CEDEX1128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97458 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97458 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97458 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97458 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97471 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97471 CEDEX8128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97471 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97471 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97471 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97471 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97446 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97446 CEDEX3128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97446 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97446 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97446 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97446 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97829 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "97829 CEDEX3128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97829 CEDEX, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97829 CEDEX" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97829 CEDEX, validity true", () => {
    fireEvent.change(input, { target: { value: "97829 CEDEX" } });
    expect(input.validity.valid).toBe(true);
  });
});
