# Guardian guide

This repository contains a browser guardian client and Netlify functions for challenge and submit flows.

Current files:
- `vaft.guardian.client.js`
- `config/guardian-config.json`
- `netlify/functions/`

Integration note:
- keep the guardian client loaded before features that depend on `window.VAFT.guardian`
- validate any external endpoint changes before deployment
