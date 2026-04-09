from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
import os
from datetime import datetime

app = FastAPI(title="CarboZé Shot API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://shot.carboze.com.br", "http://localhost:5173", "http://localhost:4173"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


@app.get("/api/health")
def health():
    return {"status": "ok", "timestamp": datetime.utcnow().isoformat()}


@app.get("/api/product")
def get_product():
    return {
        "name": "CarboZé Shot",
        "volume": "10 mL",
        "type": "Estabilizador e otimizador de combustível",
        "compatibility": "Todos os tipos de combustíveis",
        "target": "Motocicletas",
        "dosage": {
            "standard": "1 mL por litro (1:1000)",
            "shock": "1 mL por 500 mL (1:500)",
            "max": "2 mL/L",
        },
        "benefits": [
            "Protege o combustível",
            "Mais potência e desempenho",
            "Reduz o consumo",
            "Reduz a manutenção do motor",
        ],
        "legal": {
            "manufacturer": "GB COMERCIO INTERNACIONAL LTDA",
            "cnpj": "70.159.512/0001-80",
            "packager": "RESINORTE INDUSTRIA DE POLIMEROS S/A",
            "chemist": "CRQ nº 04219953",
            "sac": "sac@carboze.com.br",
        },
    }


@app.post("/api/contact")
def contact(form: ContactForm):
    # Validação básica
    if len(form.message.strip()) < 10:
        raise HTTPException(status_code=400, detail="Mensagem muito curta.")

    # Log (em produção: enviar email via SMTP ou SendGrid)
    print(f"[{datetime.utcnow().isoformat()}] Contato de {form.name} <{form.email}>: {form.message}")

    # TODO: configurar SMTP_HOST, SMTP_USER, SMTP_PASS no .env para envio real
    return {"success": True, "message": "Mensagem recebida. Entraremos em contato em breve."}
