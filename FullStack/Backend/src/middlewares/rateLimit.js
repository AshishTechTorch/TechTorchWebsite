// Small dependency-free rate limiter (in-memory, per server instance).
// Slows down password guessing / OTP abuse / signup spam.
// Note: on serverless hosts each instance keeps its own counters, so for a hard
// global limit put Cloudflare / Vercel Firewall rules in front as well.
const rateLimit = ({ windowMs, max, message = "Too many requests. Please try again later." }) => {
  const hits = new Map();

  const timer = setInterval(() => {
    const now = Date.now();
    for (const [key, v] of hits) if (v.resetAt <= now) hits.delete(key);
  }, Math.min(windowMs, 60 * 1000));
  if (timer.unref) timer.unref();

  return (req, res, next) => {
    const now = Date.now();
    const key = req.ip || req.socket?.remoteAddress || "unknown";
    let entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      entry = { count: 0, resetAt: now + windowMs };
      hits.set(key, entry);
    }
    entry.count += 1;

    if (entry.count > max) {
      res.set("Retry-After", String(Math.ceil((entry.resetAt - now) / 1000)));
      return res.status(429).json({ success: false, message });
    }
    next();
  };
};

module.exports = rateLimit;
