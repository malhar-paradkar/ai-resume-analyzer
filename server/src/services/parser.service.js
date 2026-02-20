import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import mammoth from "mammoth";

export const parsePDF = async (buffer) => {
  const uint8Array = new Uint8Array(buffer);

  const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    text += strings.join(" ") + " ";
  }

  return text.trim();
};

export const parseDOCX = async (buffer) => {
  const result = await mammoth.extractRawText({ buffer });
  return result.value.trim();
};