import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Landing_page/Home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("hero");

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute(
      "src",
      "/media/images/homeHero.png"
    );
  });

  test("renders sign up button", () => {
    render(<Hero />);

    const signButton = screen.getByRole("button", {
      name: /singn up/i,
    });

    expect(signButton).toBeInTheDocument();
    expect(signButton).toHaveClass("btn-primary");
  });
});