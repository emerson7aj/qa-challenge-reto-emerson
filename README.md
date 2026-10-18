# qa-challenge-reto-emerson

Entrega — **Evaluación Técnica QA (UTP)** · Emerson Aldaba  

Historia de usuario: **registro** y **login** (validación front + back).  
Automatización **Reto 2** en [`qaAutomationChallenge/`](qaAutomationChallenge/).

## Entregables

| Reto | Dónde |
|------|--------|
| 1, 3, 4, 5 (respuestas escritas) | [`qa-challenge-reto-emerson.docx`](qa-challenge-reto-emerson.docx) · [`.txt`](qa-challenge-reto-emerson.txt) · [`.pdf`](qa-challenge-reto-emerson.pdf) |
| 2 (automatización E2E + API) | [`qaAutomationChallenge/`](qaAutomationChallenge/) |

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior  
- Git  

## Instalación

```bash
git clone https://github.com/emerson7aj/qa-challenge-reto-emerson.git
cd qa-challenge-reto-emerson

cd back && npm install && cd ..
cd front && npm install && cd ..
cd qaAutomationChallenge && npm install && npx playwright install chromium && cd ..
```

## Ejecución local

**Terminal 1 — API (puerto 3000)**

```bash
cd back
npm start
```

**Terminal 2 — UI (puerto 4000)**

```bash
cd front
npm start
```

| Recurso | URL |
|---------|-----|
| Registro | http://localhost:4000/register |
| Login | http://localhost:4000/login |
| API | http://localhost:3000 |

**Terminal 3 — tests automatizados (Reto 2)**

Con back y front en ejecución:

```bash
cd qaAutomationChallenge
npm test              # API + E2E
npm run test:api      # solo servicios
npm run test:e2e      # solo navegador
npm run report        # reporte HTML (tras una corrida)
```

Detalle de arquitectura y trazabilidad TC-01…TC-10: [`qaAutomationChallenge/README.md`](qaAutomationChallenge/README.md).

## GitHub Actions

Workflow: **[Tests](.github/workflows/tests.yml)**  

Se ejecuta en cada **push** o **pull request** a `main` (también manual en *Actions → Tests → Run workflow*).

1. Instala dependencias (`back`, `front`, `qaAutomationChallenge`).  
2. Levanta backend y frontend.  
3. Ejecuta Playwright (`npm test`).  
4. Guarda el reporte como artefacto **playwright-report**.

Ver ejecuciones: [Actions](https://github.com/emerson7aj/qa-challenge-reto-emerson/actions).

## Estructura del repo

```
back/                    # API Express (register, login)
front/                   # UI estática + servidor Express
qaAutomationChallenge/   # Playwright — Reto 2
qa-challenge-reto-emerson.docx
scripts/                 # exportación docx/txt/pdf (opcional)
```

## Contacto evaluación

Dudas: **pao_admin@utp.edu.pe**
