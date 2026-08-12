import emailjs from "@emailjs/browser";
import { site } from "../data/site";

const serviceId = (process.env.REACT_APP_EMAILJS_SERVICE_ID || "").trim();
const templateId = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "").trim();
const publicKey = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "").trim();

export function isEmailConfigured() {
  return Boolean(
    serviceId &&
      templateId &&
      publicKey &&
      !serviceId.includes("your_") &&
      !templateId.includes("your_") &&
      !publicKey.includes("your_")
  );
}

export async function sendContactEmail({ name, email, message }) {
  if (!isEmailConfigured()) {
    const subject = encodeURIComponent(`Contact portfolio - ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    return { fallback: "mailto" };
  }

  try {
    // Variables compatibles avec le formulaire + templates EmailJS courants
    return await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: name,
        from_email: email,
        message,
        reply_to: email,
        name,
        email,
        title: message,
      },
      { publicKey }
    );
  } catch (err) {
    const detail =
      err?.text ||
      err?.message ||
      (typeof err === "string" ? err : "Erreur EmailJS");
    const error = new Error(detail);
    error.status = err?.status;
    throw error;
  }
}
