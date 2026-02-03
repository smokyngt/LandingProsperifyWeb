// import { Resend } from "resend";
// import { z } from "zod";

// const resend = process.env.RESEND_API_KEY
//   ? new Resend(process.env.RESEND_API_KEY)
//   : null;

// // Validation Zod
// export const contactSchema = z.object({
//   name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
//   company: z.string().min(2, "Le nom de l’entreprise doit contenir au moins 2 caractères"),
//   email: z.string().email("Veuillez entrer une adresse email valide"),
//   phone: z.string().regex(/^[0-9+\s()-]*$/, "Numéro de téléphone invalide").optional(),
//   subject: z.enum(["information", "partnership", "support", "other"]),
//   message: z.string().min(5, "Le message doit contenir au moins 5 caractères"),
// });

// // 🔒 Simple escape pour éviter HTML injection
// function escape(str: string) {
//   return str.replace(/[&<>"']/g, (match) => {
//     const escapeMap: Record<string, string> = {
//       "&": "&amp;",
//       "<": "&lt;",
//       ">": "&gt;",
//       '"': "&quot;",
//       "'": "&#39;",
//     };
//     return escapeMap[match] || match;
//   });
// }

// // Génération HTML email
// function htmlTemplate(data: {
//   name: string;
//   company: string;
//   email: string;
//   phone?: string;
//   subject: string;
//   message: string;
// }) {
//   return `
//     <div style="font-family: Arial, sans-serif; line-height:1.5;">
//       <h2 style="color:#2563eb">📩 Nouveau message du site</h2>
//       <p><strong>Nom :</strong> ${escape(data.name)}</p>
//       <p><strong>Entreprise :</strong> ${escape(data.company)}</p>
//       <p><strong>Email :</strong> ${escape(data.email)}</p>
//       ${data.phone ? `<p><strong>Téléphone :</strong> ${escape(data.phone)}</p>` : ""}
//       <p><strong>Sujet :</strong> ${escape(data.subject)}</p>
//       <p><strong>Message :</strong></p>
//       <div style="padding:10px; border:1px solid #ddd; border-radius:5px; background:#f9f9f9;">
//         ${escape(data.message)}
//       </div>
//       <p style="font-size:12px; color:#666; margin-top:20px;">
//         Cet email a été envoyé automatiquement depuis le formulaire de contact de
//         <strong>prosperify.app</strong>.
//       </p>
//     </div>
//   `;
// }

// // Fonction réutilisable (Next.js + Cloudflare)
// export async function handleContact(request: Request) {
//   const body = await request.json();
//   const parsed = contactSchema.safeParse(body);

//   if (!parsed.success) {
//     const errors = parsed.error.issues.map((issue) => ({
//       field: issue.path[0],
//       message: issue.message,
//     }));
//     return new Response(JSON.stringify({ success: false, errors }), {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   if (!resend) {
//     return new Response(
//       JSON.stringify({ success: false, error: "API key manquante" }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }

//   const { name, company, email, phone, subject, message } = parsed.data;
//   const html = htmlTemplate({ name, company, email, phone, subject, message });

//   await resend.emails.send({
//     from: "Prosperify <contact@prosperify.app>",
//     to: "brikielyes9@gmail.com",
//     subject: `Nouveau message de ${escape(name)}`,
//     replyTo: escape(email),
//     html,
//   });

//   return new Response(JSON.stringify({ success: true }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// }
