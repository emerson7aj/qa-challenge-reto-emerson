"""Regenera docx y exporta TXT + PDF para qa-challenge-reto-emerson."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCX = ROOT / "qa-challenge-reto-emerson.docx"
TXT = ROOT / "qa-challenge-reto-emerson.txt"
PDF = ROOT / "qa-challenge-reto-emerson.pdf"

sys.path.insert(0, str(Path(__file__).resolve().parent))
import generate_docx  # noqa: E402


def docx_to_lines(docx_path: Path) -> list[str]:
    from docx import Document
    from docx.table import Table
    from docx.text.paragraph import Paragraph

    doc = Document(docx_path)
    lines: list[str] = []

    def append_paragraph(p: Paragraph) -> None:
        text = p.text.strip()
        if not text:
            lines.append("")
            return
        style = (p.style.name or "").lower()
        if "heading 1" in style:
            lines.extend(["", "=" * 72, text.upper(), "=" * 72, ""])
        elif "heading 2" in style:
            lines.extend(["", text, "-" * len(text), ""])
        elif "heading 3" in style:
            lines.extend(["", f"### {text}", ""])
        elif "list bullet" in style:
            lines.append(f"  • {text}")
        else:
            lines.append(text)

    def append_table(table: Table) -> None:
        rows = [[cell.text.strip().replace("\n", " ") for cell in row.cells] for row in table.rows]
        if not rows:
            return
        widths = [max(len(rows[r][c]) for r in range(len(rows))) for c in range(len(rows[0]))]
        sep = "+-" + "-+-".join("-" * w for w in widths) + "-+"

        def fmt_row(cells: list[str]) -> str:
            return "| " + " | ".join(c.ljust(widths[i]) for i, c in enumerate(cells)) + " |"

        lines.append("")
        lines.append(sep)
        lines.append(fmt_row(rows[0]))
        lines.append(sep)
        for row in rows[1:]:
            lines.append(fmt_row(row))
        lines.append(sep)
        lines.append("")

    for block in doc.element.body:
        tag = block.tag.split("}")[-1]
        if tag == "p":
            append_paragraph(Paragraph(block, doc))
        elif tag == "tbl":
            append_table(Table(block, doc))

    while lines and lines[0] == "":
        lines.pop(0)
    return lines


def write_txt(lines: list[str], txt_path: Path) -> None:
    content = "\r\n".join(lines) + "\r\n"
    txt_path.write_bytes(content.encode("utf-8-sig"))


def write_pdf(lines: list[str], pdf_path: Path) -> None:
    from fpdf import FPDF

    font_dir = Path(r"C:\Windows\Fonts")
    regular = font_dir / "arial.ttf"
    bold = font_dir / "arialbd.ttf"
    if not regular.is_file():
        raise FileNotFoundError("No se encontró arial.ttf en C:\\Windows\\Fonts")

    pdf = FPDF(format="A4")
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.set_margins(18, 18, 18)
    pdf.add_font("ArialUni", "", str(regular))
    pdf.add_font("ArialUni", "B", str(bold) if bold.is_file() else str(regular))
    pdf.add_page()
    w = pdf.epw

    for line in lines:
        if line.startswith("=" * 10):
            pdf.ln(2)
            continue
        if line.startswith("-" * 5) and len(line) > 20:
            continue
        if line.startswith("|"):
            pdf.set_font("ArialUni", size=7)
            pdf.multi_cell(w, 3.5, line)
            pdf.set_font("ArialUni", size=10)
            continue
        if line.startswith("### "):
            pdf.set_font("ArialUni", "B", 11)
            pdf.multi_cell(w, 6, line[4:])
            pdf.set_font("ArialUni", size=10)
            continue
        if line.isupper() and len(line) > 8 and not line.startswith("|"):
            pdf.set_font("ArialUni", "B", 12)
            pdf.multi_cell(w, 7, line)
            pdf.set_font("ArialUni", size=10)
            continue
        pdf.set_font("ArialUni", size=10)
        pdf.multi_cell(w, 5, line if line else " ")

    pdf.output(str(pdf_path))


def main() -> None:
    if DOCX.exists():
        DOCX.unlink()
    generate_docx.main()

    lines = docx_to_lines(DOCX)
    write_txt(lines, TXT)
    write_pdf(lines, PDF)
    print(f"Generado: {DOCX}")
    print(f"Generado: {TXT}")
    print(f"Generado: {PDF}")


if __name__ == "__main__":
    main()
