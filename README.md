🎨 React.js, JSX, and CSS – Full Project with Tailwind CSS

This project demonstrates a modern React.js front-end built using Vite, Tailwind CSS, and React Router, featuring reusable UI components, custom hooks, API integration, theme switching (light/dark mode), and responsive design.

🚀 Project Overview

The project focuses on mastering core React concepts, state management, and modern UI styling using Tailwind CSS.

It includes:

Component-based architecture

Task management functionality (add, delete, filter, complete tasks)

API integration with search, pagination, and error handling

Dark/light theme with context and local storage persistence

Responsive design and smooth animations

📁 Project Structure

react.js-JSX-and-CSS/
│
├── vite.config.js              # Vite configuration
├── package.json                # Project dependencies & scripts
├── jsconfig.json               # Import alias config
├── eslint.config.js            # Linting rules
├── .gitignore                  # Ignored files
├── .env                        # Environment variables (optional)
│
├── public/
│   └── logo.png                # Static assets
│
└── src/
    ├── main.jsx                # Entry point
    ├── App.jsx                 # Root component with routing
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx      # Responsive navbar + theme toggle
    │   │   └── Footer.jsx      # Footer with copyright info
    │   ├── ui/
    │   │   ├── Button.jsx      # Reusable button (primary, secondary, danger)
    │   │   └── Card.jsx        # Reusable card with animation
    │   ├── Layout.jsx          # Layout wrapper for pages
    │   ├── Home.jsx            # Home page
    │   ├── StudentForm.jsx     # Example form component
    │   ├── TaskManager.jsx     # Task list app with filters
    │   └── ApiDataFetcher.jsx  # API data list with search & pagination
    │
    ├── context/
    │   └── ThemeContext.jsx    # Light/Dark mode context & provider
    │
    ├── lib/
    │   └── api.js              # Fetch data from JSONPlaceholder API
    │
    ├── styles/
    │   └── index.css           # Tailwind imports + custom animations
    │
    └── assets/
        └── logo.png


🧱 Features by Tasks
🧩 Task 1: Project Setup

Initialized using Vite for fast development

Configured Tailwind CSS

Created folder structure for components, utilities, and assets

Configured React Router for navigation

🧠 Task 2: Component Architecture

Reusable Button, Card, Navbar, and Footer components

Implemented Layout component for consistent design

Props-driven and customizable UI

⚙️ Task 3: State Management and Hooks

TaskManager supports:

Adding new tasks

Marking as completed

Deleting tasks

Filtering (All, Active, Completed)

Used hooks:

useState for local state

useEffect for loading/saving data

useContext for global theme management

Custom useLocalStorage hook for persistence

🌐 Task 4: API Integration

Fetches posts from JSONPlaceholder API

Displays them in a responsive grid layout

Includes loading, error, and empty states

Implemented search and pagination

Modular API utility (src/lib/api.js)

💅 Task 5: Styling with Tailwind CSS

Fully responsive design (mobile → desktop)

Integrated dark/light theme toggle

Custom fade and slide animations

Smooth transitions for dark mode

Polished with Tailwind utilities for spacing, color, and typography

⚙️ Installation and Setup
🪄 1. Clone the Repository

git clone https://github.com/yourusername/react-jsx-and-css.git
cd react-jsx-and-css

🧩 2. Install Dependencies

npm install

🧵 3. Run the Development Server

npm run dev

The app will be available at:
👉 http://localhost:5173

🏗️ 4. Build for Production

npm run build

🔍 5. Preview Production Build

npm run preview

🌈 Theme Switching (Light/Dark Mode)

Controlled via ThemeContext.jsx

Uses Tailwind’s darkMode: "class" setting

Automatically saves preference in localStorage

Toggle button located in Navbar
🌓 Switches between light and dark instantly with smooth transitions.

🧠 Custom Hooks
🪶 useLocalStorage

Used in TaskManager to persist tasks locally even after reload.

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

🔗 API Integration (JSONPlaceholder)

Defined in src/lib/api.js:

export async function fetchPosts(page = 1, limit = 10) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

Used inside ApiDataFetcher.jsx with pagination and search input.

🖼️ Example Components
Button Variants

<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>

Card Example

<Card>
  <h2 className="text-lg font-semibold">Task Manager</h2>
  <p>Manage your daily goals easily.</p>
</Card>

<Card>
  <h2 className="text-lg font-semibold">Task Manager</h2>
  <p>Manage your daily goals easily.</p>
</Card>

📱 Responsive Design

Built with Tailwind’s utility-first approach:

Uses flex, grid, gap, p-, and m- utilities

Works seamlessly on mobile, tablet, and desktop

Navbar collapses neatly on smaller screens

🔔 Animations

Custom animations defined in index.css

@import "tailwindcss";

🧭 Routing Setup

In App.jsx

🌍 Deployment
🪐 Deploy on Netlify

Push your project to GitHub

Go to Netlify

Click “New Site from Git”

Select your repo

Set build command:
npm run build

Publish directory:
dist

Click Deploy Site

✅ Your app will be live in seconds!

🌐 Deploy on GitHub Pages

Install GitHub Pages package:

npm install gh-pages --save-dev


Add these scripts to package.json:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Run:

npm run deploy


Your project will be deployed at:
➡️ https://<your-username>.github.io/react-jsx-and-css

🧩 Tech Stack
Technology	Purpose
React.js (Vite)	Front-end framework
Tailwind CSS	Utility-first styling
React Router	Navigation
Context API	Theme management
JSONPlaceholder	Dummy API for testing
Local Storage	Task persistence
Lucide Icons	Icons for buttons/UI
📜 License

This project is open-source and available under the MIT License
.

👨‍💻 Author

First.Name Second.Nmae
💼 MERN Stack Developer
📧 [your.email@example.com
]
🌐 GitHub