import fs from "node:fs";

const file = process.argv[2];

if (!file) {
  console.error("Usage: node src/validateProofBundle.mjs <proof-bundle.json>");
  process.exit(1);
}

const proof = JSON.parse(fs.readFileSync(file, "utf8"));
const issues = [];

if (!proof.proofId) issues.push("proofId is required");
if (!proof.taskId) issues.push("taskId is required");
if (!proof.submitter) issues.push("submitter is required");
if (!proof.submittedAt) issues.push("submittedAt is required");
if (!Array.isArray(proof.evidence) || proof.evidence.length === 0) {
  issues.push("evidence must contain at least one item");
}

for (const [index, item] of (proof.evidence || []).entries()) {
  if (!item.type) issues.push(`evidence[${index}].type is required`);
  if (!item.uri) issues.push(`evidence[${index}].uri is required`);
}

if (issues.length) {
  console.error(JSON.stringify({ ok: false, issues }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, proofId: proof.proofId, evidenceCount: proof.evidence.length }, null, 2));

