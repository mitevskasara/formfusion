import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import postalCodes from "../../constants/postalCodes";

describe("Testing validity with PR postal codes", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-pr" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(postalCodes.PR);
  });

  test("Testing code: 6!26325HDgs, validity false", () => {
    fireEvent.change(input, { target: { value: "6!26325HDgs" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00986, validity false", () => {
    fireEvent.change(input, { target: { value: "009862128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00986, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00986" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00986, validity true", () => {
    fireEvent.change(input, { target: { value: "00986" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00785, validity false", () => {
    fireEvent.change(input, { target: { value: "007855128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00785, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00785" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00785, validity true", () => {
    fireEvent.change(input, { target: { value: "00785" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00674, validity false", () => {
    fireEvent.change(input, { target: { value: "006748128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00674, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00674" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00674, validity true", () => {
    fireEvent.change(input, { target: { value: "00674" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00612, validity false", () => {
    fireEvent.change(input, { target: { value: "006127128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00612, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00612" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00612, validity true", () => {
    fireEvent.change(input, { target: { value: "00612" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00742, validity false", () => {
    fireEvent.change(input, { target: { value: "007421128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00742, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00742" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00742, validity true", () => {
    fireEvent.change(input, { target: { value: "00742" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00784, validity false", () => {
    fireEvent.change(input, { target: { value: "007844128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00784, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00784" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00784, validity true", () => {
    fireEvent.change(input, { target: { value: "00784" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00907, validity false", () => {
    fireEvent.change(input, { target: { value: "009074128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00907, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00907" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00907, validity true", () => {
    fireEvent.change(input, { target: { value: "00907" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00611, validity false", () => {
    fireEvent.change(input, { target: { value: "006112128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00611, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00611" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00611, validity true", () => {
    fireEvent.change(input, { target: { value: "00611" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00737, validity false", () => {
    fireEvent.change(input, { target: { value: "007377128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00737, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00737" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00737, validity true", () => {
    fireEvent.change(input, { target: { value: "00737" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing code: 00692, validity false", () => {
    fireEvent.change(input, { target: { value: "006928128998" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00692, validity false", () => {
    fireEvent.change(input, { target: { value: "AQ 00692" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing code: 00692, validity true", () => {
    fireEvent.change(input, { target: { value: "00692" } });
    expect(input.validity.valid).toBe(true);
  });
});
