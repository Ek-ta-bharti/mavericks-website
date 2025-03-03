# Mavericks Program - BlackBox AI

Welcome to the Mavericks Program website repository! This is an open-source project where contributors can help build and improve the official platform for the Mavericks Program, powered by BlackBox AI.

![Screenshot 2025-03-03 124714](https://github.com/user-attachments/assets/f6601404-a823-47ca-a542-ac2428246706)

---

## 📌 Project Overview

This website is designed to provide an interactive platform where users can register, explore events, participate in challenges, and track their performance on the leaderboard.

It consists of two main parts:

- **Frontend**: Handles user interface and experience.
- **Backend**: Manages authentication, data storage, and business logic.

### Key Features:

✔ **Admin Dashboard:**

- Create, update, and delete events.
- Set eligibility criteria, points, descriptions, images, and prizes.
- View event engagement (likes, participants).

✔ **User Dashboard:**

- Register/login with email & password (OTP-based verification).
- Auto-generate unique **User ID** & **Referral ID** via email.
- View available events (highlighted if active, faded if upcoming).
- Click on an event card to view detailed information.
- Track global leaderboards and country-wise rankings.
- Update profile details (photo, college, batch, country, etc.).

✔ **Leaderboard & Recognition:**

- Displays **Top 10 Global Performers**.
- Monthly **Top Student Ambassadors**.
- Filter leaderboards by country.

✔ **Community & Networking:**

- **Head of Mavericks** section with contact details.
- **Country-wise WhatsApp Groups** for discussions.

✔ **Footer Section:**

- Details about **BlackBox AI & Mavericks Program**.
- Contact details of **Program Leaders & Founders**.
- Links to official website & social media.

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/BlackBoxAI/mavericks-program.git
cd mavericks-program
```

### 2️⃣ Frontend Setup

```sh
cd frontend
npm install
npm start
```

### 3️⃣ Backend Setup

```sh
cd backend
npm install
npm start       # OR use node server.js
```

---

## 💂️‍♂️ Project Structure

```
DEEPBLACK/
│── backend/            # Node.js backend
│   ├── controllers/    # Handles business logic
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── uploads/        # File storage
│   ├── .env            # Environment variables
│   ├── index.js        # Main backend entry point
│   ├── server.js       # Express server setup
│   ├── package.json    # Backend dependencies
│
│── frontend/           # React.js frontend
│   ├── src/            # Main source code
│   │   ├── components/ # Reusable UI components
│   │   ├── api.js      # API service integration
│   │   ├── App.js      # Root React component
│   │   ├── index.js    # React entry point
│   ├── public/         # Static assets
│   ├── .gitignore      # Files to ignore in git
│   ├── package.json    # Frontend dependencies
│   ├── README.md       # Project documentation
```

---

## 🚀 How to Contribute

1. **Fork** the repository and clone it locally.
2. **Create a new branch** for your feature or fix.
3. **Make changes** and test your code.
4. **Commit your changes** with a meaningful message.
5. **Push the changes** and create a pull request (PR).

📌 **Before contributing, please:**

- Understand the project structure and requirements.
- Ensure code follows best practices and is well-documented.
- Test your changes before submitting a PR.

---

## 🛠 Technologies Used

- **Frontend:** React.js / Next.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB / Firebase
- **Authentication:** JWT / OTP Verification
- **Deployment:** Vercel / Netlify / AWS

---

## 📞 Contact & Support

If you have any questions or ideas, feel free to share them!

- **Project Lead:** Ekta Bharti
- **Head of Mavericks Program**
- 📩 Email: er.ektabharti@gmail.com
- 🌐 Official Website: https://www.blackbox.ai/

---

### 🎯 Let’s build something amazing together! 🚀

