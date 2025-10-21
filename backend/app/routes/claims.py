from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.orm import Session
from app.schemas import Claim, ClaimCreate, ClaimUpdate
from app import crud, models, database

router = APIRouter()

@router.post("/", response_model=Claim)
def create_claim(claim: ClaimCreate, db: Session = Depends(database.get_db)):
    return crud.create_claim(db, claim)

@router.get("/{claim_id}", response_model=Claim)
def read_claim(claim_id: int, db: Session = Depends(database.get_db)):
    db_claim = crud.get_claim(db, claim_id)
    if db_claim is None:
        raise HTTPException(status_code=404, detail="Claim not found")
    return db_claim

@router.get("/", response_model=List[Claim])
def read_claims(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    return crud.get_claims(db, skip=skip, limit=limit)

@router.put("/{claim_id}", response_model=Claim)
def update_claim(claim_id: int, claim_update: ClaimUpdate, db: Session = Depends(database.get_db)):
    db_claim = crud.update_claim(db, claim_id, claim_update)
    if db_claim is None:
        raise HTTPException(status_code=404, detail="Claim not found or update failed")
    return db_claim
