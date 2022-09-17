import { describe, expect, test, it } from "@jest/globals";
import request, {Response} from "supertest";
import {app} from "../src/app";

describe("app", () => {
  test("it has a PORT", () => {
    expect(app.get("port")).toBeTruthy();
  });

  test("root endpoint returns 200 OK", async () => {
    await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
  })
});
