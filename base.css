# AviCore Design System

**AviCore** is a modular ERP for Aviation Training Organizations (ATOs) — flight schools operating under CAAT (Civil Aviation Authority of Thailand) oversight. One shared database, eight modules: **HR, Finance, Training, Student Management, Inventory/Asset, Document Control, Compliance, Reports**, plus a Core module (users, roles, approvals, notifications, audit log).

Reference customer / source material: **Thai Inter Flying** (logo provided at `assets/thai-inter-flying-logo.jpg`). The product context comes from a Thai-language Modular-Monolith ERP architecture spec supplied by the user (module list, entities, permission format like `hr.leave.approve`, central approval workflow, document expiry/compliance alerts).

**No AviCore logo was provided.** The brand renders as a plain wordmark — "AviCore" set in IBM Plex Sans SemiBold — wherever a mark would go. Do not invent a logo.

## Sources
- `uploads/images.jpg` — Thai Inter Flying company logo (color reference: deep navy + silver/steel)
- Pasted ERP System Architecture spec (Thai) — module inventory, data model, workflows

## CONTENT FUNDAMENTALS
- **Bilingual reality**: users are Thai; system copy is plain English with Thai-friendly type (Noto Sans Thai fallback). Keep sentences short so they translate cleanly.
- **Tone**: precise, operational, regulatory. No exclamation marks, no emoji, no marketing adjectives. This is software for compliance officers and flight ops.
- **Casing**: Title Case for page titles and nav ("Training Records", "Compliance Alerts"); sentence case for body, buttons, and helper text ("Approve request", "License expires in 14 days").
- **Voice**: direct imperative for actions ("Assign instructor", "Upload document"); neutral third person for statuses ("Awaiting approval", "Overdue").
- **Data first**: dates as `12 Mar 2026`, IDs in mono (`STD-0142`, `INV-2026-081`), hours as `1,240.5 hrs`. Never round or prettify operational numbers.
- **Status vocabulary** (fixed): Active, Pending, Approved, Rejected, Expired, Overdue, Due Soon, Grounded, Completed.
- Examples: "3 instructor licenses expire within 30 days." / "Payment recorded — receipt RCP-2026-0334 issued." / "Corrective action required by 15 Aug 2026."

## VISUAL FOUNDATIONS
- **Color**: deep navy `--navy-700 #22307A` is the single brand hue (from the Thai Inter Flying mark); cool steel/slate neutrals; white cards on `--slate-050` page. Semantic green/amber/red/sky reserved strictly for status. No gradients anywhere; flat fills only.
- **Dark sidebar, light content**: fixed `--navy-900` sidebar (232px), light content area. The only large dark surface in the product.
- **Type**: IBM Plex Sans throughout (SemiBold 600 for headings, Medium 500 for labels), IBM Plex Mono for IDs/numbers/codes, Noto Sans Thai for Thai text. Compact ERP scale — 14px body, 12.5px table text, 22px page titles.
- **Spacing**: 4px base grid; dense layouts (16–24px card padding, 12px table cell padding).
- **Corners**: 6px controls, 10px cards/dialogs, 4px badges. Never fully-round pills except status dots and avatars.
- **Borders & shadows**: 1px `--slate-200` borders do most separation work; shadows are quiet, navy-tinted (`--shadow-card`). Cards = white, 1px border, subtle shadow, 10px radius. No inner shadows.
- **Imagery**: none in-app. No illustrations, no stock photos, no decorative SVG art. The one image asset is the customer logo.
- **Motion**: functional only — 120–200ms fades/position shifts, `--ease-standard`. No bounces, no infinite loops.
- **States**: hover = one step darker fill (`--surface-brand-hover`) or `--slate-050` tint on rows; press = same, no scale effects; focus = 3px soft navy ring (`--shadow-focus`); disabled = 50% opacity.
- **Transparency/blur**: only sidebar active-item wash (`rgba(255,255,255,.10)`) and dialog scrim (`rgba(12,18,48,.5)`). No glassmorphism.
- **Layout**: fixed sidebar + 56px topbar; content max-width unconstrained (data tables want width); page header pattern = title + meta left, actions right.

## ICONOGRAPHY
- **Lucide** via CDN (`lucide@latest` UMD) — 1.5px stroke line icons, 16px in controls/tables, 18–20px in nav. This is a **substitution**: no icon set shipped with the source material. Flagged for replacement if the brand adopts its own set.
- No emoji, ever. Unicode glyphs only for chevrons/sort arrows where an icon is overkill (▾, ↑, ↓).
- Status communicated by Badge color + text, not icon alone.

## Index
- `docs/final/` — **Final ERP integration** (architecture, full schema, API/permission, workflow/notification/report matrices, roadmap/MVP/risks) — เริ่มที่ `docs/final/00-index.md`
- `docs/core/` — TIF ERP Core Module specification (schema, API, permissions — Thai)
- `docs/modules/ceo-am/` — CEO / Accountable Manager Module spec
- `docs/modules/secretary/` — Secretary Office Module spec
- `docs/modules/hr/` — Human Resource Module spec
- `docs/modules/it/` — Information Technology Module spec
- `docs/modules/facilities/` — Facilities Management Module spec
- `docs/modules/bd/` — Business Development Module spec
- `docs/modules/consultant/` — Consultant Module spec
- `docs/modules/coo/` — Chief Operating Officer Module spec
- `docs/modules/maintenance/` — Maintenance Module spec
- `docs/modules/maintenance-certify-staff/` — Maintenance Certify Staff Sub-module spec
- `docs/modules/maintenance-planning/` — Maintenance Planning Sub-module spec
- `docs/modules/operations/` — Operations Module spec
- `docs/modules/operation-scheduler/` — Operation Scheduler Sub-module spec
- `docs/modules/operation-dispatch/` — Operation Dispatch Sub-module spec
- `docs/modules/simulator-coordinator/` — Simulator Coordinator Sub-module spec
- `docs/modules/cto/` — Chief Training Officer Module spec
- `docs/modules/standards/` — Standard Division Module spec
- `docs/modules/standard-flight/` — Standard Flight Sub-module spec (แบบสำหรับ Theory/Simulators ด้วย)
- `docs/modules/standard-theory/` — Standard Theory Sub-module spec
- `docs/modules/standard-simulators/` — Standard Simulators Sub-module spec
- `docs/modules/course-development/` — Standards Course Development Sub-module spec
- `docs/modules/training-admin/` — Training Admin Division Module spec
- `docs/modules/training-coordinator/` — Training Coordinator Sub-module spec
- `docs/modules/training-compliance-conduct/` — Training Compliance and Conduct Sub-module spec
- `docs/modules/training-planner/` — Training Planner Sub-module spec
- `docs/modules/training-registration-licensing/` — Training Registration and Licensing Sub-module spec
- `docs/modules/cco/` — Chief Commercial Officer Module spec
- `docs/modules/sale/` — Sale Sub-module spec
- `docs/modules/marketing/` — Marketing Sub-module spec
- `docs/modules/cfo/` — Chief Financial and Accounting Officer Module spec
- `docs/modules/finance-accounting/` — Finance and Accounting Module spec
- `docs/modules/purchasing/` — Purchasing Module spec
- `docs/modules/cbo/` — Chief Business Assurance Officer Module spec
- `docs/modules/assurance-management/` — Assurance Management Sub-module spec
- `docs/modules/risk-loss/` — Risk and Loss Management Sub-module spec
- `docs/modules/process-improvement/` — Process Improvement Sub-module spec
- `docs/modules/scm/` — Safety and Compliance Monitoring (SCM) Module spec
- `docs/modules/safety-manager/` — Safety Manager Module spec (SMS)
- `docs/modules/compliance-monitoring/` — Compliance Monitoring Manager Module spec (CMS)
- `styles.css` — global entry (imports everything under `tokens/`)
- `tokens/` — colors, typography, spacing/effects, fonts, base
- `assets/` — `thai-inter-flying-logo.jpg`
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch
- `components/display/` — Card, Badge, Tag, StatCard
- `components/feedback/` — Dialog, Toast, Tooltip
- `components/navigation/` — Tabs, PageHeader, Sidebar
- `components/data/` — DataTable
- `ui_kits/erp/` — AviCore ERP app screens (role-based: Executive, Daily Ops Board, Students, Student Progress, Compliance) built from the design-system components
- `prototype/tif-avicore/` — **imported interactive prototype** (`TIF AviCore.dc.html` desktop + `… Mobile.dc.html`). A mature, self-contained Design Component ERP (Sarabun/navy theme, Scheduler, Training, HR, Doc Control + QA regist no., Fleet & Maint., Reports, AviCore Copilot). Its data model follows the single-shared-database structure in `docs/final/`. Brought in from project `0194efbb-c6ad-4e7a-bff5-c5406340f6cd`.
- `docs/reference/ORG Rev 6-signed.pdf` — TIF organization chart (source of truth for the module/department structure)
- `SKILL.md` — agent skill entry point

### Intentional additions (no component source was provided; standard set + ERP needs)
- **StatCard** — dashboard KPI unit, core to the Report module
- **DataTable** — every module is table-centric
- **Sidebar / PageHeader** — fixed app shell patterns

## Fonts caveat
No font binaries were provided; using Google Fonts CDN (IBM Plex Sans/Mono, Noto Sans Thai). Supply brand font files to replace.
