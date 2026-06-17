# Setup

## Local run

This repository does not currently require a build step for the main static content.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/src/index.html`
- `http://localhost:8000/worlds/VAFT-Center3D/index.html`
- `http://localhost:8000/worlds/Revia/index.html`

### Option 2: Any static host

You can also use any simple static file server that serves the repository root.

## Netlify functions

`netlify.toml` points function traffic to `netlify/functions`.

If you need the guardian endpoints locally, review:
- `GUIDE.md`
- `config/guardian-config.json`
- `netlify/functions/`

## Notes

- There is no verified Node test suite in this repository yet.
- The project currently behaves like a static site with optional serverless endpoints.
