import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with FI postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-fi" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.FI);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 99999, validity false", () => {
    fireEvent.change(input, { target: { value: "999996128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 99999, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 99999" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 99999, validity true", () => {
    fireEvent.change(input, { target: { value: "99999" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 94400, validity false", () => {
    fireEvent.change(input, { target: { value: "944007128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 94400, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 94400" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 94400, validity true", () => {
    fireEvent.change(input, { target: { value: "94400" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 94450, validity false", () => {
    fireEvent.change(input, { target: { value: "944501128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 94450, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 94450" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 94450, validity true", () => {
    fireEvent.change(input, { target: { value: "94450" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 94500, validity false", () => {
    fireEvent.change(input, { target: { value: "945000128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 94500, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 94500" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 94500, validity true", () => {
    fireEvent.change(input, { target: { value: "94500" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 95760, validity false", () => {
    fireEvent.change(input, { target: { value: "957605128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 95760, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 95760" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 95760, validity true", () => {
    fireEvent.change(input, { target: { value: "95760" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 98350, validity false", () => {
    fireEvent.change(input, { target: { value: "983502128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 98350, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 98350" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 98350, validity true", () => {
    fireEvent.change(input, { target: { value: "98350" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97430, validity false", () => {
    fireEvent.change(input, { target: { value: "974303128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97430, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97430" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97430, validity true", () => {
    fireEvent.change(input, { target: { value: "97430" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 99131, validity false", () => {
    fireEvent.change(input, { target: { value: "991310128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 99131, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 99131" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 99131, validity true", () => {
    fireEvent.change(input, { target: { value: "99131" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 99420, validity false", () => {
    fireEvent.change(input, { target: { value: "994203128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 99420, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 99420" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 99420, validity true", () => {
    fireEvent.change(input, { target: { value: "99420" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97380, validity false", () => {
    fireEvent.change(input, { target: { value: "973800128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97380, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97380" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97380, validity true", () => {
    fireEvent.change(input, { target: { value: "97380" } });
    expect(input.validity.valid).toBe(true);
  });
});
