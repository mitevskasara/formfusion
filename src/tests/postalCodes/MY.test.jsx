import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with MY postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-my" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.MY);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 79513, validity false", () => {
    fireEvent.change(input, { target: { value: "795132128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 79513, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 79513" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 79513, validity true", () => {
    fireEvent.change(input, { target: { value: "79513" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 79681, validity false", () => {
    fireEvent.change(input, { target: { value: "796810128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 79681, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 79681" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 79681, validity true", () => {
    fireEvent.change(input, { target: { value: "79681" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 80516, validity false", () => {
    fireEvent.change(input, { target: { value: "805160128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 80516, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 80516" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 80516, validity true", () => {
    fireEvent.change(input, { target: { value: "80516" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 80620, validity false", () => {
    fireEvent.change(input, { target: { value: "806202128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 80620, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 80620" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 80620, validity true", () => {
    fireEvent.change(input, { target: { value: "80620" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 81200, validity false", () => {
    fireEvent.change(input, { target: { value: "812000128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 81200, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 81200" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 81200, validity true", () => {
    fireEvent.change(input, { target: { value: "81200" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 05538, validity false", () => {
    fireEvent.change(input, { target: { value: "055382128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 05538, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 05538" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 05538, validity true", () => {
    fireEvent.change(input, { target: { value: "05538" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 05550, validity false", () => {
    fireEvent.change(input, { target: { value: "055503128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 05550, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 05550" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 05550, validity true", () => {
    fireEvent.change(input, { target: { value: "05550" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 05578, validity false", () => {
    fireEvent.change(input, { target: { value: "055785128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 05578, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 05578" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 05578, validity true", () => {
    fireEvent.change(input, { target: { value: "05578" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 06200, validity false", () => {
    fireEvent.change(input, { target: { value: "062007128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 06200, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 06200" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 06200, validity true", () => {
    fireEvent.change(input, { target: { value: "06200" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 06400, validity false", () => {
    fireEvent.change(input, { target: { value: "064005128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 06400, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 06400" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 06400, validity true", () => {
    fireEvent.change(input, { target: { value: "06400" } });
    expect(input.validity.valid).toBe(true);
  });
});
