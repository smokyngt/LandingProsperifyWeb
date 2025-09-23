export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1 style={{ fontSize: "2rem" }}>404 - Page non trouvée</h1>
      <p>Oups, cette page n’existe pas ou a été déplacée.</p>
      <a href="/" style={{ color: "#fb742d" }}>
        ← Retour à l’accueil
      </a>
    </div>
  );
}
