# RETO 2 — qaAutomationChallenge

Automatización de **regresión** para la historia de usuario **Registro** y **Login**, alineada con la matriz de casos del Reto 1 (TC-01 … TC-10).

## Objetivo del reto

Demostrar un modelo de automatización **mantenible y escalable** que:

1. Cubra los casos clave de la matriz (regresión exitosa ante cambios).
2. Separe pruebas de **servicio (API)** y **interfaz (E2E)** sin duplicar lógica innecesaria.
3. Pueda ejecutarse en local y, en una siguiente iteración, en CI (QA/staging).

## Stack elegido

| Capa | Herramienta | Motivo |
|------|-------------|--------|
| API | Playwright `request` | Mismo runner, mismos reportes y configuración que E2E |
| E2E web | Playwright + Chromium | Estable, rápido, trace/screenshot/video en fallos |
| Lenguaje | TypeScript | Tipado, refactor seguro en Page Objects y clientes API |

## Arquitectura (capas)

```
tests/          → Escenarios (Given/When/Then a nivel negocio)
  api/          → Contratos HTTP, códigos y mensajes JSON
  e2e/          → Flujos UI contra front + back reales
src/
  pages/        → Page Object Model (selectores y acciones)
  api/          → Cliente reutilizable (AuthApiClient)
  config/       → URLs por ambiente (env.ts + variables de entorno)
playwright.config.ts → Proyectos api | e2e-chromium, reporters, retries
```

### Buenas prácticas aplicadas

- **POM**: los specs no contienen selectores `#email`, `#register`; viven en `RegisterPage` / `LoginPage`.
- **Cliente API único**: status HTTP y campo `msg` se validan en un solo lugar (`expectJson`).
- **Config por ambiente**: `API_BASE_URL` y `UI_BASE_URL` sin hardcode en cada test.
- **Proyectos separados**: `npm run test:api` para feedback rápido; `npm run test:e2e` cuando se valida integración.
- **Tests deterministas**: sin dependencia de orden; datos de email únicos por escenario cuando hace falta.
- **Fallos accionables**: capturas y video en E2E; trazas en reintento (`trace: on-first-retry`).

## Trazabilidad matriz Reto 1 → tests

| ID | Descripción (resumen) | Archivo |
|----|------------------------|---------|
| TC-01 | Registro exitoso API | `tests/api/register.api.spec.ts` |
| TC-02 | Campos vacíos → REQUIRED | `register.api.spec.ts`, `login.api.spec.ts` |
| TC-03 | Email sin @ registro | `register.api.spec.ts` |
| TC-04 | Pass 4 chars registro | `register.api.spec.ts` |
| TC-05 | Boundary pass 5 chars | `register.api.spec.ts` |
| TC-06 | Registro UI (SAVED/REQUIRED/INVALID) | `tests/e2e/register.e2e.spec.ts` |
| TC-07 | Login credenciales inválidas | `tests/api/login.api.spec.ts` |
| TC-08 | Login email sin @ | `login.api.spec.ts` |
| TC-09 | Login pass &lt; 5 | `login.api.spec.ts` |
| TC-10 | Login UI REQUIRED / INVALID | `tests/e2e/login.e2e.spec.ts` |

## Estrategia de regresión

1. **Tras cada cambio en back o front**: ejecutar `npm run test:api` (smoke de reglas de negocio).
2. **Antes de certificar la HU o un release en QA**: ejecutar `npm test` (API + E2E).
3. **Interpretación**: los tests validan **criterios de aceptación**, no el comportamiento erróneo actual. Si la app tiene bugs conocidos (login siempre OK, registro rechaza 5 caracteres), la suite **debe fallar** hasta corregir el producto — eso es regresión efectiva.

## Requisitos previos

- Node.js 18+
- Aplicación del challenge en ejecución:
  - **Backend**: `cd ../back && npm install && npm start` → http://localhost:3000
  - **Frontend**: `cd ../front && npm install && npm start` → http://localhost:4000

## Instalación

```bash
cd qaAutomationChallenge
npm install
npx playwright install chromium
```

## Ejecución

```bash
npm test              # Regresión completa (API + E2E)
npm run test:api      # Solo servicios — ideal smoke diario
npm run test:e2e      # Solo navegador
npm run test:headed   # E2E con ventana visible (depuración)
npm run report        # Abrir reporte HTML de la última corrida
```

Variables opcionales:

```bash
set API_BASE_URL=http://localhost:3000
set UI_BASE_URL=http://localhost:4000
```

## GitHub Actions

Workflow **[Reto Tecnico CI](../.github/workflows/reto-tecnico-ci.yml)**: push/PR a `main` → instala deps, levanta back/front, ejecuta `npm test`, artefacto `playwright-report`.

## Escalabilidad (próximos pasos)

- Etiquetas `@smoke` en CI para subset verde mientras se corrigen bugs del producto.
- Etiquetas `@smoke` / `@regression` para subsets.
- Más Page Objects si se añaden pantallas; mismo patrón para nuevos endpoints.

## Enlace con Reto 1

La frase *«Regresión automatizada sobre casos críticos (Reto 2)»* en el Reto 1 se concreta en **esta carpeta**: los casos de prioridad Alta de la matriz están implementados aquí y documentados en la sección **RETO 2** del archivo `qa-challenge-reto-emerson.docx` / `.pdf` / `.txt`.
