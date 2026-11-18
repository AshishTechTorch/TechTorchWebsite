// Removes MongoDB operator keys ("$gt", "$ne", ...) from request bodies so a visitor
// cannot turn a normal field into a query operator (NoSQL injection).
const clean = (value) => {
  if (Array.isArray(value)) return value.map(clean);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k.startsWith("$")) continue;
      out[k] = clean(v);
    }
    return out;
  }
  return value;
};

const sanitizeBody = (req, res, next) => {
  if (req.body && typeof req.body === "object") req.body = clean(req.body);
  next();
};

module.exports = sanitizeBody;
