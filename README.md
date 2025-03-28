# 🧬 Family History Pedigree Builder

This is a full-stack coding challenge built for frontend-backend developer pairs. The project is part of a real-world genetics and health-tech application that helps users contribute their family health history through a guided questionnaire, stores the data securely, and optionally visualizes a pedigree (family tree).

---

## 🚀 Tech Stack

| Layer     | Technology                             |
|-----------|-----------------------------------------|
| Frontend  | React, TypeScript, Material UI (Minimal UI Kit) |
| Backend   | Firebase Functions v2, Express, Firestore, Firebase Auth |
| Auth      | Firebase Authentication (Google/Email)  |
| Hosting   | Firebase Hosting                        |

---

## 🧪 Challenge Objective

Build and enhance a Family History Pedigree Builder. The core feature is a **smart questionnaire** that asks the user about hereditary conditions in their family and stores that data securely.

---

## 👨‍💻 Who Can Apply

> This challenge is designed for **frontend + backend developer pairs** only.  
> Solo submissions will not be considered.

---

## 📌 Requirements

### ✅ Core Features

- [x] Firebase Authentication (Google or Email/Password)
- [x] Multi-step family health questionnaire
- [x] Save responses to Firestore
- [x] View submitted entries in a dashboard
- [x] Firebase Functions backend with Express routes
- [x] Role-based access and security rules
- [x] Modular codebase structure

---

## 🧠 Future Bonus (Optional)

- [ ] Allow adding multiple family members
- [ ] Visualize pedigree tree using D3.js or similar
- [ ] Export history to PDF/JSON
- [ ] Admin dashboard to review submissions across users

---

## 📂 Folder Structure

```
project-root/
├── frontend/                  # React App
│   ├── src/
│   │   ├── pages/
│   │   ├── sections/
│   │   ├── services/
│   │   └── components/
├── backend/                   # Firebase Functions backend
│   ├── src/
│   │   ├── middlewares/
│   │   ├── services/
│   │   ├── routes/
│   │   └── index.ts
├── firebase.json              # Firebase Hosting + Functions config
├── .firebaserc
```

---

## 🔐 Auth & API Security

- All endpoints require a **Firebase ID Token**.
- Middleware verifies the token and injects the user.
- Users can only access their own data.
- Admin rules are future-ready.

---

## 📝 Tasks for the Coding Challenge

1. 🧾 Enhance the questionnaire to support multiple family members
2. 🧬 Add pedigree visualization (optional but impressive!)
3. 🔐 Implement basic admin role (e.g. list all submissions)
4. 🎨 Improve UI/UX with Minimal UI Kit (from https://free.minimals.cc/)
5. 🛠️ Bonus: Implement export to PDF or shareable link

---

## 🧪 How to Run

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
firebase emulators:start
```

To deploy the backend:

```bash
firebase deploy --only functions
```

---

## 📥 Submission Guidelines

- Fork this repo (or clone & upload to your GitHub)
- Add your enhancements
- Submit the GitHub links to [me@biswabijaya.com]

---

## 🙌 Good Luck!

We’re looking forward to seeing how you think, collaborate, and build.  
Creativity, clean code, and good practices matter most!