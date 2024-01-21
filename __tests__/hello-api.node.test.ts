// test the call to the API /api/hello
//   ✓ should return 200 (2 ms)

import http from "http";
import fetch from "node-fetch";


describe("hello-api", () => {
  it("should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/hello");
    expect(response.status).toBe(200);
  });
});
