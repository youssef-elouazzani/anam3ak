const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentUpdated } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

exports.onRequestDoneGenerateToken = onDocumentUpdated("requests/{rid}", async (event) => {
  const before = event.data.before.data();
  const after = event.data.after.data();
  if (!before || !after) return;

  const becameDone = before.status !== "done" && after.status === "done";
  if (!becameDone) return;
  if (after.ratingToken) return;

  const token = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  await event.data.after.ref.update({
    ratingToken: token,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  logger.info("Generated rating token", { rid: event.params.rid });
});

// CMI scaffold فقط (خاص Merchant account)
exports.cmiInitiatePayment = onRequest({ region: "europe-west1" }, (req, res) => {
  cors(req, res, async () => {
    res.json({ ok: true, message: "CMI scaffold only. تحتاج credentials باش تخدم حقيقي.", redirectUrl: null });
  });
});
