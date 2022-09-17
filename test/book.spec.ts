import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import { app } from "../src/app";

describe("books controller", () => {
  test("root endpoint returns 200 OK", async () => {
    await request(app).get("/books").set("Accept", "application/json").expect(200);
  });
});
