# SoulPad Beta — Improvement Task Checklist

Note: Each task is atomic and actionable. The sequence is ordered to reduce churn and risk: establish foundations, stabilize DX and tests, then address architecture, performance, and UX.

1. [ ] Node and tooling baseline
   - [ ] Pin Node 22 LTS in `.nvmrc` and document in README (Gatsby 5 primary target).
   - [ ] Add `engines.node` in `package.json` to `>=22 <24` (or align with team decision) and document Node 22 caveats.
   - [ ] Add `.editorconfig` for consistent editor defaults (indent, eol, charset).

2. [ ] Linting and formatting
   - [ ] Add ESLint with TypeScript, React, JSX-a11y, Jest, and styled-components plugins.
   - [ ] Create a base `.eslintrc` with rules appropriate for Gatsby SSR/CSR (no window access at module scope).
   - [ ] Add `npm run lint` and update `npm run fix` to run `lint --fix` before tests.
   - [ ] Ensure Prettier config exists (e.g., `.prettierrc`) and aligns with ESLint via `eslint-config-prettier`.

3. [ ] Test harness stabilization (Jest + RTL)
   - [ ] Create `__mocks__/file-mock.js` to satisfy asset imports (mapped in jest.config.js).
   - [ ] Add `__mocks__/gatsby.js` to mock `Link`, `graphql`, and static queries for React tests.
   - [ ] Verify/adjust `transformIgnorePatterns` for any untranspiled ESM deps beyond `gatsby*`.
   - [ ] Add a basic smoke test for a page using `BaseLayout` to verify MUI + styled-components SSR safety.
   - [ ] Fix or quarantine existing failing tests with targeted mocks and assertions (AboutPage/HomePage suites).

4. [ ] Dependency hygiene
   - [ ] Audit for unnecessary emotion packages (`@emotion/core`, `@emotion/styled`) given `@mui/styled-engine-sc` usage; remove if not required.
   - [ ] Ensure `styled-components` Babel plugin is configured in Gatsby (already present) and confirm server-side classnames are stable.
   - [ ] Run `npm audit` and update vulnerable packages where safe; document any intentional holds.

5. [ ] Gatsby configuration correctness
   - [ ] Validate `gatsby-plugin-google-fonts` vs `gatsby-omni-font-loader` duplication; prefer a single strategy (likely omni loader) to avoid double-loading.
   - [ ] Fix misconfigured font entry: `Waterlily` currently points to `Fredoka` URL; update to correct Waterlily font URL (e.g., `https://fonts.googleapis.com/css?family=Waterlily` or the appropriate source), or remove if not needed.
   - [ ] Confirm `gatsby-source-filesystem` covers all needed content roots (only `./src/pages/` is defined currently).
   - [ ] Add `gatsby-plugin-styled-components` options if needed for SSR and display names in dev.
   - [ ] Document `npm run clean` requirement after config changes (README).

6. [ ] TypeScript configuration and types
   - [ ] Add global type augmentations in a `types/` or `src/types/` `.d.ts` file (e.g., MUI BreakpointOverrides) instead of inside source modules.
   - [ ] Enable `noUncheckedIndexedAccess` if feasible to harden types (evaluate impact first).
   - [ ] Add strict event and React.FC typing conventions across components.

7. [ ] Theme and design system consolidation
   - [ ] Centralize theme composition: move breakpoints and typography variants into a cohesive `createTheme` setup (avoid mixing in component file-level declarations).
   - [ ] Standardize naming across style packs (`about`, `retro`, `diary`, `videogame`) and export a typed Theme contract.
   - [ ] Create a theme switcher context/provider (instead of ad-hoc hook-only usage) for runtime theme changes.
   - [ ] Normalize colors and typography tokens; de-dupe multiple `colors` exports across style folders.

8. [ ] Component architecture and reusability
   - [ ] Adopt a consistent directory structure: `src/components`, `src/layouts`, `src/pages`, `src/hooks`, `src/styles`, `src/theme`, `src/lib`.
   - [ ] Promote `Window`, `CustomCard`, `CustomButton`, etc., into a small, reusable primitives layer with clear props and stories/tests.
   - [ ] Remove inline CSS objects where possible in favor of styled-components or MUI `sx` with central tokens.
   - [ ] Add prop-driven responsiveness (breakpoints) rather than hard-coded pixel values in components.

9. [ ] Accessibility (a11y)
   - [ ] Ensure headings follow a logical order and page titles (`Head` components) exist for all pages.
   - [ ] Provide alt text or aria-labels for decorative images or mark them as `aria-hidden` appropriately.
   - [ ] Verify color contrast for text/background combinations from theme tokens.
   - [ ] Add `eslint-plugin-jsx-a11y` rules and fix violations.

10. [ ] Routing, SSR/SSG safeguards
    - [ ] Guard any `window`/`document` usage to avoid SSR crashes (check components and hooks).
    - [ ] Ensure page components don’t run client-only code at module scope; move to `useEffect` when needed.
    - [ ] Add test to mount a page during SSR-like render to catch regressions.

11. [ ] Data layer and GraphQL
    - [ ] If using GraphQL queries later, add a sample query and verify typegen outputs to `.cache` with `graphqlTypegen: true`.
    - [ ] Document how to run dev once to generate types; add a note in README for IDE support.

12. [ ] Netlify CMS integration
    - [ ] Add `/static/admin/config.yml` with minimal collections as a starting point; wire to content folder(s).
    - [ ] Confirm CMS scripts inclusion and public/admin path alignment on local build.
    - [ ] Add a CMS stub page or route if required by product scope.

13. [ ] Performance and asset strategy
    - [ ] Convert large static images to modern formats where appropriate; verify Gatsby image plugins if needed.
    - [ ] Ensure fonts load asynchronously with preconnect and proper `font-display`; avoid duplicate font families.
    - [ ] Add Lighthouse/PSI run to CI and capture a baseline.

14. [ ] Internationalization (optional/scalable)
    - [ ] Isolate user-facing strings (e.g., `src/resources/strings.ts`) behind an i18n interface to enable localization later.
    - [ ] Define a strategy for right-to-left support if in scope.

15. [ ] Security and privacy
    - [ ] Review external script usage and CSP implications; add a basic security section to README.
    - [ ] Sanitize/validate any future user inputs (e.g., comments/polls) and document an approach.

16. [ ] CI/CD and quality gates
    - [ ] Add GitHub Actions workflow: install with `npm ci`, `npm run typecheck`, `npm run lint`, `npm test`, and cache `.npm`.
    - [ ] Optionally add a Gatsby build step to catch build-time issues.
    - [ ] Add status badges (build, tests) to README.

17. [ ] Developer experience
    - [ ] Add VSCode workspace recommendations and extensions (`.vscode/extensions.json`).
    - [ ] Add `npm run test:watch` and docs for focused testing (`jest -t` usage is in guidelines; mirror as script).
    - [ ] Provide a `CONTRIBUTING.md` detailing branch naming, commit style, and review process.

18. [ ] Documentation improvements
    - [ ] Expand README with architecture overview, directory layout, and common commands table.
    - [ ] Add ADRs (Architecture Decision Records) for styling engine choice (styled-components + MUI) and font loading approach.

19. [ ] Housekeeping and cleanup
    - [ ] Remove dead code and commented-out exports in `src/styles/index.ts` and elsewhere.
    - [ ] Ensure all imports are path-consistent (alias or relative) and remove unused exports.
    - [ ] Add `npm run clean` guidance to development docs when touching Gatsby config.

20. [ ] Roadmap and tracking
    - [ ] Break this checklist into GitHub Issues with labels (type: chore/feat/refactor/test/docs) and milestones.
    - [ ] Prioritize tasks for an initial hardening sprint: 1–5, 7–9, 16–17.
