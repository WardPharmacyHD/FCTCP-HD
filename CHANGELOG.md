# 📋 CHANGELOG - WARD PHARMACY PORTAL HD

All notable changes, bug fixes, and feature enhancements for the Clinical Pharmacy (CP3 Pin 2/24) Portal will be documented in this file.

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
