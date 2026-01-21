from fastapi import FastAPI, HTTPException, Response, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from app.schemas.auth import LoginRequest

from app.auth import (
    create_access_token,
    create_refresh_token,
    SECRET_KEY,
    ALGORITHM,
)
from app.security import hash_password, verify_password

app = FastAPI()

# Allow frontend to send cookies
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────
# Fake DB (replace with MongoDB later)
# ─────────────────────────────────────────────
users_db = {
    "abc@gmail.com":{"email": "abc@gmail.com",
                     "roles": ["0069"],
    "password": hash_password("123")
    }
}


@app.post("/signup")
def signup(email: str, password: str):
    if email in users_db:
        raise HTTPException(status_code=400, detail="User already exists")

    users_db[email] = {
        "password": hash_password(password),
    }

    return {"message": "User created"}

@app.post("/login")
def login(data: LoginRequest, response: Response):
    user = users_db.get(data.email)

    if not user or not verify_password(data.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(data.email)
    refresh_token = create_refresh_token(data.email)

    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=False,            # True in production (HTTPS)
        samesite="lax",
        path="/refresh",         # IMPORTANT
        max_age=6 * 60 * 60,     # 6 hours
    )

    return {"access_token": access_token,
            "email": user["email"],
            "roles": ["0069"]}


@app.post("/refresh")
def refresh(request: Request):
    refresh_token = request.cookies.get("refresh_token")

    if not refresh_token:
        raise HTTPException(status_code=401, detail="Missing refresh token")

    try:
        payload = jwt.decode(refresh_token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload["sub"]

        if email not in users_db:
            raise HTTPException(status_code=401)
        
        user = users_db[email]

        new_access_token = create_access_token(email)
        return {"access_token": new_access_token,
                "roles": user["roles"],
                "email": user["email"]}

    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired refresh token")


security = HTTPBearer()

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    try:
        payload = jwt.decode(
            credentials.credentials,
            SECRET_KEY,
            algorithms=[ALGORITHM],
        )
        return payload["sub"]
    except JWTError:
        raise HTTPException(status_code=403, detail="Invalid access token")


@app.get("/protected")
def protected(user: str = Depends(get_current_user)):
    return {"message": f"Hello {user}"}


@app.post("/logout")
def logout(response: Response):
    response.delete_cookie("refresh_token", path="/refresh")
    return {"message": "Logged out"}
