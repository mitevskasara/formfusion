import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with TR postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-tr" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.TR);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67155, validity false", () => {
    fireEvent.change(input, { target: { value: "671551128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67155, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 67155" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67155, validity true", () => {
    fireEvent.change(input, { target: { value: "67155" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 67300, validity false", () => {
    fireEvent.change(input, { target: { value: "673002128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67300, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 67300" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67300, validity true", () => {
    fireEvent.change(input, { target: { value: "67300" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 67380, validity false", () => {
    fireEvent.change(input, { target: { value: "673803128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67380, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 67380" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67380, validity true", () => {
    fireEvent.change(input, { target: { value: "67380" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 67850, validity false", () => {
    fireEvent.change(input, { target: { value: "678500128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67850, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 67850" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67850, validity true", () => {
    fireEvent.change(input, { target: { value: "67850" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 67980, validity false", () => {
    fireEvent.change(input, { target: { value: "679800128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67980, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 67980" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 67980, validity true", () => {
    fireEvent.change(input, { target: { value: "67980" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75700, validity false", () => {
    fireEvent.change(input, { target: { value: "757006128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75700, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75700" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75700, validity true", () => {
    fireEvent.change(input, { target: { value: "75700" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75600, validity false", () => {
    fireEvent.change(input, { target: { value: "756005128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75600, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75600" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75600, validity true", () => {
    fireEvent.change(input, { target: { value: "75600" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75800, validity false", () => {
    fireEvent.change(input, { target: { value: "758007128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75800, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75800" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75800, validity true", () => {
    fireEvent.change(input, { target: { value: "75800" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75000, validity false", () => {
    fireEvent.change(input, { target: { value: "750000128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75000, validity true", () => {
    fireEvent.change(input, { target: { value: "75000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 75400, validity false", () => {
    fireEvent.change(input, { target: { value: "754002128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75400, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 75400" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 75400, validity true", () => {
    fireEvent.change(input, { target: { value: "75400" } });
    expect(input.validity.valid).toBe(true);
  });
});
