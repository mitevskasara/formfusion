import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with PK postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-pk" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.PK);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 82400, validity false", () => {
    fireEvent.change(input, { target: { value: "824007128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 82400, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 82400" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 82400, validity true", () => {
    fireEvent.change(input, { target: { value: "82400" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 84710, validity false", () => {
    fireEvent.change(input, { target: { value: "847102128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 84710, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 84710" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 84710, validity true", () => {
    fireEvent.change(input, { target: { value: "84710" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 84840, validity false", () => {
    fireEvent.change(input, { target: { value: "848402128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 84840, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 84840" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 84840, validity true", () => {
    fireEvent.change(input, { target: { value: "84840" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 87340, validity false", () => {
    fireEvent.change(input, { target: { value: "873408128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 87340, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 87340" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 87340, validity true", () => {
    fireEvent.change(input, { target: { value: "87340" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 94050, validity false", () => {
    fireEvent.change(input, { target: { value: "940506128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 94050, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 94050" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 94050, validity true", () => {
    fireEvent.change(input, { target: { value: "94050" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 17080, validity false", () => {
    fireEvent.change(input, { target: { value: "170808128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 17080, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 17080" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 17080, validity true", () => {
    fireEvent.change(input, { target: { value: "17080" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 18000, validity false", () => {
    fireEvent.change(input, { target: { value: "180002128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 18000, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 18000" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 18000, validity true", () => {
    fireEvent.change(input, { target: { value: "18000" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 18700, validity false", () => {
    fireEvent.change(input, { target: { value: "187001128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 18700, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 18700" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 18700, validity true", () => {
    fireEvent.change(input, { target: { value: "18700" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 19070, validity false", () => {
    fireEvent.change(input, { target: { value: "190706128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 19070, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 19070" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 19070, validity true", () => {
    fireEvent.change(input, { target: { value: "19070" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 21046, validity false", () => {
    fireEvent.change(input, { target: { value: "210467128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21046, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 21046" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 21046, validity true", () => {
    fireEvent.change(input, { target: { value: "21046" } });
    expect(input.validity.valid).toBe(true);
  });
});
