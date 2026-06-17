# Vivere atque FruiT

Vivere atque FruiT is a growing static web project about worldbuilding, AI and human collaboration, and ethical digital experimentation.

This repository now keeps a cleaner project structure while preserving the original workshop files.

## Project structure

```text
.
|-- README.md
|-- ARCHITECTURE.md
|-- SETUP.md
|-- CONTRIBUTING.md
|-- LICENSE
|-- src/
|   |-- index.html
|   |-- agents_v3.js
|   `-- styles/
|-- components/
|   |-- Hlavoun/
|   |-- Viri/
|   |-- Pikos/
|   `-- Bicak/
|-- worlds/
|   |-- Revia/
|   |-- VAFT-Center3D/
|   `-- others/
|-- docs/
|   |-- PHILOSOPHY.md
|   |-- COMPONENTS.md
|   `-- API.md
`-- assets/
```

## What is included

- `src/` contains the new repository hub and the explicit `agents_v3.js` file requested for the organized layout.
- `components/` groups the core family modules and their current browser files.
- `worlds/` contains organized copies of the main playable worlds.
- `docs/` contains plain, professional project documentation.
- `assets/` groups loose media and archive files from the repository root.

## Main entrypoints

- Source hub: `src/index.html`
- Main world: `worlds/VAFT-Center3D/index.html`
- Revia world: `worlds/Revia/index.html`

## Legacy compatibility

The original root files and folders remain available so current links are not removed during this cleanup. The new structure is a staged migration path for future work.

## Language and formatting rules

- Documentation in this repository should stay in plain Czech or English.
- Avoid decorative unicode, Cyrillic text, and emoji in docs.
- Keep examples and diagrams ASCII friendly.
