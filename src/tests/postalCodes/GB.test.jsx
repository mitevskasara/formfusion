import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with GB postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-gb" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.GB);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: ZE2, validity false", () => {
    fireEvent.change(input, { target: { value: "ZE20128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: ZE2, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ ZE2" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: ZE2, validity true", () => {
    fireEvent.change(input, { target: { value: "ZE2" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: AB22, validity false", () => {
    fireEvent.change(input, { target: { value: "AB221128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AB22, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ AB22" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: AB22, validity true", () => {
    fireEvent.change(input, { target: { value: "AB22" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: DD2, validity false", () => {
    fireEvent.change(input, { target: { value: "DD24128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: DD2, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ DD2" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: DD2, validity true", () => {
    fireEvent.change(input, { target: { value: "DD2" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: EH13, validity false", () => {
    fireEvent.change(input, { target: { value: "EH135128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: EH13, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ EH13" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: EH13, validity true", () => {
    fireEvent.change(input, { target: { value: "EH13" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: EH15, validity false", () => {
    fireEvent.change(input, { target: { value: "EH158128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: EH15, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ EH15" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: EH15, validity true", () => {
    fireEvent.change(input, { target: { value: "EH15" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: EH6, validity false", () => {
    fireEvent.change(input, { target: { value: "EH63128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: EH6, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ EH6" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: EH6, validity true", () => {
    fireEvent.change(input, { target: { value: "EH6" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: FK14, validity false", () => {
    fireEvent.change(input, { target: { value: "FK141128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: FK14, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ FK14" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: FK14, validity true", () => {
    fireEvent.change(input, { target: { value: "FK14" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: FK15, validity false", () => {
    fireEvent.change(input, { target: { value: "FK155128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: FK15, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ FK15" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: FK15, validity true", () => {
    fireEvent.change(input, { target: { value: "FK15" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: G40, validity false", () => {
    fireEvent.change(input, { target: { value: "G407128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: G40, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ G40" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: G40, validity true", () => {
    fireEvent.change(input, { target: { value: "G40" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: G44, validity false", () => {
    fireEvent.change(input, { target: { value: "G442128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: G44, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ G44" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: G44, validity true", () => {
    fireEvent.change(input, { target: { value: "G44" } });
    expect(input.validity.valid).toBe(true);
  });
});
