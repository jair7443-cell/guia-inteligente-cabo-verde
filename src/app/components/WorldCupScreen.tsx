interface Props {
  onBack: () => void;
}

const matches = [
  { date: "15 Jun 2026", time: "20:00", opponent: "Portugal", flag: "🇵🇹", venue: "MetLife Stadium, Nova Iorque", group: "Grupo D", status: "upcoming" },
  { date: "19 Jun 2026", time: "17:00", opponent: "Marrocos", flag: "🇲🇦", venue: "AT&T Stadium, Dallas", group: "Grupo D", status: "upcoming" },
  { date: "23 Jun 2026", time: "23:00", opponent: "Uruguai", flag: "🇺🇾", venue: "SoFi Stadium, Los Angeles", group: "Grupo D", status: "upcoming" },
];

const players = [
  { name: "Gelson Martins", position: "Avançado", club: "AS Monaco", flag: "🇨🇻", goals: 12 },
  { name: "Ryan Mendes", position: "Avançado", club: "Goztepe S.K.", flag: "🇨🇻", goals: 8 },
  { name: "Stopira", position: "Defesa", club: "IF Elfsborg", flag: "🇨🇻", goals: 1 },
  { name: "Carlos Ponck", position: "Médio", club: "Willem II", flag: "🇨🇻", goals: 3 },
  { name: "Pity", position: "Guarda-redes", club: "FC Paços de Ferreira", flag: "🇨🇻", goals: 0 },
];

export function WorldCupScreen({ onBack }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#f0f6ff", fontFamily: "Nunito, sans-serif" }}>
      {/* Header */}
      <div
        className="relative px-5 pt-10 pb-6"
        style={{ background: "linear-gradient(160deg, #1a0030 0%, #4A0080 50%, #8B2FC9 100%)" }}
      >
        <button
          onClick={onBack}
          className="absolute top-10 left-4 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="flex items-center justify-center mb-4 pt-4">
          <span className="text-5xl">⚽</span>
        </div>
        <h1 className="text-white text-center mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700 }}>
          FIFA World Cup 2026
        </h1>
        <p className="text-white/70 text-center text-sm">Cabo Verde no palco mundial</p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div
            className="px-4 py-2 rounded-xl text-center"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <p style={{ fontSize: "20px", fontWeight: 800, color: "#FFD700", fontFamily: "Nunito, sans-serif" }}>1ª</p>
            <p style={{ fontSize: "10px", color: "white/70", fontFamily: "Nunito, sans-serif" }}>Participação</p>
          </div>
          <div
            className="px-4 py-2 rounded-xl text-center"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <p style={{ fontSize: "20px", fontWeight: 800, color: "#FFD700", fontFamily: "Nunito, sans-serif" }}>D</p>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontFamily: "Nunito, sans-serif" }}>Grupo</p>
          </div>
          <div
            className="px-4 py-2 rounded-xl text-center"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <p style={{ fontSize: "20px", fontWeight: 800, color: "#FFD700", fontFamily: "Nunito, sans-serif" }}>3</p>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontFamily: "Nunito, sans-serif" }}>Jogos</p>
          </div>
        </div>

        {/* Country badge */}
        <div
          className="mt-4 rounded-2xl p-3 flex items-center gap-3"
          style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)" }}
        >
          <span className="text-3xl">🇨🇻</span>
          <div>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#FFD700", fontFamily: "Nunito, sans-serif" }}>
              Seleção Nacional
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontFamily: "Nunito, sans-serif" }}>
              "Tubarões Azuis" • Qualificado via CAF
            </p>
          </div>
        </div>
      </div>

      {/* Matches */}
      <div className="px-4 mt-4">
        <h2 className="mb-3" style={{ fontSize: "17px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>
          📅 Calendário de Jogos
        </h2>
        <div className="flex flex-col gap-3">
          {matches.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4"
              style={{ boxShadow: "0 4px 16px rgba(139,47,201,0.1)" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "#f3e8ff", color: "#8B2FC9", fontFamily: "Nunito, sans-serif" }}
                >
                  {m.group}
                </span>
                <span style={{ fontSize: "11px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>
                  {m.date} · {m.time}
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 my-2">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl">🇨🇻</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>
                    Cabo Verde
                  </span>
                </div>
                <div
                  className="px-4 py-2 rounded-xl"
                  style={{ background: "#f0f6ff" }}
                >
                  <span style={{ fontSize: "18px", fontWeight: 800, color: "#0066CC", fontFamily: "Nunito, sans-serif" }}>VS</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-3xl">{m.flag}</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>
                    {m.opponent}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "11px", color: "#8aaccc", fontFamily: "Nunito, sans-serif", textAlign: "center" }}>
                🏟️ {m.venue}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Players */}
      <div className="px-4 mt-5 mb-6">
        <h2 className="mb-3" style={{ fontSize: "17px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>
          ⭐ Jogadores Principais
        </h2>
        <div className="flex flex-col gap-2">
          {players.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl px-4 py-3 flex items-center justify-between"
              style={{ boxShadow: "0 2px 12px rgba(0,102,204,0.08)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{p.flag}</span>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>{p.name}</p>
                  <p style={{ fontSize: "11px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>{p.position} · {p.club}</p>
                </div>
              </div>
              <div className="text-right">
                <p style={{ fontSize: "16px", fontWeight: 800, color: "#8B2FC9", fontFamily: "Nunito, sans-serif" }}>{p.goals}</p>
                <p style={{ fontSize: "10px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>golos</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
