import httpx
from app.config import ML_SERVICE_URL

async def get_prediction(claim_data: dict):
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(f"{ML_SERVICE_URL}/predict", json=claim_data)
            response.raise_for_status()
            return response.json()
        except Exception:
            return None
