# 📋 CHANGELOG - WARD PHARMACY PORTAL HD

All notable changes, bug fixes, and feature enhancements for the Clinical Pharmacy (CP3 Pin 2/24) Portal will be documented in this file.

---

## [1.6.0] - 2026-08-04

### 🚀 Added
- **Shift Snapshot & Locking Workflow**: Implemented an "Upsert" snapshot model (`cp3_checkins_db` & `CheckIn` Google Sheets tab). Saving or Finalizing a shift creates an immutable, dated record for that specific `Date + Ward` combination.
- **Shift State Controls**: Added **Save Draft** and **🔒 Finalize & Lock Shift Report** buttons. Finalizing locks Section A controls into read-only mode and displays a green `FINALIZED & LOCKED` audit badge.
- **Admin Unlock Override**: Added an Admin-only button (`btn-admin-unlock`) allowing administrators to unlock and re-open finalized shift reports if emergency edits are needed.
- **Counselling Stepper Buttons**: Restored touch-friendly `-` and `+` increment/decrement buttons for both Sessions and Patient counts across Bedside, Discharge, and Group counselling cards.

---

### 🎨 Changed & UI Refinements
- **Live CP3 Dashboard Re-Architecture**: Transformed Tab 1 into a unified front page featuring Section A controls, Draft/Finalize action bar, live Borang CP3 (Pin 2/24) report preview, and a Print/Export PDF action bar.
- **Reduced Header Typography**: Scaled down Section A & Card headers from `text-base` to `text-sm` (~1pt smaller) for better visual hierarchy.
- **Inline Ward & Task Layout**: Relocated Task Commitment (*Full Time / Part Time*) selector inside the red box directly underneath the **Designated Ward** selector.
- **Inline Physicians & Ward Rounds**: Placed Attending Physician(s) and Ward Rounds Conducted side-by-side in the same row with reduced text size (`text-[11px]`).
- **Ward Rounds Terminology & Defaults**:
  - Renamed options to `Routine Round`, `Grand Round`, and `Pharmacist Round`.
  - Configured defaults so **only Routine Round is ticked by default**.
- **Action Button Placement**: Positioned the Draft & Finalize control bar directly between Section A controls and the CP3 Report preview, and placed the Print/Export PDF action bar below the CP3 Report preview.

---

### 🔒 Security & Access Control
- **Strict Admin Tab Hiding**: Hidden the **`5. Admin / Settings`** and **`6. Laporan PF 6.3(b)`** navigation tabs entirely from the UI for regular pharmacist profiles. Tabs only render when an Administrator logs in.
- **Location-Isolated Interventions**: Locked intervention history viewing in Tab 2 so regular pharmacists strictly view entries matching their assigned unit ward (`currentUser.ward`).
- **User-Restricted Drug Info (DI) History**: Updated `renderDiLogs()` so regular pharmacists only see DI enquiries logged under their own profile/username. Administrators retain full cross-user visibility.

---

### 🛠️ Fixed
- **Google Sheets Date Auto-Formatting Glitch**: Built a safe `normalizeToISO()` date parser helper to seamlessly convert incoming date strings (`YYYY-MM-DD`, `DD/MM/YYYY`, or serial values) across all report filters.
- **CP3 Report Preview Data Decoupling**: Solved past report preview unreliability by binding the generated CP3 document directly to saved shift snapshots rather than live, uncommitted form inputs.

---

## [1.5.0] - 2026-08-03
### 🛠️ Fixed
- **SheetDB Date Parsing Bug**: Resolved an issue where intervention counts displayed `0` on both the CP3 Generator and PF 6.3(b) reports due to Google Sheets auto-formatting `YYYY-MM-DD` strings into serials or `DD/MM/YYYY`.
- **Date String Normalization**: Implemented a flexible date parser to handle incoming Google Sheets string formats seamlessly across all report generator filters.
- **Shift Check-In Feedback**: Standardized shift check-in submission feedback using non-blocking floating toast alerts with a browser alert fallback for reliable save confirmations.

---

## [1.4.0] - 2026-08-03
### 🚀 Added
- **Multi-Select CP3 Categories**: Replaced single category dropdown in Tab 2 with a multi-select checkbox selector (1.x, 2.x, 3.x).
- **CP3 Score Multiplication**: Selecting multiple categories for a single patient now correctly multiplies the score (each checked category adds +1 to Section B totals & Admin PF 6.3(b) matrix).
- **Editable Interventions**: Added an Edit modal (`PATCH` request support) to update existing intervention logs directly.
- **Location-Based Filtering**: Regular pharmacists now only view past interventions logged for their assigned ward/location.

### 🛠️ Fixed
- **Counselling Grand Total Formula**: Decoupled counselling totals from intervention counts. Grand Total now strictly calculates `Bedside + Discharge + Group` counselling patients.
- **CP3 Report Preview Data Sync**: Fixed ward-filter synchronization issue between Check-In selections and Tab 5 previews.
- **Cross-Device Cloud Fetching**: Added automatic background data fetch on page load and login to sync team logs across phones, tablets, and PCs.

---

## [1.3.0] - 2026-08-02
### 🚀 Added
- **Section E Follow-Up Required Tab (Tab 4)**: Introduced a spreadsheet-style checklist for tracking ward follow-ups.
- **Interactive Status Toggles**: Items can be toggled between `Pending` and `Complete`. Completed items auto-grey out.
- **Unresolved Carry-Forward**: Pending follow-ups automatically carry forward onto subsequent daily CP3 reports until marked complete.
- **Floating Toast Notifications**: Top-centered animated toast banner for non-blocking UI feedback.

---

## [1.2.0] - 2026-08-02
### 🚀 Added
- **SheetDB API Integration**: Cloud sync support for Google Sheets for daily check-ins, interventions, and drug info.
- **Shift Date Badging**: Added prominent, red high-visibility date badge in `DD/MM/YYYY` format.
- **Security PIN Management**: Added user self-service PIN change modal and Admin profile editing modal.

---

## [1.1.0] - 2026-07-28
### 🚀 Added
- **Admin Executive Matrix (Laporan PF 6.3(b))**: Built Admin-only performance tracking matrix breaking down Near Miss (NM) and Patient Optimization (PO) scores per pharmacist.
- **CSV & JSON Data Backup**: Admin export tools to download raw data locally.

---

## [1.0.0] - 2026-07-15
### 🎉 Initial Release
- **Section A**: Daily Ward Check-In, activity counters (CP1, CP2), and counselling session logging.
- **Section B, C & D**: Clinical intervention entries and Drug Information (DI) enquiry logging.
- **Section E**: Basic follow-up table preview.
- **Borang CP3 (Pin. 2/24)**: Official KKM print-ready PDF generator format.
- **Authentication**: 4-digit PIN authentication overlay for 10 pharmacist profiles + Admin.
