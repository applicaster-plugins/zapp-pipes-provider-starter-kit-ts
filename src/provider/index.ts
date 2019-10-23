import { manifest } from "./manifest";
import { handler } from "./handler";
import { test } from "./test";

const provider = {
  name: "zapp-pipes-provider-ts",
  manifest,
  handler,
  test
};

export default provider;
