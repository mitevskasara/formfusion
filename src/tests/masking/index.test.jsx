import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/types";
import isRegexPatternValid from "../utils/regexValidation";

describe("Testing input masking", () => {
  let input;
  const mask = "(##) ## ## ##";

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="masking-test"
          name="masking-test"
          type="numeric"
          mask={mask}
          required={true}
        />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing if mask exists as attribute", () => {
    expect(input.getAttribute("data-mask")).toBe(mask);
  });

  test(`Testing value: ${mask}, validity true`, () => {
    fireEvent.change(input, { target: { value: "12345678" } });
    console.log(input.dataset);
    expect(input.value).toBe("(12) 34 56 78");
  });
});
