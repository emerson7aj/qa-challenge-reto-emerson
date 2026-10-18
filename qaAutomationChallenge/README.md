# qaAutomationChallenge

Automatización de regresión (API + E2E) para la historia de **Registro** y **Login** del challenge QA UTP.

## Arquitectura

- **Page Object Model** (`src/pages`) para la UI.
- **Cliente API** reutilizable (`src/api/AuthApiClient.ts`) para pruebas de servicio.
- **Proyectos Playwright separados**: `api` y `e2e-chromium`.
- Casos alineados con la matriz del Reto 1 (TC-01 … TC-10).

## Requisitos

- Node.js 18+
- Servicios del challenge en ejecución:
  - Backend: `cd ../back && npm start` → `http://localhost:3000`
  - Frontend: `cd ../front && npm start` → `http://localhost:4000`

## Instalación

```bash
cd qaAutomationChallenge
npm install
npx playwright install chromium
```

## Ejecución

```bash
npm test          # API + E2E
npm run test:api  # Solo servicios
npm run test:e2e  # Solo navegador
npm run report    # Reporte HTML
```

Variables opcionales: `API_BASE_URL`, `UI_BASE_URL`.

## Nota sobre defectos conocidos

Algunos tests documentan el comportamiento **esperado según criterios de aceptación**. Si la aplicación bajo prueba tiene bugs (p. ej. login siempre exitoso, contraseña de 5 caracteres rechazada en registro), esos tests fallarán hasta que se corrija el producto — comportamiento intencional para regresión.
