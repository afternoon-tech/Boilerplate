from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from ExpensesRepository import ExpensesRepository


app = FastAPI()

# Not safe! Add your own allowed domains
origins = [
    "*",
] 

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/expenses")
def read_expenses():
    repository = ExpensesRepository()
    return repository.get_all()
