# 🌐 URL Shortener

A simple and efficient **URL Shortener Web App** where users can enter a long URL, click on **Shorten URL**, and get a shortened version that can be copied and shared easily.

---

## 📌 Features

- 🔗 Shortens long URLs into simple shareable links  
- 📋 One-click copy functionality  
- 💾 URLs stored securely in **PostgreSQL database on Neon**  
- 🌍 Frontend and Backend both deployed on **Render**  
- 🎨 Minimal and responsive user interface  

---

## ⚙️ Tech Stack

| Layer     | Technology Used               |
|-----------|-------------------------------|
| Frontend  | React.js, CSS                |
| Backend   | Node.js, Express.js          |
| Database  | PostgreSQL (Neon hosted)     |
| Deployment| Render (Frontend + Backend)  |

---

## 📖 How It Works

1. User enters a long URL in the input box.  
2. Click **Shorten URL** button.  
3. The frontend sends a request to the backend API.  
4. The backend generates a short ID and stores it with the original URL in **PostgreSQL (Neon)**.  
5. A short URL is displayed which can be copied and shared.  
6. When someone opens that short URL, they are redirected to the original website.
