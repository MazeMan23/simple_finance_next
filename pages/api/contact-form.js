import LRU from "lru-cache";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_ACCOUNT,
  secure: true,
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function rateLimit(options) {
  const tokenCache = new LRU({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: (res, limit, token) =>
      new Promise((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader("X-RateLimit-Remaining", isRateLimited ? 0 : limit - currentUsage);

        return isRateLimited ? reject() : resolve();
      }),
  };
}

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const bg = require("../translations/header/bg.json").default.header;
const en = require("../translations/header/en.json").default.header;

export default async function contact(req, res) {
  try {
    await limiter.check(res, 10, "CACHE_TOKEN");
  } catch {
    res.status(429).json({ message: "Rate limit exceeded!" });
  }

  if (req.method !== "POST") {
    res.status(400).json({ message: "Wrong method type!" });
  }

  const { fullname, email, subject, message } = req.body;

  if (
    !String(email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    res.status(400).json({ message: "Invalid email!" });
    return;
  }

  let recepient = "";
  if (subject === bg.finance || subject === en.finance) {
    recepient = "accounting@simplefinance.net";
  } else if (subject === bg.it || subject === en.it) {
    recepient = "it@simplefinance.net";
  } else if (subject === bg.marketing || subject === en.marketing) {
    recepient = "marketing@simplefinance.net";
  } else if (subject === bg.legal || subject === en.legal) {
    recepient = "legal@simplefinance.net";
  } else {
    res.status(400).json({ message: "Please pick an appropriate subject!" });
    return;
  }

  await transporter.sendMail({
    from: `SimpleFinance Website <${process.env.EMAIL_ACCOUNT}>`,
    to: recepient,
    subject: "SimpleFinance Contact Form",
    html: `<b>New Contact Form Entry </b><br/><br/>Name: ${fullname}<br/>Email: ${email}<br/>Subject: ${subject}<br/>Message: ${message}`,
  });

  res.status(200).json({});
}
