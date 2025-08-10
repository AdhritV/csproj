export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function normalizeVariables(raw) {
  const vars = {};
  for (const k in raw) {
    vars[k.toLowerCase()] = getRandomInt(raw[k].min, raw[k].max);
  }
  return vars;
}

export function evaluateExpression(expr, vars) {
  const safe = expr.replace(/\b[a-z]\b/gi, m => vars[m.toLowerCase()]);
  return Function('"use strict"; return (' + safe + ')')();
}

export function evaluateExplanationLine(line, vars) {
  let t = line.replace(/#([a-z])#/gi, (_, k) => vars[k.toLowerCase()]);
  t = t.replace(/@([^@]+)@/g, (_, e) => evaluateExpression(e, vars));
  return t.replace(/\[([^\]]+)\]/g, (_, m) => `\\(${m}\\)`);
}