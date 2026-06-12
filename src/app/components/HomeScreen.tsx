import { useState } from "react";

interface Props {
  onNavigate: (screen: string, data?: unknown) => void;
}

const categories = [
  {
    id: "islands",
    title: "Explorar Ilhas",
    icon: "🏝️",
    color: "#0066CC",
    bg: "linear-gradient(135deg, #0066CC, #0099FF)",
    desc: "10 ilhas únicas",
  },
  {
    id: "tourism",
    title: "Turismo",
    icon: "🌄",
    color: "#00A86B",
    bg: "linear-gradient(135deg, #00A86B, #00D68F)",
    desc: "Praias & montanhas",
  },
  {
    id: "gastronomy",
    title: "Gastronomia",
    icon: "🍽️",
    color: "#FF6B35",
    bg: "linear-gradient(135deg, #FF6B35, #FF8C00)",
    desc: "Pratos típicos",
  },
  {
    id: "worldcup",
    title: "Copa do Mundo",
    icon: "⚽",
    color: "#8B2FC9",
    bg: "linear-gradient(135deg, #8B2FC9, #C44DFF)",
    desc: "FIFA 2026",
  },
  {
    id: "ai",
    title: "Assistente IA",
    icon: "🤖",
    color: "#0066CC",
    bg: "linear-gradient(135deg, #003d7a, #0066CC)",
    desc: "Chat inteligente",
  },
  {
    id: "services",
    title: "Serviços",
    icon: "🏨",
    color: "#E85D04",
    bg: "linear-gradient(135deg, #E85D04, #F48C06)",
    desc: "Hotéis & transporte",
  },
];

const highlights = [
  {
    title: "Praia de Santa Maria",
    location: "Ilha do Sal",
    img: "https://images.unsplash.com/photo-1621944668311-7a97c80f0190?w=400&h=250&fit=crop&auto=format",
    rating: "4.9",
    tag: "Trending",
  },
  {
    title: "Pico do Fogo",
    location: "Ilha do Fogo",
    img: "https://images.unsplash.com/photo-1580094333632-438bdc04f79f?w=400&h=250&fit=crop&auto=format",
    rating: "4.8",
    tag: "Aventura",
  },
  {
    title: "Mindelo",
    location: "São Vicente",
    img: "https://images.unsplash.com/photo-1774434355015-bb547e11b32c?w=400&h=250&fit=crop&auto=format",
    rating: "4.7",
    tag: "Cultura",
  },
];

export function HomeScreen({ onNavigate }: Props) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#f0f6ff", fontFamily: "Nunito, sans-serif" }}>
      {/* Header */}
      <div
        className="px-5 pt-10 pb-6"
        style={{ background: "linear-gradient(160deg, #0066CC 0%, #0099FF 100%)" }}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-white/70 text-sm">Bem-vindo a</p>
            <h1 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700 }}>
              Cabo Verde 🌊
            </h1>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.95)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#8aaccc" strokeWidth="2"/>
            <path d="M21 21l-4.35-4.35" stroke="#8aaccc" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquise destinos, praias..."
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: "#0a1628", fontSize: "14px" }}
          />
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center"
            style={{ background: "#0066CC" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 3H2l8 9.46V19l4 2v-7.54L22 3z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>

      {/* World Cup Banner */}
      <div className="px-4 mt-4">
        <div
          className="rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
          style={{ background: "linear-gradient(135deg, #4A0080, #8B2FC9)", boxShadow: "0 4px 20px rgba(139,47,201,0.3)" }}
          onClick={() => onNavigate("worldcup")}
        >
          <div className="text-3xl">⚽</div>
          <div className="flex-1">
            <p className="text-yellow-300 font-bold text-xs tracking-wide" style={{ fontFamily: "Nunito, sans-serif" }}>FIFA WORLD CUP 2026</p>
            <p className="text-white font-bold text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>Cabo Verde está presente!</p>
            <p className="text-white/60 text-xs" style={{ fontFamily: "Nunito, sans-serif" }}>Ver jogos & informações</p>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>
            Explorar
          </h2>
          <span style={{ fontSize: "13px", color: "#0066CC", fontFamily: "Nunito, sans-serif", fontWeight: 600 }}>Ver todos</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.id)}
              className="flex flex-col items-center p-3 rounded-2xl active:scale-95 transition-transform"
              style={{ background: "#ffffff", boxShadow: "0 2px 12px rgba(0,102,204,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2 text-2xl"
                style={{ background: cat.bg }}
              >
                {cat.icon}
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif", textAlign: "center", lineHeight: 1.2 }}>
                {cat.title}
              </span>
              <span style={{ fontSize: "10px", color: "#8aaccc", fontFamily: "Nunito, sans-serif", marginTop: "2px" }}>
                {cat.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="px-4 mt-5 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>
            Destaques
          </h2>
          <span style={{ fontSize: "13px", color: "#0066CC", fontFamily: "Nunito, sans-serif", fontWeight: 600 }}>Ver todos</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform"
              style={{ width: "180px", boxShadow: "0 4px 16px rgba(0,102,204,0.12)" }}
              onClick={() => onNavigate("islands")}
            >
              <div className="relative">
                <img
                  src={h.img}
                  alt={h.title}
                  className="w-full object-cover"
                  style={{ height: "110px" }}
                />
                <div
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-white"
                  style={{ background: "rgba(0,102,204,0.85)", fontSize: "10px", fontFamily: "Nunito, sans-serif", fontWeight: 700 }}
                >
                  {h.tag}
                </div>
                <div
                  className="absolute top-2 right-2 px-2 py-0.5 rounded-full flex items-center gap-1"
                  style={{ background: "rgba(0,0,0,0.5)", fontSize: "10px", fontFamily: "Nunito, sans-serif", color: "#FFD700", fontWeight: 700 }}
                >
                  ★ {h.rating}
                </div>
              </div>
              <div className="p-3 bg-white">
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>{h.title}</p>
                <p style={{ fontSize: "11px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>📍 {h.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
