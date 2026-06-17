# Architecture

## Overview

Vivere atque FruiT is currently a static browser project with many self-contained HTML worlds and lightweight JavaScript modules.

The repository now uses a staged structure:

1. `src/`
   - repository-facing entrypoint
   - shared presentation for the organized layout
   - explicit `agents_v3.js` compatibility file
2. `components/`
   - family modules such as Hlavoun, Viri, Pikos, and Bicak
   - each component keeps its current browser implementation or prototype files
3. `worlds/`
   - organized copies of the main experiences
   - `VAFT-Center3D` is now self-contained with the scripts it references
   - `Revia` stays grouped as its own world
4. `docs/`
   - philosophy, component overview, and API notes
5. `assets/`
   - loose images and zip archives grouped away from the root

## Runtime model

- The project is served as static files.
- Browser JavaScript coordinates the worlds and agents.
- Netlify functions remain configured through `netlify.toml` for guardian endpoints.
- GitHub Pages and static hosting can still publish from the repository root.

## Current migration policy

- Keep existing legacy paths until their links are reviewed.
- Add organized copies before removing original workshop files.
- Prefer small, reversible moves over a destructive full rewrite.
