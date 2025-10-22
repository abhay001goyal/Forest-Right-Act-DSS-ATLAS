# Forest Rights Act DSS & Atlas

Development of an AI-powered FRA Atlas and WebGIS-based Decision Support System (DSS) for integrated monitoring of Forest Rights Act (FRA) implementation in Madhya Pradesh, Tripura, Odisha, and Telangana.

---

## Overview

This project delivers a full-stack web application to assist government officials, NGOs, and community stakeholders in submitting, visualizing, and analyzing FRA land claims. It features:

- Secure claim submission with geospatial coordinates  
- Interactive mapping of claim boundaries  
- Machine-learning risk and eligibility predictions  
- Role-based access with user and admin dashboards  
- Analytics and statistics for program monitoring  

---

## Folder Structure

├── backend/ # FastAPI backend
│ ├── app/
│ │ ├── main.py # App entrypoint and router mounting
│ │ ├── models.py # SQLAlchemy ORM models
│ │ ├── schemas.py # Pydantic request/response schemas
│ │ ├── routes/
│ │ │ ├── auth.py # JWT login/register
│ │ │ ├── claims.py # CRUD endpoints for claims
│ │ │ ├── maps.py # Geospatial analysis endpoints
│ │ │ └── predictions.py # ML prediction endpoint
│ │ └── services/
│ │ └── ml_service.py # HTTP client to ML API or local model
│ ├── venv/ # Python virtual environment
│ ├── requirements.txt # Python dependencies
│ └── Dockerfile # Container setup
│
├── frontend/ # React frontend
│ ├── public/
│ │ └── index.html # Base HTML template
│ ├── src/
│ │ ├── api/ # API clients (auth, claims, maps, predictions)
│ │ ├── components/ # Reusable UI components
│ │ │ ├── auth/ # Login/Register forms, ProtectedRoute
│ │ │ ├── claims/ # ClaimForm, ClaimList, ClaimDetails
│ │ │ ├── maps/ # MapViewer, PolygonEditor
│ │ │ └── admin/ # AdminDashboard, StatsCard
│ │ ├── contexts/ # AuthContext for user session
│ │ ├── hooks/ # Custom hooks (useAuth)
│ │ ├── layouts/ # MainLayout with Navbar/Footer
│ │ ├── pages/ # Route views (Home, Claims, Maps, Admin)
│ │ ├── styles/ # Global CSS and theme variables
│ │ ├── utils/ # Helper functions (formatDate, validators)
│ │ ├── App.jsx # Router setup and protected routes
│ │ └── index.js # React DOM render
│ ├── .env # React env (API base URL)
│ ├── package.json # Node dependencies and scripts
│ └── Dockerfile # Container setup
│
└── README.md # Project overview and setup instructions


---

## Key Logic & Workflows

### Authentication  
- JWT-based login and registration via FastAPI  
- React Context stores tokens and user roles for guarded frontend routes  

### Claim Submission & Management  
- Frontend forms capture claimant details, geospatial JSON, and additional info  
- Backend stores claims in MySQL via SQLAlchemy models  
- ClaimList fetches and displays all claims; ClaimDetails shows individual claim data  

### Interactive Mapping  
- React-Leaflet displays OpenStreetMap layers  
- PolygonEditor enables polygon drawing/editing, producing GeoJSON for submission  

### Machine Learning Predictions  
- Claim data posted to `/predictions` endpoint  
- Backend ML service forwards data to model or ML API to return eligibility/risk scores  

### Admin Dashboard & Analytics  
- Admin route aggregates claim statuses (pending, approved, rejected)  
- StatsCard displays counts with icons and color coding  
- Chart.js for time-series or spatial analytics (optional)  

### Deployment  
- Dockerfiles for backend and frontend enable containerized deployment  
- Environment variables configure API URLs and database connections  
- Docker Compose can orchestrate full stack  

---

## Technology Stack

- Frontend: React, React Router, React-Leaflet, Chart.js, Axios  
- Backend: FastAPI, Uvicorn, SQLAlchemy, MySQL Connector, Pydantic  
- Machine Learning: Python scikit-learn or external ML API via HTTPX  
- Containerization: Docker, Docker Compose  
- Authentication: JWT tokens with role-based access control  

---

## Target States

- Madhya Pradesh  
- Tripura  
- Odisha  
- Telangana  

These states are chosen based on diverse forest types, administrative capacities, and active FRA implementation for initial model training and deployment.

---

## Benefits

- Automates eligibility screening, reducing manual workload  
- Provides transparent, real-time claim status tracking  
- Ensures data integrity via audit logs and access roles  
- Scalable with modular microservices for new regions or models  
- Offers data-driven policy insights and resource allocation  

---

## Future Extensions

- Satellite-driven land cover auto-filling  
- Multi-language and offline claim submission support  
- Secure geo-tagged media uploads for documentation  
- RESTful APIs for integration with third-party tools

👨‍💻 Author

Developed by: Abhay Goyal 

---

