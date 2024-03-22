import Contact from "../Contact"
import { screen , render } from "@testing-library/react";
import "@testing-library/jest-dom";

    test("This should load contact us page" , () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    })

    test("this should check if there is a submit button" , () => {
        render(<Contact />); 

        const button = screen.getByRole("button")

        expect(button).toBe;


    })