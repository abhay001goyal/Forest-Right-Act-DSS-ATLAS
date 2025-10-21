from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ClaimBase(BaseModel):
    claimant_name: str = Field(..., example="John Doe")
    claimant_contact: Optional[str] = None
    land_location: str = Field(..., example='{"type": "Polygon", "coordinates": [[[...]]]}')
    claim_details: Optional[str] = None

class ClaimCreate(ClaimBase):
    pass

class ClaimUpdate(BaseModel):
    status: Optional[str] = None
    claim_details: Optional[str] = None

class Claim(ClaimBase):
    id: int
    status: str
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        orm_mode = True
