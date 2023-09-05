import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with BR postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-br" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.BR);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48680-000, validity false", () => {
    fireEvent.change(input, { target: { value: "48680-0001128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48680-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 48680-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48680-000, validity true", () => {
    fireEvent.change(input, { target: { value: "48680-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 48760-000, validity false", () => {
    fireEvent.change(input, { target: { value: "48760-0004128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48760-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 48760-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48760-000, validity true", () => {
    fireEvent.change(input, { target: { value: "48760-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 48780-000, validity false", () => {
    fireEvent.change(input, { target: { value: "48780-0003128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48780-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 48780-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48780-000, validity true", () => {
    fireEvent.change(input, { target: { value: "48780-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47600-000, validity false", () => {
    fireEvent.change(input, { target: { value: "47600-0003128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47600-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47600-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47600-000, validity true", () => {
    fireEvent.change(input, { target: { value: "47600-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 48390-000, validity false", () => {
    fireEvent.change(input, { target: { value: "48390-0000128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48390-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 48390-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48390-000, validity true", () => {
    fireEvent.change(input, { target: { value: "48390-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 47950-000, validity false", () => {
    fireEvent.change(input, { target: { value: "47950-0002128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47950-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 47950-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 47950-000, validity true", () => {
    fireEvent.change(input, { target: { value: "47950-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 46310-000, validity false", () => {
    fireEvent.change(input, { target: { value: "46310-0006128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 46310-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 46310-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 46310-000, validity true", () => {
    fireEvent.change(input, { target: { value: "46310-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 45215-000, validity false", () => {
    fireEvent.change(input, { target: { value: "45215-0006128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 45215-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 45215-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 45215-000, validity true", () => {
    fireEvent.change(input, { target: { value: "45215-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 44575-000, validity false", () => {
    fireEvent.change(input, { target: { value: "44575-0008128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 44575-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 44575-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 44575-000, validity true", () => {
    fireEvent.change(input, { target: { value: "44575-000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 48400-000, validity false", () => {
    fireEvent.change(input, { target: { value: "48400-0003128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48400-000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 48400-000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 48400-000, validity true", () => {
    fireEvent.change(input, { target: { value: "48400-000" } });
    expect(input.validity.valid).toBe(true);
  });
});
