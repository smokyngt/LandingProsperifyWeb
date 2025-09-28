"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import DOMPurify from "dompurify";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (value: string) => {
    setForm({ ...form, subject: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("⏳ Envoi en cours...");
    setErrors({});

    // 🔒 Nettoyage côté client
    const safeForm = {
      name: DOMPurify.sanitize(form.name),
      company: DOMPurify.sanitize(form.company),
      email: DOMPurify.sanitize(form.email),
      phone: DOMPurify.sanitize(form.phone || ""),
      subject: DOMPurify.sanitize(form.subject),
      message: DOMPurify.sanitize(form.message),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(safeForm),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message envoyé !");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else if (data.errors) {
        const errorMap: Record<string, string> = {};
        data.errors.forEach((err: any) => {
          errorMap[err.field] = err.message;
        });
        setErrors(errorMap);
        setStatus("❌ Merci de corriger les erreurs ci-dessus.");
      } else {
        setStatus("❌ Erreur inattendue.");
      }
    } catch {
      setStatus("❌ Erreur d’envoi.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      {/* Nom complet */}
      <input
        type="text"
        name="name"
        placeholder="Votre nom complet"
        value={form.name}
        maxLength={20}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      {/* Entreprise */}
      <input
        type="text"
        name="company"
        placeholder="Nom de votre entreprise"
        value={form.company}
        maxLength={20}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />
      {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}

      {/* Email */}
      <input
        type="email"
        name="email"
        maxLength={30}
        placeholder="Votre email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      {/* Téléphone */}
     <div className="flex gap-2">

  <input
    type="tel"
    name="phone"
    placeholder="Téléphone (optionnel)"
    value={form.phone}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
    pattern="[0-9+]{6,15}"
    maxLength={15}
  />
</div>
{errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      {/* Sujet (Select Shadcn) */}
      <Select onValueChange={handleSubjectChange} value={form.subject}>
        <SelectTrigger className="w-full border rounded-lg p-3">
          <SelectValue placeholder="Sélectionnez l’objet" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="information">Demande d’information</SelectItem>
          <SelectItem value="partnership">Devis / Partenariat</SelectItem>
          <SelectItem value="other">Autre</SelectItem>
        </SelectContent>
      </Select>
      {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

      {/* Message */}
      <textarea
  name="message"
  placeholder="Votre message"
  value={form.message}
  onChange={handleChange}
  required
  rows={5}
  minLength={10}
  maxLength={1000}
  className="w-full border rounded-lg p-3 resize-y min-h-[120px] max-h-[300px]"
/>
      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

      {/* Bouton */}
      <button
        type="submit"
        disabled={status === "⏳ Envoi en cours..."}
        className="w-full bg-white text-orange-500 font-medium py-3 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Envoyer
      </button>

      {status && <p className="mt-4 text-center text-sm">{status}</p>}
    </form>
  );
}
