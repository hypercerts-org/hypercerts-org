/* Serializes structured data for a <script type="application/ld+json">
   block. JSON.stringify leaves "<", ">" and "&" as-is, so a string value
   containing "</script>" would close the element and let the rest be parsed
   as HTML. Escaping them as JSON \u sequences keeps the markup inert while
   JSON parsers still read back the exact same data. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
