import { test } from "node:test";
import assert from "node:assert/strict";
import { shouldSendContactEmail, isContactDelivered } from "./contact-delivery-policy";

test("a failed database insert must not send email", () => {
  assert.equal(shouldSendContactEmail(false), false);
  assert.equal(shouldSendContactEmail(true), true);
});

test("the form succeeds only when the leads insert succeeds", () => {
  assert.equal(isContactDelivered(false), false);
  assert.equal(isContactDelivered(true), true);
});
