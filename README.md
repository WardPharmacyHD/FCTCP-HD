# 🏥 Ward Pharmacy Portal HD (FCTCP-HD)

> **Official Pharmacotherapy & Clinical Pharmacy (CP3) Reporting System**  
> *Unit Farmakoterapi, Hospital Dungun, Terengganu.*

[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()
[![Platform](https://img.shields.io/badge/Platform-GitHub%20Pages-blue.svg)]()
[![Backend](https://img.shields.io/badge/Data%20Sync-Google%20Sheets-success.svg)]()

---

## 📌 Overview

**Ward Pharmacy Portal HD** is a web-based clinical workflow tool designed to streamline daily ward pharmacy activities, intervention logging, Drug Information (DI) inquiries, and automated monthly **CP3 (Pin 2/24)** & **PF 6.3(b)** report generation for Hospital Dungun.

The system features real-time **2-way cloud synchronization**, allowing pharmacists working on different ward tablets and desktop workstations to seamlessly log data into a single centralized database.

---

## ✨ Key Features

* **🔐 Multi-Pharmacist Authentication:** Secure PIN-based login tailored by user profile and assigned ward.
* **📋 Daily Activity Tracker (Section A):** Tracks Medication History Taken (CP1), Cases Clerked (CP2), and Patient Counselling sessions (Bedside, Discharge, Group).
* **💊 Real-Time Intervention Logging (Section B & C):** Standardized categorizations (Incomplete Prescriptions, Inappropriate Regimens, Miscellaneous) with automated tallying.
* **❓ Drug Information (DI) Enquiry Portal (Section D):** Centralized log for answering and referencing clinical enquiries.
* **📌 Section E Follow-Up Checklist:** Carry-forward system for unresolved clinical issues across shifts.
* **📊 Automated CP3 & PF 6.3(b) Report Generator:** One-click generation of official KKM performance matrix and monthly audit summaries.
* **🔄 Live 2-Way Cloud Sync:** Automatic sync across multiple devices via API integration.

---

## 🏥 Covered Wards & Units

* Emergency Department
* Intensive Care Unit (ICU)
* Ward 1 – Medical Male
* Ward 2 – Medical Female
* Ward 3 – Multidiscipline
* Ward 4 – Paediatrics 2
* Ward 5 – O&G
* Ward 6 – Paediatrics 1
* Ward 7 – Surgical / Ortho Male
* Ward 8 – Surgical / Ortho Female

---

## 🚀 How to Access

The system is hosted live via GitHub Pages:
👉 **[Access Ward Pharmacy Portal HD](https://wardpharmacyhd.github.io/FCTCP-HD/)**

### 👤 Standard Pharmacist Workflow
1. Open the portal URL on any ward device.
2. Select your profile/ward and enter your 4-digit PIN.
3. Verify the **Shift Date** and enter daily clinical activities, interventions, or follow-ups.
4. Click **Save / Sync** to upload entries to the cloud.

### 🛡️ Admin Privileges
* Register new ward pharmacists and manage security PINs.
* Generate aggregate monthly **PF 6.3(b) Near Miss vs. Patient Optimization** reports.
* Export local JSON data backups or verify API status.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6)
* **Hosting:** GitHub Pages
* **Database & Cloud Sync:** Google Sheets REST API
* **Design Framework:** Responsive layout designed for mobile tablets and desktop monitors

---

## 🔒 Data Privacy & Compliance

* All patient-related data entries follow internal hospital guidelines for clinical pharmacy documentation.
* Access is restricted to authorized pharmacy staff using individual PIN verification.

---

© 2026 Unit Farmakoterapi, Hospital Dungun. All rights reserved.
