# Guía de entrega — Evaluación Técnica QA

## Qué incluye esta solución

| Entregable | Ubicación |
|------------|-----------|
| Retos 1, 3, 4 y 5 (documento Word) | `qa-challenge-reto-candidato.docx` → **renombrar** a `qa-challenge-reto[TuNombre].docx` |
| Reto 2 (automatización) | Carpeta `qaAutomationChallenge/` |
| Generador del docx (opcional) | `scripts/generate_docx.py` |

## Cómo ejecutar la aplicación bajo prueba

Terminal 1 — backend:

```bash
cd back
npm install
npm start
```

Terminal 2 — frontend:

```bash
cd front
npm install
npm start
```

- Registro: http://localhost:4000/register  
- Login: http://localhost:4000/login  
- API: http://localhost:3000  

## Cómo ejecutar la automatización (Reto 2)

Con back y front en ejecución:

```bash
cd qaAutomationChallenge
npm install
npx playwright install chromium
npm test
```

Algunos tests **fallan a propósito** frente a los bugs del código de referencia (login sin validación, contraseña de 5 caracteres en registro). Eso demuestra que la regresión detecta incumplimientos de los criterios de aceptación.

## Envío

1. Enviar el `.docx` al remitente de la evaluación.  
2. Subir este proyecto (o al menos `qaAutomationChallenge`) a **tu** repositorio Git y enviar el enlace por correo (según README del challenge).  
3. Dudas: pao_admin@utp.edu.pe  
