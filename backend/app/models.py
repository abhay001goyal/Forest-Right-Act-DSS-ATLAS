from sqlalchemy import Column, Integer, String, DateTime, Float, Text
from sqlalchemy.sql import func
from sqlalchemy.dialects.mysql import LONGTEXT
from .database import Base

class Claim(Base):
    __tablename__ = "claims"

    id = Column(Integer, primary_key=True, index=True)
    claimant_name = Column(String(255), index=True, nullable=False)
    claimant_contact = Column(String(100))
    land_location = Column(LONGTEXT, nullable=False)  # GeoJSON or WKT polygon string
    claim_details = Column(Text)
    status = Column(String(50), default="Submitted")  # e.g., Submitted, Verified
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
