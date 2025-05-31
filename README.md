## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Hannan2004/freelance-project.git
cd freelancing
```

---

## Frontend Setup

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Rename `.env.example` to `.env` and fill in your environment variables.

4. **Start the frontend:**
   ```bash
   npm start
   ```

---

## Backend Setup

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Rename `.env.example` to `.env` and fill in your environment variables.

4. **Firebase Service Account:**
   - Download your `serviceAccountKey.json` from your Firebase project settings.
   - Place it in the `backend` folder.

5. **Start the backend server:**
   ```bash
   npm run dev
   ```

---

## Notes

- Make sure your PostgreSQL database is running and credentials are set in the backend `.env` file.
- The frontend uses environment variables prefixed with `REACT_APP_`.
- Do **not** commit your actual `.env` or `serviceAccountKey.json` files to public repositories.

---

## Scripts

- **Frontend:**  
  `npm start` — Runs the React app in development mode.
- **Backend:**  
  `npm run dev` — Runs the backend server with nodemon for auto-reloading.
