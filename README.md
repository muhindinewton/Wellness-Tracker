# Wellness Tracker

A full-stack web application that helps users develop consistent wellness routines by tracking sleep, exercise, and medications—all from one simple, secure platform.

**Project Owners**: Newton Muhindi and Presbury Wamae

## 🌟 Features

### Core Features
- **User Authentication**
  - Register, Login, and Password Reset
  - JWT-based sessions and protected API access
- **Daily Health Tracking**
  - Log sleep hours and exercise minutes
  - Add optional daily notes
- **Medication Management**
  - Add and manage medications
  - Mark medications as taken
- **User Dashboard**
  - View today's health summary
  - Track daily progress
- **Health History**
  - View past entries with date filtering
  - Track progress over time

## 📸 Screenshots

### Landing Page
![Landing Page](ui/LandingPage.png)

### Dashboard
![Dashboard](ui/Dashboard.png)

### Track Your Health
![Track Your Health](ui/Track.png)

### Medication Management
![Medication Management](ui/Medications.png)

## 🛠️ Tech Stack

### Frontend (React SPA)
- React + React Router (8 routes)
- State Management: React Context API
- Styling: TailwindCSS
- HTTP Client: Axios

### Backend (Flask REST API)
- Flask + Flask-SQLAlchemy
- SQLite Database
- JWT Authentication via Flask-JWT-Extended
- CORS Handling via Flask-CORS

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python (3.8 or higher)
- SQLite (included with Python)
- npm or yarn

## 📱 App Routes

### Public Routes
- `/` – Landing Page
- `/login` – User Login
- `/register` – User Registration
- `/forgot-password` – Password Reset

### Protected Routes
- `/dashboard` – Health Summary
- `/track` – Daily Health Log Form
- `/medications` – Medication List/Tracker
- `/history` – Past Entries
- `/profile` – Account Management

## 🔧 API Endpoints

### Public Endpoints
- `POST /register` – Create account
- `POST /login` – User login
- `POST /forgot-password` – Request password reset

### Protected Endpoints
- `GET /dashboard` – Get today's summary
- `POST /daily-entries` – Create daily entry
- `PUT /daily-entries/:id` – Update entry
- `DELETE /daily-entries/:id` – Delete entry
- `POST /medications` – Add new medication
- `PATCH /medication-logs` – Log medication taken

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhindinewton/Wellness-Tracker.git
   cd Wellness-Tracker
   ```

2. **Set up the backend**
   ```bash
   cd wellness-tracker-backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set up the frontend**
   ```bash
   cd ../wellness-tracker-frontend
   npm install
   ```

4. **Environment Variables**

   Create a `.env` file in the backend directory with the following variables:
   ```
   FLASK_APP=app
   FLASK_ENV=development
   DATABASE_URL=postgresql://username:password@localhost:5432/wellness_tracker
   JWT_SECRET_KEY=your-secret-key-here
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd wellness-tracker-backend
   flask run
   ```

2. **Start the frontend development server**
   ```bash
   cd wellness-tracker-frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## 🗃️ Database Schema

### Models
- **User**
  - `id`, `email`, `password_hash`, `name`, `created_at`
- **DailyEntry**
  - `id`, `user_id`, `date`, `sleep_hours`, `exercise_minutes`, `notes`
- **Medication**
  - `id`, `user_id`, `name`, `dosage`, `frequency`, `is_active`
- **MedicationLog**
  - `id`, `user_id`, `medication_id`, `date`, `taken`

### Relationships
- One-to-Many:
  - User → DailyEntries
  - User → Medications
  - users to medication_logs
  - medications to medication_logs
- Many-to-Many (via MedicationLog):
  - Users ↔ Medications

## 📂 Project Structure

```
Wellness-Tracker/
├── wellness-tracker-backend/    # Flask backend
│   ├── app/                     # Application package
│   │   ├── models/             # Database models
│   │   ├── routes/             # API endpoints
│   │   ├── services/           # Business logic
│   │   ├── __init__.py         # App factory
│   │   └── config.py           # Configuration
│   ├── migrations/             # Database migrations
│   ├── tests/                  # Backend tests
│   ├── .env.example            # Example environment variables
│   ├── requirements.txt        # Python dependencies
│   └── run.py                  # Application entry point
│
└── wellness-tracker-frontend/  # React frontend
    ├── public/                 # Static files
    ├── src/                    # Source files
    │   ├── components/         # Reusable components
    │   ├── pages/              # Page components
    │   │   ├── auth/          # Authentication pages
    │   │   ├── dashboard/     # Dashboard components
    │   │   └── ...
    │   ├── contexts/           # React contexts
    │   ├── hooks/              # Custom React hooks
    │   ├── services/           # API services
    │   ├── utils/              # Utility functions
    │   └── App.jsx            # Main App component
    ├── .env.example           # Example frontend environment variables
    ├── package.json           # Frontend dependencies
    └── vite.config.js         # Vite configuration
```

## 👥 User Stories

- As a user, I want to register, log in, and reset my password securely.
- As a user, I want to log my sleep and exercise daily.
- As a user, I want to write optional notes about my day.
- As a user, I want to add and manage my medications.
- As a user, I want to see what I've done today and check past entries.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Newton Muhindi** - [@github](https://github.com/muhindinewton)
- **Presbury Wamae** - [@github](https://github.com/Presbury-Wamae)

Project Link: [https://github.com/muhindinewton/Wellness-Tracker]

## 🙏 Acknowledgments

- [Flask](https://flask.palletsprojects.com/) - The web framework used
- [React](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Vite](https://vitejs.dev/) - Frontend tooling
- [SQLite](https://www.sqlite.org/) - Database engine
- [JWT](https://jwt.io/) - For authentication
