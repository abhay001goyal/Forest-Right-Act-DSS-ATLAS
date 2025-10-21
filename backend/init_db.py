from app.database import engine, Base
from app import models

#This command will create the tables in your MySQL database as defined in models.py
Base.metadata.create_all(bind=engine)
print("Database tables created successfully!")