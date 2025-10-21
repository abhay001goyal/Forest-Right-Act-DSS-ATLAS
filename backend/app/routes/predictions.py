from fastapi import APIRouter, HTTPException
from fastapi import Depends
from app.services.ml_service import get_prediction

router = APIRouter()

@router.post("/")
async def predict_risk(claim_data: dict):
    prediction = await get_prediction(claim_data)
    if prediction is None:
        raise HTTPException(status_code=500, detail="Prediction service unavailable")
    return {"risk_prediction": prediction}
