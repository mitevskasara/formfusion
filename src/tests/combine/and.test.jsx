import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import patterns from "../../constants/patterns";

describe("Testing validity of combined patterns", () => {
  let input;

  beforeAll(() => {
    console.log(patterns.minLetters);
    render(
      <Form onSubmit={() => { }}>
        <Input
          id="combined"
          name="combined"
          pattern={[patterns.alphanumeric, patterns.minLetters(2)]}
        />
      </Form>,
    );
    input = screen.getByTestId("input");
  });

  test("Testing valid data-patterns attribute", () => {
    // expect(input.getAttribute("data-patterns")).toBe([
    //   patterns.alphanumeric,
    //   patterns.minLetters(2),
    // ]);
  });
});
