import { nlpHandler } from "../src/client/js/nlpTextHandler";

describe("Tests a external API call", () => {
    test("Should return a valid object", async () => {
        const input = "Life is good";
        const result = await nlpHandler(input);
        
        expect(result.sentence_list[0].segment_list[0].text).toBe(input);
    });
});
