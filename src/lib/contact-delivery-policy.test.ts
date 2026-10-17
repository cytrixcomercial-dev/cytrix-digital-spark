import { test } from "node:test";
import assert from "node:assert/strict";
import { shouldSendContactEmail, isContactDelivered } from "./contact-delivery-policy";

test("a failed database insert must not send email", () => {
  assert.equal(shouldSendContactEmail(false), false);
  assert.equal(shouldSendContactEmail(true), true);
});

test("database or CRM persistence is required for success", () => {
  assert.equal(isContactDelivered(false, false), false);
  assert.equal(isContactDelivered(true, false), true);
  assert.equal(isContactDelivered(false, true), true);
});