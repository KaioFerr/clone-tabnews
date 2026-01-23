export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon} aria-hidden>
          🛠️
        </div>

        <h1 style={styles.title}>
          Em Construção <span style={styles.titleDots}></span>
        </h1>

        <p style={styles.subtitle}>
          Calma! Tem que ter calma!
        </p>

        <div style={styles.divider} />

        <footer style={styles.footer}>
          <span style={styles.pulse} /> Site em atualização
        </footer>
      </div>
    </main>
  );
}

const styles = {
  page: {
    height: "100dvh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif",
    background:
      "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 90% 20%, rgba(255,255,255,0.06), transparent 45%), linear-gradient(135deg, #0b1020, #0a0f1a)",
    color: "white",
  },
  card: {
    width: "min(860px, 100%)",
    padding: "42px 36px",
    borderRadius: 24,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.40)",
    backdropFilter: "blur(10px)",
    textAlign: "center",
  },
  icon: {
    fontSize: 56,
    marginBottom: 10,
    display: "inline-block",
    animation: "float 2.6s ease-in-out infinite",
  },
  title: {
    fontSize: "clamp(36px, 5vw, 72px)",
    margin: "6px 0 10px",
    letterSpacing: "-0.03em",
    lineHeight: 1.05,
  },
  titleDots: {
    opacity: 0.95,
  },
  subtitle: {
    margin: 0,
    opacity: 0.85,
    fontSize: 18,
  },
  divider: {
    margin: "28px auto",
    width: "min(360px, 75%)",
    height: 1,
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
  },
  quote: {
    margin: 0,
    fontSize: 18,
    opacity: 0.9,
    lineHeight: 1.5,
  },
  author: {
    opacity: 0.8,
    fontSize: 15,
  },
  footer: {
    marginTop: 30,
    display: "inline-flex",
    gap: 10,
    alignItems: "center",
    opacity: 0.85,
    fontSize: 14,
  },
  pulse: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.95)",
    boxShadow: "0 0 0 0 rgba(255,255,255,0.40)",
    animation: "pulse 1.1s ease-in-out infinite",
    display: "inline-block",
  },
};


if (typeof document !== "undefined") {
  const id = "construction-animations";
  if (!document.getElementById(id)) {
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(-6deg); }
        50% { transform: translateY(-10px) rotate(6deg); }
      }
      @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0.35); }
        70% { transform: scale(1.0); box-shadow: 0 0 0 10px rgba(255,255,255,0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0); }
      }
    `;
    document.head.appendChild(style);
  }
}
