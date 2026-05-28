"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const inquiryTypes = [
  { value: "account",    label: "Account Opening" },
  { value: "platform",   label: "Platform Support" },
  { value: "funding",    label: "Funding & Withdrawals" },
  { value: "compliance", label: "Compliance & KYC" },
  { value: "partner",    label: "Partnership / IB Program" },
  { value: "technical",  label: "Technical Support" },
  { value: "other",      label: "Other" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ lang = "en" }: { lang?: "en" | "es" }) {
  const [status, setStatus] = useState<Status>("idle");

  const t = {
    en: {
      heading:     "Send a Message",
      name:        "Full Name",
      email:       "Email Address",
      inquiry:     "Inquiry Type",
      phone:       "Phone / WhatsApp",
      country:     "Country of Residence",
      message:     "Message",
      namePh:      "John Smith",
      emailPh:     "you@example.com",
      phonePh:     "+1 234 567 8900",
      countryPh:   "e.g. Colombia, Brazil, UAE...",
      messagePh:   "Describe your inquiry...",
      disclaimer:  "By submitting this form you confirm that you have read the Risk Warning and understand that trading involves significant risk of loss. ARKA does not accept clients from the United States.",
      submit:      "Send Message",
      sending:     "Sending...",
      orEmail:     "Or email directly:",
      successHead: "Message sent!",
      successSub:  "We'll get back to you within 24 hours.",
      errorHead:   "Something went wrong.",
      errorSub:    "Please email us directly at contacto@arkaltd.io",
      required:    "*",
    },
    es: {
      heading:     "Enviar un Mensaje",
      name:        "Nombre Completo",
      email:       "Correo Electrónico",
      inquiry:     "Tipo de Consulta",
      phone:       "Teléfono / WhatsApp",
      country:     "País de Residencia",
      message:     "Mensaje",
      namePh:      "Juan García",
      emailPh:     "tu@correo.com",
      phonePh:     "+52 55 1234 5678",
      countryPh:   "Ej. Colombia, México, Argentina...",
      messagePh:   "Describe tu consulta...",
      disclaimer:  "Al enviar este formulario confirmas que has leído el Aviso de Riesgo y entiendes que el trading implica un riesgo significativo de pérdida. ARKA no acepta clientes de Estados Unidos.",
      submit:      "Enviar Mensaje",
      sending:     "Enviando...",
      orEmail:     "O escríbenos directamente a:",
      successHead: "¡Mensaje enviado!",
      successSub:  "Te responderemos en las próximas 24 horas.",
      errorHead:   "Algo salió mal.",
      errorSub:    "Por favor escríbenos a contacto@arkaltd.io",
      required:    "*",
    },
  }[lang];

  const inquiryLabels: Record<string, string> = lang === "es" ? {
    account:    "Apertura de Cuenta",
    platform:   "Soporte de Plataforma",
    funding:    "Depósitos y Retiros",
    compliance: "Cumplimiento y KYC",
    partner:    "Programa IB / Socio",
    technical:  "Soporte Técnico",
    other:      "Otro",
  } : Object.fromEntries(inquiryTypes.map(({ value, label }) => [value, label]));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Build subject from inquiry type
    const inquiryValue = data.get("inquiry_type") as string;
    const inquiryLabel = inquiryLabels[inquiryValue] ?? inquiryValue;
    data.append("subject", `[ARKA Contact] ${inquiryLabel} — ${data.get("name")}`);
    data.append("from_name", "ARKA Website Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-arka-white mb-8">{t.heading}</h2>
        <div className="flex flex-col items-center justify-center gap-4 py-16 border border-arka-border rounded-lg bg-arka-elevated">
          <CheckCircle size={40} className="text-arka-turquoise" />
          <div className="text-center">
            <p className="text-arka-white font-semibold text-lg">{t.successHead}</p>
            <p className="text-arka-gray text-sm mt-1">{t.successSub}</p>
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-5 py-2 border border-arka-border rounded text-arka-gray text-sm hover:text-arka-white hover:border-arka-turquoise/40 transition-colors"
          >
            {lang === "es" ? "Enviar otro mensaje" : "Send another message"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-arka-white mb-8">{t.heading}</h2>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 mb-5 rounded-lg border border-red-500/30 bg-red-500/10">
          <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-400 text-sm font-medium">{t.errorHead}</p>
            <p className="text-arka-gray text-xs mt-0.5">{t.errorSub}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Web3Forms access key */}
        <input type="hidden" name="access_key" value="c07ef8bd-bec9-4049-bc85-20f80aba1f80" />
        <input type="hidden" name="botcheck" value="" className="hidden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
              {t.name} {t.required}
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder={t.namePh}
              className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
            />
          </div>
          <div>
            <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
              {t.email} {t.required}
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder={t.emailPh}
              className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
            {t.phone}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={t.phonePh}
            className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
            {t.inquiry}
          </label>
          <select
            name="inquiry_type"
            className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm focus:outline-none focus:border-arka-turquoise/60 transition-colors appearance-none"
          >
            {inquiryTypes.map(({ value }) => (
              <option key={value} value={value}>
                {inquiryLabels[value]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
            {t.country}
          </label>
          <input
            type="text"
            name="country"
            placeholder={t.countryPh}
            className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
            {t.message} {t.required}
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t.messagePh}
            className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors resize-none"
          />
        </div>

        <div className="bg-arka-midnight border border-arka-border rounded p-4">
          <p className="text-arka-gray text-xs leading-relaxed">{t.disclaimer}</p>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              {t.sending}
            </>
          ) : t.submit}
        </button>

        <p className="text-arka-gray text-xs text-center">
          {t.orEmail}{" "}
          <a href="mailto:contacto@arkaltd.io" className="text-arka-turquoise hover:text-arka-white transition-colors">
            contacto@arkaltd.io
          </a>
        </p>
      </form>
    </div>
  );
}
