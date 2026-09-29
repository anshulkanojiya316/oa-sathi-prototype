# OA-SATHI | AI-Assisted Osteoarthritis Screening System

**SIH Problem Statement 26004**  
*Point-of-Care Early Screening & Risk Assessment Tool for Frontline ASHA Health Workers (North Eastern Region)*

---

## 🌟 Overview
**OA-SATHI** is a standardized, low-resource point-of-care clinical assessment platform developed for frontline health workers (ASHA/ANM). It facilitates early identification of Osteoarthritis (OA) risk markers, prevents irreversible joint damage, and standardizes primary healthcare referrals.

## 🚀 Key Features
1. **Low-Resource Point-of-Care UI**: Clean, accessible, mobile-optimized clinical interface.
2. **Standardized Patient Registration**: Demographics, village/location, optional ABHA ID, and patient consent recording.
3. **Red-Flag Safety Gate**: Instant rule-out for acute knee emergencies (fractures, septic effusion, trauma, fever) before routine screening.
4. **Structured Clinical Questionnaire**:
   - Section 1: Symptoms (duration, affected knee, morning stiffness, 0-10 severity slider).
   - Section 2: Joint Function & Mobility (WOMAC-aligned scale).
   - Section 3: Risk Factors & Lifestyle (occupational stress, past injury, BMI category).
5. **Simulated AI Clinical Pipeline**: Real-time multi-modal risk scoring.
6. **Preliminary Risk Classification**: Multi-tier categorization (Low, Moderate, High, Urgent) with confidence metrics.
7. **Referral Recommendation**: Automated, protocol-driven referral pathways (Physiotherapy, Orthopaedic consultation, Primary Health Center).
8. **Clinical Diagnostic Summary**: Standardized printable summary with disclaimer and health worker attribution.
9. **Multi-Language Support**: English (EN), हिन्दी (Hindi), অসমীয়া (Assamese), বাংলা (Bengali), and मराठी (Marathi).
10. **Offline-First Architecture**: Operates locally without requiring active network connectivity.

---

## 🛠️ Tech Stack
- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Modern CSS3 (CSS Variables, Flexbox, CSS Grid).
- **Storage**: Offline Cache / Local Storage (IndexedDB/SQLite ready).
- **Icons & Visuals**: Inline scalable vector graphics (SVG).

---

## 💻 Running Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. Open `index.html` in any web browser, or serve with a local server:
   ```bash
   # Using Python:
   python -m http.server 3000

   # Using Node.js / npx:
   npx serve .
   ```
3. Open `http://localhost:3000` in your browser.

---

## 📄 License
Developed for Smart India Hackathon (SIH) 2026.
