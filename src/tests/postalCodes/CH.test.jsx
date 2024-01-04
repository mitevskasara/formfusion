import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/data/postalCodes";

describe("Testing validity with CH postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-ch" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.CH);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1870, validity false", () => {
    fireEvent.change(input, { target: { value: "18702128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1870, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 1870" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 1870, validity true", () => {
    fireEvent.change(input, { target: { value: "1870" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 3942, validity false", () => {
    fireEvent.change(input, { target: { value: "39425128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 3942, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 3942" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 3942, validity true", () => {
    fireEvent.change(input, { target: { value: "3942" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 3922, validity false", () => {
    fireEvent.change(input, { target: { value: "39226128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 3922, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 3922" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 3922, validity true", () => {
    fireEvent.change(input, { target: { value: "3922" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 3923, validity false", () => {
    fireEvent.change(input, { target: { value: "39236128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 3923, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 3923" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 3923, validity true", () => {
    fireEvent.change(input, { target: { value: "3923" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 8914, validity false", () => {
    fireEvent.change(input, { target: { value: "89143128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8914, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 8914" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8914, validity true", () => {
    fireEvent.change(input, { target: { value: "8914" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 8468, validity false", () => {
    fireEvent.change(input, { target: { value: "84686128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8468, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 8468" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8468, validity true", () => {
    fireEvent.change(input, { target: { value: "8468" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 8106, validity false", () => {
    fireEvent.change(input, { target: { value: "81063128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8106, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 8106" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8106, validity true", () => {
    fireEvent.change(input, { target: { value: "8106" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 8637, validity false", () => {
    fireEvent.change(input, { target: { value: "86370128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8637, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 8637" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8637, validity true", () => {
    fireEvent.change(input, { target: { value: "8637" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 8810, validity false", () => {
    fireEvent.change(input, { target: { value: "88102128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8810, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 8810" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8810, validity true", () => {
    fireEvent.change(input, { target: { value: "8810" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 8322, validity false", () => {
    fireEvent.change(input, { target: { value: "83220128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8322, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 8322" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 8322, validity true", () => {
    fireEvent.change(input, { target: { value: "8322" } });
    expect(input.validity.valid).toBe(true);
  });
});
