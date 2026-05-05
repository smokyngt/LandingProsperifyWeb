"use client"
import { useState, useEffect, useRef } from "react"
import {
  FileText,
  Search,
  Filter,
  History,
  Settings,
  MessageSquare,
  Send,
  Paperclip,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
} from "lucide-react"

/* ─── Animated Message ─── */
function Msg({
  children,
  align,
  delay,
  bg,
  color,
  border,
  maxWidth,
  started,
}: {
  children: React.ReactNode
  align?: "left" | "right"
  delay: number
  bg?: string
  color?: string
  border?: string
  maxWidth?: number
  started: boolean
}) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!started) return
    const t = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(t)
  }, [started, delay])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(14px)",
        transition: "all 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
    >
      <div
        style={{
          background: bg || "#f3f4f6",
          color: color || "#374151",
          borderRadius: 12,
          padding: "9px 13px",
          fontSize: 12.5,
          lineHeight: 1.4,
          maxWidth: maxWidth || 340,
          border: border || "1px solid #e5e7eb",
        }}
      >
        {children}
      </div>
    </div>
  )
}

/* ─── Typing Dots ─── */
function Dots({ started, delay }: { started: boolean; delay: number }) {
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(false)
  useEffect(() => {
    if (!started) return
    const t1 = setTimeout(() => setShow(true), delay)
    const t2 = setTimeout(() => setHide(true), delay + 1500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [started, delay])

  if (!show || hide) return null

  return (
    <div
      style={{
        display: "flex",
        gap: 5,
        padding: "11px 15px",
        background: "#f3f4f6",
        borderRadius: 12,
        width: "fit-content",
        border: "1px solid #e5e7eb",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: 99,
            background: "#9ca3af",
            animation: `dotPulse 1s ${i * 0.15}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/* ─── Timestamp ─── */
function TimeStamp({
  children,
  delay,
  started,
}: {
  children: React.ReactNode
  delay: number
  started: boolean
}) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!started) return
    const t = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(t)
  }, [started, delay])

  return (
    <div
      style={{
        fontSize: 10.5,
        color: "#9ca3af",
        fontFamily: "JetBrains Mono, monospace",
        opacity: show ? 1 : 0,
        transition: "opacity 0.3s",
      }}
    >
      {children}
    </div>
  )
}

/* ─── Sidebar ─── */
function Sidebar() {
  const navItems = [
    { icon: <MessageSquare size={15} />, label: "Nouvelle conversation" },
    { icon: <Search size={15} />, label: "Rechercher" },
    { icon: <Filter size={15} />, label: "Filtres" },
    { icon: <History size={15} />, label: "Historique" },
    { icon: <Settings size={15} />, label: "Paramètres" },
  ]
  const convos = [
    { label: "contrat verdi", active: true },
    { label: "Budget Q4", active: false },
    { label: "Procédures RH", active: false },
    { label: "Rapport mensuel", active: false },
  ]

  return (
    <div
      style={{
        width: 180,
        background: "#fafafa",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column" as const,
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div style={{ padding: "18px 16px 14px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
        <img
          src="/logooo.png"
          alt="Prosperify Logo"
          style={{ height: 26, objectFit: "contain", maxWidth: "100%" }}
        />
      </div>

      {/* Navigation */}
      <div style={{ padding: "14px 12px 0", display: "flex", flexDirection: "column" as const, gap: 4 }}>
        {navItems.map((n, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "9px 12px",
              borderRadius: 8,
              fontSize: 12,
              color: "#374151",
              cursor: "pointer",
            }}
          >
            <span style={{ color: "#6b7280" }}>{n.icon}</span>
            {n.label}
          </div>
        ))}
      </div>

      {/* Conversations */}
      <div style={{ padding: "16px 12px 0" }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "#9ca3af",
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
            padding: "0 12px",
            marginBottom: 10,
          }}
        >
          Conversations
        </div>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 3 }}>
          {convos.map((c, i) => (
            <div
              key={i}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                fontSize: 12.5,
                background: c.active ? "#e5e7eb" : "transparent",
                color: c.active ? "#141414" : "#6b7280",
                fontWeight: c.active ? 500 : 400,
              }}
            >
              {c.label}
            </div>
          ))}
        </div>
      </div>

      {/* User info */}
      <div style={{ marginTop: "auto", padding: 16, borderTop: "1px solid #e5e7eb" }}>
        <div
          style={{
            fontSize: 10,
            color: "#16a34a",
            background: "#dcfce7",
            padding: "3px 8px",
            borderRadius: 4,
            fontWeight: 600,
            width: "fit-content",
            marginBottom: 6,
          }}
        >
          Connecté en tant que
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              background: "#f3e8ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 600,
              color: "#9333ea",
            }}
          >
            ED
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#141414" }}>Eric Dupont</div>
            <div style={{ fontSize: 10, color: "#6b7280" }}>Contrôleur Financier</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── PDF Viewer Panel ─── */
function PdfViewer({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      style={{
        ...(isMobile ? { flex: 1 } : { width: 380, flexShrink: 0 }),
        borderLeft: "1px solid #e5e7eb",
        background: "#fff",
        display: "flex",
        flexDirection: "column" as const,
        minWidth: 0,
      }}
    >
      {/* Tab bar */}
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" as const }}>
          <span
            style={{
              fontSize: 12,
              padding: "6px 12px",
              borderRadius: 7,
              border: "1px solid #fed7aa",
              color: "#ea580c",
              background: "#fff7ed",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontWeight: 500,
            }}
          >
            <FileText size={12} color="#ea580c" />
            Contrat_Verdi.pdf
          </span>
          <span
            style={{
              fontSize: 12,
              padding: "6px 12px",
              borderRadius: 7,
              border: "1px solid #bfdbfe",
              color: "#2563eb",
              background: "#eff6ff",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontWeight: 500,
            }}
          >
            <FileText size={12} color="#2563eb" />
            Rapport_Financier_Q4…
          </span>
        </div>
        {/* Toolbar */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {[Search, ZoomIn, ZoomOut, RotateCcw, Download].map((Ic, i) => (
            <div
              key={i}
              style={{
                width: 30,
                height: 30,
                borderRadius: 7,
                border: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                color: "#6b7280",
                cursor: "pointer",
              }}
            >
              <Ic size={13} />
            </div>
          ))}
          <span
            style={{
              fontSize: 11,
              color: "#6b7280",
              margin: "0 4px",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            100%
          </span>
          <div style={{ marginLeft: "auto" }}>
            <div
              style={{
                padding: "5px 10px",
                borderRadius: 6,
                border: "1px solid #e5e7eb",
                fontSize: 11,
                color: "#9ca3af",
                background: "#fff",
              }}
            >
              Rechercher…
            </div>
          </div>
        </div>
      </div>

      {/* PDF Content */}
      <div style={{ flex: 1, padding: 16, background: "#f9fafb", overflow: "hidden" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 10,
            border: "1px solid #e5e7eb",
            padding: 20,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div style={{ textAlign: "center" as const, marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#141414" }}>Contrat Verdi.pdf</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              <span>Précédent</span>
              <span>Page 1 sur 15</span>
              <span>Suivant</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#141414", marginBottom: 6 }}>
                ARTICLE 1 – OBJET DU CONTRAT :
              </p>
              <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.65 }}>
                Le présent Contrat a pour objet d&apos;organiser la collaboration entre VERDI et le PARTENAIRE, incluant la
                définition de périmètre de recherche, la mise en commun de moyens matériels et humains, la production de
                rapports, ainsi que la valorisation des résultats obtenus.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#141414", marginBottom: 6 }}>
                ARTICLE 2 – DURÉE :
              </p>
              <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.65 }}>
                Le présent Contrat entre en vigueur à la date de signature pour une durée initiale de{" "}
                <span
                  style={{
                    background: "#fef08a",
                    padding: "1px 4px",
                    borderRadius: 3,
                    animation: "highlightPulse 2s ease-in-out infinite",
                  }}
                >
                  trois (3) ans
                </span>
                .{" "}
                <span style={{ background: "#bbf7d0", padding: "1px 4px", borderRadius: 3 }}>
                  Il pourra être renouvelé par accord exprès et écrit des Parties. En cas de non-renouvellement, les
                  obligations relatives à la confidentialité et à la propriété intellectuelle resteront en vigueur.
                </span>{" "}
                Cette disposition constitue une garantie de continuité, même au terme de la collaboration.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#141414", marginBottom: 6 }}>
                ARTICLE 3 – DÉFINITIONS :
              </p>
              <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.65 }}>
                « Résultats » désigne toute donnée, méthode, prototype, logiciel, rapport ou publication générée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Chat Panel ─── */
function ChatPanel({ started, isMobile }: { started: boolean; isMobile: boolean }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" as const, minWidth: 0 }}>
      {/* Header */}
      <div
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid #e5e7eb",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            background: "linear-gradient(135deg, #fff7ed, #ffedd5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #fed7aa",
          }}
        >
          <MessageSquare size={14} color="#ff6a13" />
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: "#141414" }}>
            Assistant Transaction & Juridique
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "12px 20px 8px",
          display: "flex",
          flexDirection: "column" as const,
          gap: 6,
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        <Msg delay={300} started={started} bg="#f3f4f6" border="1px solid #e5e7eb" maxWidth={340}>
          Bonjour ! Je peux vous aider à rechercher dans vos documents PDF indexés. Posez-moi une question sur
          vos documents.
        </Msg>
        <TimeStamp delay={400} started={started}>
          16:56
        </TimeStamp>

        <Msg
          delay={1400}
          started={started}
          align="right"
          bg="#141414"
          color="#fff"
          border="none"
          maxWidth={360}
        >
          Quelle est la durée initiale du contrat Verdi et est-il renouvelable ?
        </Msg>
        <TimeStamp delay={1500} started={started}>
          16:57
        </TimeStamp>

        <Dots started={started} delay={2400} />

        <Msg delay={3900} started={started} bg="#f3f4f6" border="1px solid #e5e7eb" maxWidth={420}>
          <span>
            D&apos;après le document <strong>&quot;Contrat Verdi.pdf&quot;</strong> (article 2, page 10), la durée
            initiale du contrat est de{" "}
            <span
              style={{
                background: "#fef08a",
                padding: "1px 5px",
                borderRadius: 3,
                fontWeight: 500,
              }}
            >
              trois (3) ans
            </span>
            . Il pourra être renouvelé par accord exprès et écrit des Parties.
          </span>
          <div
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 11.5,
              color: "#6b7280",
              cursor: "pointer",
            }}
          >
            <ExternalLink size={12} color="#ff6a13" />
            <span style={{ color: "#ff6a13" }}>Ouvrir Contrat_Verdi.pdf (page 10)</span>
          </div>
        </Msg>
        <TimeStamp delay={4000} started={started}>
          16:57
        </TimeStamp>
      </div>

      {/* Input */}
      <div style={{ padding: "16px 24px", borderTop: "1px solid #e5e7eb", background: "#fff" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div
            style={{
              flex: 1,
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: "12px 16px",
              fontSize: 13,
              color: "#9ca3af",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Posez une question sur vos documents…</span>
            <Paperclip size={14} color="#9ca3af" />
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#ff6a13",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 12px rgba(255,106,19,0.3)",
              cursor: "pointer",
            }}
          >
            <Send size={15} color="#fff" />
          </div>
        </div>
        <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 8 }}>
          Appuyez sur Entrée pour envoyer, Maj+Entrée pour une nouvelle ligne
        </div>
      </div>
    </div>
  )
}

/* ─── Main Interface (V2 — Sidebar + Chat + PDF) ─── */
export function AIChatInterface() {
  const [started, setStarted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [started])

  return (
    <div ref={containerRef} className="w-full h-full">
      {/* Safari-style chrome bar */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid #e5e7eb",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <div style={{ display: "flex", gap: 7 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span
              key={c}
              style={{ width: 12, height: 12, borderRadius: 99, background: c }}
            />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            background: "#fff",
            borderRadius: 7,
            padding: "6px 14px",
            fontSize: 12.5,
            color: "#6b7280",
            textAlign: "center" as const,
            fontFamily: "JetBrains Mono, monospace",
            border: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <path
              d="M5 0a3 3 0 0 0-3 3v2H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8V3a3 3 0 0 0-3-3zm1.5 5h-3V3a1.5 1.5 0 1 1 3 0v2z"
              fill="#22c55e"
            />
          </svg>
          prosperify.ai/chat
        </div>
      </div>

      {/* App content — Sidebar + PDF hidden on mobile */}
      <div style={{ display: "flex", height: 600, background: "#fff" }}>
        {!isMobile && <Sidebar />}
        <ChatPanel started={started} isMobile={isMobile} />
        {!isMobile && <PdfViewer isMobile={isMobile} />}
      </div>
    </div>
  )
}
