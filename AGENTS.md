# ㅁㅇ website non-regression rules

These rules are mandatory for every change to this repository.

## Canonical target

- “ㅁㅇ” always means the live Volvo sales website at `https://wng777-cmd.github.io/`.
- The canonical source is this repository, `wng777-cmd/wng777-cmd.github.io`, on `main`.
- Library HTML files such as `volvo_personal_homepage_*.html` are references or archives only. Never treat them as the delivered website unless the user explicitly asks for an archive edit.
- A task is not complete when only a local or Library copy is changed. It is complete only after the live GitHub Pages assets are verified.

## Data source and scope

- Use the latest official Volvo material supplied by the user as the primary source of truth.
- Unless the user explicitly asks otherwise, all vehicle information must follow current South Korean sale specifications. Do not mix in overseas specifications.
- Keep MY26 and MY27 facts separated when their source years differ.
- Never summarize a trim difference as only “편의사양 강화”, “주요 사양 동일”, “ULTRA 구성”, or similar vague language.
- For every trim, show the actual added or changed equipment. Include wheel size and tire specification when the supplied table provides them.
- Separate common equipment from added/changed equipment. Do not describe an item shared by both trims as an upper-trim addition.
- Customer-facing pages must not display source document names, PDF names, internal audit notes, or document attribution.

## Preserve existing behavior

- Make incremental changes and preserve all existing buttons, model cards, category filters, navigation, contact links, Kakao link, service-center tools, accessories, colors, interiors, warranties, and comparison functions.
- Apply and verify every change for both desktop and mobile layouts.
- Do not remove or rename a public function used by inline `onclick` handlers unless every caller is updated and tested.
- The site loads `site-pdf-refresh-core.js` asynchronously and it can overwrite earlier global render functions. Any final UI override must load after all data patches in `site-pdf-refresh.js`.
- When a loaded JavaScript file changes, bump that file's cache query. When `site-pdf-refresh.js` changes, bump its query in both `index.html` and `guide.html`.
- GitHub Pages serves HTML with a cache window, so every customer-facing release must update `site-version.json` and the matching `site-release` meta value in both `index.html` and `guide.html`. Keep `site-version-guard.js` loaded before the main site scripts so stale mobile tabs can move to the current versioned URL.
- A release-specific mobile entry page, when present, must be byte-for-byte identical to `index.html` and use a never-before-published filename. This provides a cache-independent verification URL without creating a separate mobile implementation.

## Required workflow

1. Start from the current remote `main`; do not assume an archive is current.
2. Create a dated backup branch or otherwise preserve the exact pre-change commit.
3. Inspect the current load order and all later patches that could overwrite the intended change.
4. Make the smallest compatible change.
5. Run `node scripts/verify-site-integrity.mjs` and relevant syntax checks.
6. Review the diff for unrelated changes.
7. Deploy to remote `main` without force-pushing.
8. Verify that the new HTML, loader, and changed asset are actually served by GitHub Pages.
9. Verify the versioned public URL with a mobile user agent and assert the actual customer-facing EX30 content: two trim cards, detailed option rows, Core 18-inch wheel, Ultra 19-inch wheel, and no vague convenience-only summary.

The user must not be used as the primary tester. Report completion only after these checks pass. If a check cannot be performed, say exactly which check remains instead of claiming the live site is complete.
