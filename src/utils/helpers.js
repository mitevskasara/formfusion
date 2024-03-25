import maskInput from "../utils/mask";

export function parseEntries(obj) {
  for (const [key, value] of Object.entries(obj)) {
    try {
      const parsed = JSON.parse(value);
      obj[key] = parsed;
    } catch (_error) { }
  }
  return obj;
}

export function onPaste(e) {
  const { dataset } = e.target;
  let paste = (e.clipboardData || window.clipboardData).getData("text");
  const mask = dataset.mask;
  if (mask) {
    e.target.value = maskInput(mask, paste);
  }
}
