import { describe, expect, test, beforeEach } from "@jest/globals";
import axios, { Axios } from "axios";
import { IceFireAPI } from "../../lib/iceFireAPI";

describe("IceFireAPI", () => {
  const client: Axios = axios.create({
    baseURL: "https://www.anapioficeandfire.com/api",
    timeout: 5000,
  });
  let api: IceFireAPI;

  beforeEach(() => {
    api = new IceFireAPI(client);
  });

  test("it has a client", () => {
    expect(api.client).toBeTruthy();
  });

  describe("#getBooks", () => {
    test("does not return undefined", async () => {
      await expect(api.getBooks()).resolves.toBeDefined();
    });

    test("given name param returns a correct book", async () => {
      const name = "The Sworn Sword";
      let theSwornSword = await api.getBooks({ name });
      expect(theSwornSword.data).toBeDefined();
      expect(theSwornSword.data[0].name).toEqual(name);
    });

    test.only("given from and to params returns a correct book", async () => {
      const [fromReleaseDate, toReleaseDate] = [
        "1998-08-01T00:00:00",
        "2000-08-01T00:00:00",
      ];
      let lateNinetiesBook = await api.getBooks({
        fromReleaseDate,
        toReleaseDate,
      });
      expect(lateNinetiesBook.data).toBeDefined();
      const isLateNineties: boolean =
        lateNinetiesBook.data[0].released > fromReleaseDate &&
        lateNinetiesBook.data[0].released < toReleaseDate;
      expect(isLateNineties).toBeTruthy();
    });
  });
});
