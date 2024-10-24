import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing validity of input type ipv6", () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="ipv6" name="ipv6" type="ipv6" required={true} />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Validating regex pattern", () => {
    expect(isRegexPatternValid(patterns["ipv6"])).toBe(true);
  });

  test("Testing correct pattern", () => {
    expect(input.getAttribute("pattern")).toBe(patterns["ipv6"]);
  });

  test("Testing value: 2001:0db8:85a3:0000:0000:8a2e:0370:7334, validity true", () => {
    fireEvent.change(input, {
      target: { value: "2001:0db8:85a3:0000:0000:8a2e:0370:7334" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 2001:db8:85a3::8a2e:370:7334, validity true", () => {
    fireEvent.change(input, {
      target: { value: "2001:db8:85a3::8a2e:370:7334" },
    });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 2001:db8::1, validity true", () => {
    fireEvent.change(input, { target: { value: "2001:db8::1" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: ::1, validity true", () => {
    fireEvent.change(input, { target: { value: "::1" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: ::, validity true", () => {
    fireEvent.change(input, { target: { value: "::" } });
    expect(input.validity.valid).toBe(true);
  });

  test("Testing value: 192.168.0.1, validity false", () => {
    fireEvent.change(input, { target: { value: "192.168.0.1" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 2001:0db8:85a3:0000:0000:8a2e:0370:7334:5678, validity false", () => {
    fireEvent.change(input, {
      target: { value: "2001:0db8:85a3:0000:0000:8a2e:0370:7334:5678" },
    });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: invalid_ip, validity false", () => {
    fireEvent.change(input, { target: { value: "invalid_ip" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: 2001:db8:::1, validity false", () => {
    fireEvent.change(input, { target: { value: "2001:db8:::1" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: :::, validity false", () => {
    fireEvent.change(input, { target: { value: ":::" } });
    expect(input.validity.valid).toBe(false);
  });

  test("Testing value: ::1 , validity false", () => {
    fireEvent.change(input, { target: { value: "::1 " } });
    expect(input.validity.valid).toBe(false);
  });
});
