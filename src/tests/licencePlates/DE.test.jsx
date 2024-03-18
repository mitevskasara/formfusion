import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import licencePlates from "../../constants/data/licencePlates";

describe("Testing validity with DE licence plate", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="licence-plate-de" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(licencePlates.DE);
  });

  test("Valid license plate: D-X1", () => {
    fireEvent.change(input, { target: { value: "D-X1" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Valid license plate: DA-X1234", () => {
    fireEvent.change(input, { target: { value: "DA-X1234" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Valid license plate: DAA-WE1234", () => {
    fireEvent.change(input, { target: { value: "DAA-WE1234" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Valid license plate: MÜ A789", () => {
    fireEvent.change(input, { target: { value: "MÜ A789" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Valid license plate: FFM-X12", () => {
    fireEvent.change(input, { target: { value: "FFM-X12" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Valid license plate: WOB ZK456", () => {
    fireEvent.change(input, { target: { value: "WOB ZK456" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Invalid license plate: 1234-AB", () => {
    fireEvent.change(input, { target: { value: "1234-AB" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Invalid license plate: ABCD-1234", () => {
    fireEvent.change(input, { target: { value: "ABCD-1234" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Invalid license plate: HH-X12345", () => {
    fireEvent.change(input, { target: { value: "HH-X12345" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Invalid license plate: B 123456", () => {
    fireEvent.change(input, { target: { value: "B 123456" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Invalid license plate: ABC-123", () => {
    fireEvent.change(input, { target: { value: "ABC-123" } });
    expect(input.validity.valid).toBe(false);
  });
});
