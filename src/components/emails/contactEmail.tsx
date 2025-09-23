import * as React from "react";

interface ContactEmailProps {
  name: string;
  company: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const ContactEmail = ({
  name,
  company,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
    <h2 style={{ color: "#2563eb" }}>📩 Nouveau message du site</h2>
    <p><strong>Nom :</strong> {name}</p>
    <p><strong>Entreprise :</strong> {company}</p>
    <p><strong>Email :</strong> {email}</p>
    {phone && <p><strong>Téléphone :</strong> {phone}</p>}
    <p><strong>Sujet :</strong> {subject}</p>
    <p><strong>Message :</strong></p>
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#f9f9f9",
      }}
    >
      {message}
    </div>
    <p
      style={{
        fontSize: "12px",
        color: "#666",
        marginTop: "20px",
      }}
    >
      Cet email a été envoyé automatiquement depuis le formulaire de contact de{" "}
      <strong>prosperify.app</strong>.
    </p>
  </div>
);
