# 📝 React ToDo List App

A simple **React.js ToDo List application** with **Create, Edit, Delete** functionality.  
Built for learning and practice purposes.

---

## ✨ Features
- **Create tasks** dynamically.  
- **Edit tasks** anytime.  
- **Delete tasks** you no longer need.  
- **Persistent data** using **JSON Server**.  
- **Notifications/Toasts** using **Toasty library** for feedback messages.  
- Fully responsive UI.  

---

## 🛠️ Tech Stack
- React.js (Functional Components & Hooks)  
- JSON Server (for fake backend)  
- Toasty (notifications)  
- HTML5, CSS3, JavaScript (ES6+)  

---

## 📂 Project Structure
```
src/
│── components/   # Reusable UI components (TaskItem, TaskForm, etc.)
│── pages/        # Main App page
│── services/     # API services (JSON Server interactions)
│── App.jsx       # Root component
│── index.jsx     # Entry point
public/
│── index.html
db.json            # JSON Server database
README.md
```

---

## 🚀 How to Run
1. Clone this repository:
```bash
git clone git@github.com:USERNAME/react-todolist.git
cd react-todolist
```

2. Install dependencies:
```bash
npm install
```

3. Start JSON Server:
```bash
npx json-server --watch db.json --port 5000
```

4. Start React development server:
```bash
npm run dev
```

5. Open your browser at `http://localhost:5173` (or the port Vite shows).  

---

## 📸 Screenshots
Here is a screenshot of the project:

![ToDo List Project](./src/assets/Screenshot%202025-09-04%20175150.png)


---

## ⚙️ Future Improvements
- Add **task filtering** (completed, pending).  
- Add **due dates** for tasks.  
- Dark mode support.  
- User authentication for multi-user ToDo lists.  

---

## 📄 License
Open-source project — for **learning and practice purposes only**.
