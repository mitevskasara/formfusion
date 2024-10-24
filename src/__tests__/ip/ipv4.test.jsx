import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type ipv4", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="ipv4" name="ipv4" type="ipv4" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns["ipv4"])).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(patterns["ipv4"]);
  });

  test("Testing value: 192.168.0.1, validity true", () => {
    fireEvent.change(input, { target: { value: "192.168.0.1" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 10.0.0.1, validity true", () => {
    fireEvent.change(input, { target: { value: "10.0.0.1" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 172.16.0.1, validity true", () => {
    fireEvent.change(input, { target: { value: "172.16.0.1" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 255.255.255.255, validity true", () => {
    fireEvent.change(input, { target: { value: "255.255.255.255" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 0.0.0.0, validity true", () => {
    fireEvent.change(input, { target: { value: "0.0.0.0" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 256.0.0.1, validity false", () => {
    fireEvent.change(input, { target: { value: "256.0.0.1" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 192.168.0.256, validity false", () => {
    fireEvent.change(input, { target: { value: "192.168.0.256" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 192.168.01.1, validity false", () => {
    fireEvent.change(input, { target: { value: "192.168.01.1" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 2001:0db8:85a3:0000:0000:8a2e:0370:7334, validity false", () => {
    fireEvent.change(input, {
      target: { value: "2001:0db8:85a3:0000:0000:8a2e:0370:7334" },
    });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: invalid_ip, validity false", () => {
    fireEvent.change(input, { target: { value: "invalid_ip" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 192.168.0.1 , validity false", () => {
    fireEvent.change(input, { target: { value: "192.168.0.1 " } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value:  192.168.0.1, validity false", () => {
    fireEvent.change(input, { target: { value: " 192.168.0.1" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 192.168.0.1., validity false", () => {
    fireEvent.change(input, { target: { value: "192.168.0.1." } });
    expect(input.validity.valid).toBe(false);
  });
});
