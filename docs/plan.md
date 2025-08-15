# SoulPad MVP Improvement Plan

Date: 2025-08-14

This plan translates the MVP requirements into a concrete, phased improvement strategy for the current codebase. It extracts key goals and constraints from docs/requirements.md and reconciles them with the repository’s present stack (Gatsby 5 + TypeScript + styled-components + MUI). For each area, we outline the rationale and specific proposed changes.

---

## 1) Goals, Non‑Goals, and Success Criteria

- Core goals (from requirements):
  - Self-expression & aesthetic freedom via a customizable personal space (“SoulPad”).
  - Editor enabling text, images, basic shapes; free transform (move, resize, rotate, layer).
  - Apply themes/backgrounds; save canvas state and retrieve via unique URL.
  - Toggle visibility: private vs. public; public pages are static and fast.
- Explicit non-goals (for MVP):
  - No accounts/auth; identify pads by unique IDs.
  - No realtime collaboration; no AI bot; no asset marketplace; no advanced editing.
- Success criteria:
  - A user can create a SoulPad, save it, revisit it by URL, and if public, load a fast static view.
  - Image uploads reliably stored and served; editor interactions feel responsive.
  - Clear, minimal UI for visibility toggle and theme selection.

Rationale: Constraining scope ensures we ship a tangible, expressive demo quickly while laying a foundation for future expansion.

---

## 2) Architectural Direction and Stack Reconciliation

Requirements suggest Next.js (CSR editor + SSG/ISR for public). This repo uses Gatsby 5. We propose a two-path strategy:

- Path A: Implement MVP on Gatsby now (recommended for speed in this repo).
  - Gatsby supports CSR pages, SSG/DSG for static public pages, and SSR if needed. This satisfies MVP performance goals without migrating frameworks.
  - Minimize churn; leverage existing TypeScript, styled-components, MUI, Jest setup.
- Path B: Staged migration to Next.js (optional after MVP).
  - If we later need ISR semantics, edge runtimes, or closer integration with Vercel/Cloudflare SSR at scale, plan a gradual migration. Keep a thin API layer and framework-agnostic domain logic to ease the move.

Decision: Proceed with Path A for MVP, codifying patterns that keep a future migration feasible.

---

## 3) Editor Implementation (Fabric.js)

- Library: Fabric.js for canvas editing, object transforms, and JSON serialization.
- Components:
  - EditorPage (CSR-only): hosts the Fabric canvas; toolbars for text/image/shape; properties panel; theme/background selector; visibility toggle.
  - CanvasService: wrapper for initializing Fabric, adding objects, serializing/deserializing, managing z-order, snap options.
  - ImageUpload flow: pick image, upload to storage, then place on canvas via returned URL.
- Serialization:
  - Save: fabricCanvas.toJSON(["customPropsIfAny"]) → store in backend as JSON blob.
  - Load: fabricCanvas.loadFromJSON(json) on editor and on server render for public (if server-side rasterization is desired later; MVP can render via canvas in client or pre-render to a simple layout using object data).

Rationale: Fabric provides the needed free-form editing and a simple persistence model with minimal custom engine work.

---

## 4) Data Model and Persistence

- Entities:
  - SoulPad
    - id: string (ULID/UUID).
    - vanity_url: string | null (unique if set; used for /s/{vanity}).
    - is_public: boolean.
    - theme: string | JSON (theme key + overrides).
    - canvas_json: JSON (Fabric serialization).
    - created_at/updated_at: timestamps.
    - owner_user_id: null for MVP (reserved for future).
- Storage options (in increasing complexity):
  1. MVP-in-repo demo storage: local JSON via mock API while developing (dev-only). Not for production.
  2. Minimal API with file-backed or SQLite storage for local runs (Node serverless function or simple express under /api). Good for demos but limited.
  3. Target per requirements: PlanetScale (MySQL) for metadata + canvas JSON; Cloudflare Durable Object (via PartyKit) for state orchestration; R2 for assets.
- Proposed MVP persistence plan:
  - Implement an API-first interface within the app that can be backed by:
    - Dev adapter: local filesystem (only in development to unblock UI).
    - Prod adapter: PlanetScale via a lightweight serverless API (e.g., Netlify/Vercel functions) or a minimal Node backend. Keep storage interface identical to allow swapping.

Rationale: Decouple persistence behind interfaces to progress editor work early and switch to production DB without refactors.

---

## 5) API Design (API-First)

- Endpoints (versioned, REST for simplicity):
  - POST /api/v1/soulpads → {id}
  - GET /api/v1/soulpads/{id} → SoulPad
  - PATCH /api/v1/soulpads/{id} (partial: canvas_json, theme, is_public, vanity_url)
  - GET /api/v1/resolve/{vanity} → {id} (resolve vanity to id)
  - POST /api/v1/assets → upload image; returns {url}
- Validation and limits:
  - Cap canvas_json size for MVP; server-side validation for vanity_url uniqueness; sanitize filenames and enforce content-type for uploads.

Rationale: Clear, minimal endpoints enable the editor to evolve independently from storage.

---

## 6) Routing, Visibility, and Rendering

- Editor routes (CSR-only to avoid SSR window issues):
  - /edit/new → create a new pad (POST, then redirect to /edit/{id}).
  - /edit/{id} → load canvas_json and edit.
- Public routes:
  - /s/{vanity} (preferred) or /s/{id} fallback.
  - Public views should be statically generated for speed. With Gatsby:
    - Use createPages to generate public pages at build time from a source of published pads. For frequent updates, use Deferred Static Generation (DSG) or on-demand revalidation with a webhook-triggered build (Netlify/Vercel) as a pragmatic ISR analogue.
- Visibility toggle:
  - Editor exposes a switch for is_public. If set public, ensure page generation path is updated:
    - Option 1 (simple): Public view renders client-side and fetches JSON on load. Not fully static but fast and simpler to ship.
    - Option 2 (preferred): Use DSG to render on first request and cache at the CDN. Provide a revalidate webhook when pad changes.

Rationale: Gatsby can meet static-fast goals using DSG and build webhooks without a framework migration.

---

## 7) Asset Storage (Images)

- MVP dev: accept images and store in local static directory under /static/uploads (development only).
- Production: Cloudflare R2 bucket for uploads; return public, cacheable URLs.
- Upload flow:
  - Client selects file → POST to /api/v1/assets (or directly to R2 via signed URL) → get URL → insert image on canvas.
- Constraints:
  - File size/type validation; generate unique object keys; optionally create thumbnails.

Rationale: R2’s zero egress is cost-efficient for media-heavy content; signed uploads reduce server load.

---

## 8) Themes and Styling

- Use existing styled-components + MUI setup; add theme tokens leveraging src/styles/retro00/colors.ts.
- Theme model:
  - A few preset themes (id, name, background, palette, font stack).
  - Backgrounds may be CSS gradients, images, or canvas background color.
- Editor allows selecting a theme; store theme key in SoulPad; public view applies it consistently.

Rationale: Reuse current styling system; maintain consistency with repository conventions.

---

## 9) Security, Privacy, and Safety

- No authentication in MVP; protect private pads by obscurity (unguessable IDs) and server checks: GET public data only when is_public = true.
- CORS configured for our domains; HTTPS only.
- Uploads:
  - Accept only image MIME types; scan/strip EXIF if needed; set correct Content-Type and Content-Disposition.
- Data protection:
  - Avoid inline script injection from canvas_json by validating fields and never evaluating arbitrary code.

Rationale: Minimal yet practical safeguards aligned with MVP scope.

---

## 10) Performance and Scalability

- Editor performance:
  - Debounced auto-save; batch updates; avoid excessive re-renders by isolating Fabric canvas from React state.
- Public page performance:
  - Static or DSG pages; preload critical fonts; lazy-load non-critical assets.
  - Optimize uploaded images (resize/transform at upload time or via CDN variants if available).

Rationale: Maintain responsiveness and fast loads with simple, proven tactics.

---

## 11) Testing, Tooling, and DX

- Unit tests:
  - CanvasService serialization/deserialization and object transforms.
  - API client functions.
- Integration tests:
  - Editor flows: add text/image/shape, move/resize, save, reload.
- Visual checks:
  - Optional Storybook for isolated UI components (toolbars, dialogs). In Gatsby repo, Storybook can coexist; add minimal setup.
- CI basics:
  - Run typecheck, lint/format, unit tests on PRs.

Rationale: Ensure core editor flows remain stable while iterating quickly.

---

## 12) Implementation Plan (Phased)

Phase 0: Foundations
- Add domain types (SoulPad), API client stubs, and storage interface with a dev adapter.
- Install Fabric.js; create EditorPage scaffold (CSR only) and a PublicPadPage template.

Phase 1: Core Editing
- Toolbars for add text/image/shape; selection handles; move/resize/rotate/layer.
- Theme/background picker; apply to canvas.
- Save/Load using dev storage; implement /edit/new and /edit/{id}.

Phase 2: Public Viewing
- Public route /s/{id or vanity}; client-side render from JSON initially.
- Optional: add Gatsby DSG for public pads with a minimal data source (API or file list) and webhook to rebuild/refresh.

Phase 3: Assets
- Image upload endpoint (local dev); integrate into editor; display uploaded images via absolute URLs.
- Abstract storage to allow R2 in production (via signed URLs).

Phase 4: Visibility & Vanity URLs
- Toggle is_public; enforce access control on GET endpoints.
- Vanity reservation and resolution endpoint; UI to set vanity (conflict handling).

Phase 5: Hardening & Perf
- Debounced autosave; image optimization path; error handling; empty/loading states.
- Basic analytics/telemetry (optional) to track save/view events.

Phase 6: Optional Tooling
- Storybook for key UI pieces; increase test coverage on CanvasService and API client.

---

## 13) Risks and Mitigations

- Framework mismatch (Next.js vs Gatsby):
  - Mitigation: Implement with Gatsby now; design API/storage interfaces to stay framework-agnostic.
- Static page freshness:
  - Mitigation: Start with client-fetch public view; introduce DSG and webhook revalidation when infra is ready.
- Fabric.js complexity/perf:
  - Mitigation: Keep object types minimal; profile interactions; avoid excessive React state coupling.
- Storage/infra availability:
  - Mitigation: Ship with dev adapter; prepare PlanetScale/R2 adapters behind the same interface.

---

## 14) Concrete Changes to This Repository

- Dependencies:
  - Add fabric (fabric) and supporting types.
  - Optional: storybook tooling if adopted later.
- Source structure (proposed):
  - src/pages/edit/[id].tsx (or Gatsby equivalent using createPages + client-only route for /edit/*)
  - src/pages/edit/new.tsx (client-only)
  - src/pages/s/[slug].tsx (public view; initially client-fetch)
  - src/lib/canvas/CanvasService.ts
  - src/lib/api/soulpads.ts (client API)
  - src/lib/storage/interfaces.ts and src/lib/storage/devAdapter.ts
  - src/styles/themes.ts using existing retro00 colors
- Build/runtime:
  - Configure client-only routes in Gatsby for /edit/*.
  - If/when DSG is added: implement gatsby-node.ts createPages to build public pads and wire a webhook to trigger rebuilds on updates.
- Testing:
  - Add Jest tests for CanvasService JSON round-trip and API client.

Rationale: Minimal additions aligned with current stack and folder conventions, enabling fast progress.

---

## 15) Future: Migration Path to Next.js (Optional)

- Keep API endpoints externalized (serverless or small service) so UI can move frameworks without backend changes.
- Map routes 1:1 in Next.js: /edit/[id], /s/[slug].
- Replace Gatsby DSG with Next.js ISR and on-demand revalidation.
- Consider edge runtime for public pages if needed; evaluate PartyKit + Durable Objects for collaborative features in future releases.

---

## 16) Summary

Implement the MVP on the current Gatsby stack to minimize time-to-value while preserving a clean separation for a potential future Next.js migration. Use Fabric.js for the editor, a simple API-first data layer, and pragmatic static rendering via client-fetch initially—upgrading to DSG when infra is ready. This plan adheres to the MVP’s constraints, delivers the core expressive experience, and establishes an extensible foundation.
