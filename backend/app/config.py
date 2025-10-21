import os

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+mysqlconnector://root:Ravindra%40123@127.0.0.1:3306/fra_dss"
)

ML_SERVICE_URL = os.getenv("ML_SERVICE_URL", "http://localhost:9000")
SECRET_KEY = os.getenv("SECRET_KEY", "replace-with-a-secure-secret")
