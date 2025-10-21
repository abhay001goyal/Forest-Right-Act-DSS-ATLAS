from sqlalchemy.orm import Session
from . import models, schemas

def get_claim(db: Session, claim_id: int):
    return db.query(models.Claim).filter(models.Claim.id == claim_id).first()

def get_claims(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Claim).offset(skip).limit(limit).all()

def create_claim(db: Session, claim: schemas.ClaimCreate):
    db_claim = models.Claim(**claim.dict())
    db.add(db_claim)
    db.commit()
    db.refresh(db_claim)
    return db_claim

def update_claim(db: Session, claim_id: int, claim_update: schemas.ClaimUpdate):
    db_claim = get_claim(db, claim_id)
    if not db_claim:
        return None
    for var, value in vars(claim_update).items():
        if value is not None:
            setattr(db_claim, var, value)
    db.commit()
    db.refresh(db_claim)
    return db_claim
