import { checkForName } from "../src/client/js/nameChecker";

describe("checkForName, it should verify a name", () => {
    test("It should bring an welcome message", () => {
        const input = "Picard"
    
        //
        const output = "Enterprise: Welcome, Captain!";

        expect(checkForName(input)).toBe(output);
    });
});
