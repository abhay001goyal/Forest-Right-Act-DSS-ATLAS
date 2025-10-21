from fastapi import FastAPI
from .routes import claims, maps, predictions

def create_app():
    app = FastAPI(title="FRA DSS Backend")

    # Include routers
    app.include_router(claims.router, prefix="/claims", tags=["Claims"])
    app.include_router(maps.router, prefix="/maps", tags=["Maps"])
    app.include_router(predictions.router, prefix="/predictions", tags=["Predictions"])

    return app
