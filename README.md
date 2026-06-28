# AI2Human Proof Kit

Structured proof schemas, validation helpers, reviewer outputs, and proof hash utilities for AI2Human Network.

## Why This Exists

AI2Human is not just a task surface. The durable primitive is structured proof.

Humans execute or verify work, but the output must be machine-readable:

```text
evidence -> proof bundle -> verification result -> settlement event -> reputation event
```

## Contents

```text
schemas/proof-bundle.schema.json
schemas/verification-result.schema.json
examples/sample-proof-bundle.json
examples/sample-verification-result.json
src/validateProofBundle.mjs
```

## Usage

```bash
node src/validateProofBundle.mjs examples/sample-proof-bundle.json
```

## Status

Seed toolkit with schemas and examples. Future versions should add hash canonicalization and reviewer adapters.

## Links

- Website: https://ai2human.io
- X: https://x.com/ai2humannetwork

