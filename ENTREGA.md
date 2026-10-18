# Guía de entrega — Evaluación Técnica QA

## Qué incluye esta solución

| Entregable | Ubicación |
|------------|-----------|
| Retos 1, 3, 4 y 5 | `qa-challenge-reto-emerson.docx` (oficial), `qa-challenge-reto-emerson.txt`, `qa-challenge-reto-emerson.pdf` |
| Reto 2 (automatización) | Carpeta `qaAutomationChallenge/` |
| Regenerar documentos (opcional) | `python scripts/export_emerson_docs.py` |

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

## Reto 2 — Automatización (resumen)

Documentación completa:

- **En el entregable escrito**: sección **RETO 2** en `qa-challenge-reto-emerson.docx` / `.pdf` / `.txt` (objetivo, arquitectura POM + API client, trazabilidad TC-01…TC-10, estrategia de regresión, pasos de ejecución).
- **En código**: `qaAutomationChallenge/README.md` (guía operativa y mapeo matriz → tests).

La regresión automatizada citada en el Reto 1 es la suite Playwright en `qaAutomationChallenge/` (API + E2E), alineada con los casos críticos de la matriz.

### Ejecución rápida

Con back (3000) y front (4000) en ejecución:

```bash
cd qaAutomationChallenge
npm install
npx playwright install chromium
npm run test:api   # smoke / regresión servicios
npm test           # API + E2E completa
```

Tests que fallan frente a bugs del producto (login sin validación, contraseña de 5 chars en registro) indican **incumplimiento de criterios de aceptación**, no error de la automatización.

### CI en GitHub Actions

Workflow: `.github/workflows/tests.yml` (nombre **Tests** en GitHub Actions).

## Envío

1. Enviar `qa-challenge-reto-emerson.docx` al remitente de la evaluación.  
2. Subir el proyecto a **tu** repositorio Git (nombre sugerido: `qa-challenge-reto-emerson`) e incluir la carpeta `qaAutomationChallenge`; enviar el enlace por correo.  
3. Dudas: pao_admin@utp.edu.pe  
