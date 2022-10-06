/** Test: GET request to local server to get local data */
import { doGetMockRequest } from "../src/client/js/mockHandler";

describe("Tests a local API call", () => {
    test("Should return a valid object", async () => {
        const result = await doGetMockRequest();
        //console.log(result);
        expect(result[0].status).toBe("Prod ok");
    });  
});