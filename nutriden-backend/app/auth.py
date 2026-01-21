from datetime import datetime, timedelta
from jose import jwt

SECRET_KEY = "Pod@Venn@"
ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 10
REFRESH_TOKEN_EXPIRE_HOURS = 60


def create_access_token(subject: str) -> str:
    expire = datetime.utcnow() + timedelta(seconds=ACCESS_TOKEN_EXPIRE_MINUTES)
    payload = {"sub": subject, "exp": expire}
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def create_refresh_token(subject: str) -> str:
    expire = datetime.utcnow() + timedelta(seconds=REFRESH_TOKEN_EXPIRE_HOURS)
    payload = {"sub": subject, "exp": expire}
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
