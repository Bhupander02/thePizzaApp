<h1 align="center">🍕 thePizzaApp — Order Pizza at Padre's Pizzas</h1>

<p align="center">
  A modern, full-stack pizza ordering application built for speed, simplicity, and delicious UI experience.  
</p>

<p align="center">
  ⚡ React + Vite • 🍽️ Express API • 🛒 Cart System • 🔥 Fully Extendable
</p>

---

## 🚀 Project Overview

**thePizzaApp** is a web application designed for placing pizza orders at **Padre’s Pizzas**.  
Users can browse the menu, choose pizzas, add them to the cart, apply modifications, and simulate placing an order.

This project serves as an excellent **demo**, **portfolio showcase**, or **starter full-stack food ordering system**.

---

## 🤔 Why This Project?

✨ **Modern full-stack architecture** — React + Vite frontend + Express backend  
✨ **Perfect for learning** — state management, API integration, routing, UI flow  
✨ **Highly extendable** — add authentication, payments, DB, admin dashboard  
✨ **Great portfolio addition** — demonstrates real-world application structure  

---

## 📦 Tech Stack

| Layer / Role | Technologies |
|--------------|--------------|
| **Frontend** | React, Vite, JavaScript, CSS |
| **Backend / API** | Node.js, Express (found in `api/` folder) |
| **Build & Dev Tools** | npm, Vite Dev Server, package.json |
| **Code Quality** | ESLint (`eslint.config.js`) |

You can further extend this with DB, UI libraries, state management tools, etc.

---

## 🧰 Features

- 🍕 View list of all available pizzas  
- ➕ Add pizzas to cart  
- 🔄 Adjust quantities  
- ❌ Remove items from cart  
- 💰 View total price & cart summary  
- 🚀 Extendable: customizations, user accounts, order history, admin panel  

---

## 📥 Installation & Setup

> Make sure Node.js & npm are installed.

### 🔽 1. Clone the repository
```bash
git clone https://github.com/Bhupander02/thePizzaApp.git

```
📁 2. Navigate into project root
cd thePizzaApp

📦 3. Install dependencies
npm install

▶️ 4. Start frontend + backend
Option A — Single combined start command
npm start

Option B — Separate frontend & backend
# Start backend
cd api
npm install
npm start

# Start frontend (in root)
npm run dev

# 🎬 Usage

Open your browser at http://localhost:3000

(or the port shown in terminal).

Browse the pizza menu

Add pizzas to your cart

Review items in the Cart

Simulate placing an order


Example walk-through:

🧭 Go to Menu

🍕 Click Add to Cart

🛒 Cart updates instantly

📝 Open Cart → Place Order

# 🗂️ Project Structure
thePizzaApp/
│
├── src/            # React frontend
├── api/            # Express backend (orders, menu, etc.)
├── package.json    # Dependencies & scripts
├── vite.config.js  # Vite config
├── .gitignore
└── README.md


---

# 📄 License

This project is licensed under the MIT License.
Feel free to use, modify, distribute, or extend it.

# ✨ Roadmap / Future Enhancements

Here are ideas to take this project to the next level:

🗄️ Add persistent DB (MongoDB / PostgreSQL / SQL)

🔐 Add authentication (login/signup)

📜 Order tracking + order history

💳 Integrate payments / checkout

🛠️ Build Admin Panel (add/edit pizzas, manage orders)

📱 Improve responsiveness / mobile UI

🎨 Add animations & UI polish

🛒 Store cart in localStorage or backend


# 📝 Acknowledgments

Thanks to all open-source libraries used in this project

Inspired by various modern full-stack food delivery demos
