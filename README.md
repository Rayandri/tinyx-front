This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

### **📌 README.md - tinyx-front (Frontend - Next.js)**  

# TinyX Frontend

TinyX is a micro-blogging platform built with a microservices architecture. This repository contains the frontend application developed using **Next.js**.

## 🚀 Features
- User authentication & session management (to be integrated)
- Create, like, and search posts
- Follow/unfollow users
- Real-time updates (to be implemented)
- Responsive design

## 🛠️ Technologies
- **Next.js** (React Framework)
- **TypeScript** (Strongly typed JavaScript)
- **Tailwind CSS** (Utility-first styling)
- **Axios** (API requests)
- **Redux Toolkit** (State management)
- **React Query** (Data fetching and caching)

## 📦 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/tinyx-front.git
   cd tinyx-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application runs on **http://localhost:3000**.

## 📌 API Integration
The frontend communicates with the backend via **REST API** endpoints. Ensure that the backend services are running before testing API interactions.

## 🏗️ Project Structure
```
tinyx-front/
│── public/           # Static assets
│── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Next.js pages
│   ├── services/     # API requests
│   ├── store/        # Redux store
│   ├── styles/       # Tailwind and global styles
│   ├── utils/        # Helper functions
│── .env.example      # Example environment variables
│── package.json      # Project dependencies
│── README.md         # Project documentation
```

## 📜 License
MIT License
