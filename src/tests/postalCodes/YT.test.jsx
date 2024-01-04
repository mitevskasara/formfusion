import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with YT postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-yt" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.YT);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97620, validity false", () => {
    fireEvent.change(input, { target: { value: "976207128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97620, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97620" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97620, validity true", () => {
    fireEvent.change(input, { target: { value: "97620" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97630, validity false", () => {
    fireEvent.change(input, { target: { value: "976305128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97630, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97630" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97630, validity true", () => {
    fireEvent.change(input, { target: { value: "97630" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97660, validity false", () => {
    fireEvent.change(input, { target: { value: "976605128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97660, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97660" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97660, validity true", () => {
    fireEvent.change(input, { target: { value: "97660" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97600, validity false", () => {
    fireEvent.change(input, { target: { value: "976001128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97600, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97600" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97600, validity true", () => {
    fireEvent.change(input, { target: { value: "97600" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97680, validity false", () => {
    fireEvent.change(input, { target: { value: "976801128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97680, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97680" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97680, validity true", () => {
    fireEvent.change(input, { target: { value: "97680" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97625, validity false", () => {
    fireEvent.change(input, { target: { value: "976250128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97625, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97625" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97625, validity true", () => {
    fireEvent.change(input, { target: { value: "97625" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97650, validity false", () => {
    fireEvent.change(input, { target: { value: "976507128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97650, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97650" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97650, validity true", () => {
    fireEvent.change(input, { target: { value: "97650" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97615, validity false", () => {
    fireEvent.change(input, { target: { value: "976155128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97615, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97615" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97615, validity true", () => {
    fireEvent.change(input, { target: { value: "97615" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97670, validity false", () => {
    fireEvent.change(input, { target: { value: "976706128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97670, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97670" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97670, validity true", () => {
    fireEvent.change(input, { target: { value: "97670" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 97605, validity false", () => {
    fireEvent.change(input, { target: { value: "976051128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97605, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 97605" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 97605, validity true", () => {
    fireEvent.change(input, { target: { value: "97605" } });
    expect(input.validity.valid).toBe(true);
  });
});
