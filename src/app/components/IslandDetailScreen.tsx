interface Props {
  island: string;
  onBack: () => void;
}

const islandData: Record<string, {
  img: string;
  capital: string;
  area: string;
  population: string;
  desc: string;
  attractions: { name: string; icon: string; type: string }[];
  restaurants: { name: string; cuisine: string; price: string }[];
  hotels: { name: string; stars: number; price: string }[];
}> = {
  Santiago: {
    img: "https://images.unsplash.com/photo-1611424458342-096fd23fc077?w=800&h=400&fit=crop&auto=format",
    capital: "Praia",
    area: "991 km²",
    population: "300,000",
    desc: "Santiago é a maior ilha de Cabo Verde e abriga a capital do país, Praia. Rica em história colonial portuguesa e cultura africana, é um destino fascinante com praias de areia preta vulcânica e a histórica Cidade Velha, Património Mundial da UNESCO.",
    attractions: [
      { name: "Cidade Velha", icon: "🏛️", type: "Património UNESCO" },
      { name: "Praia de Tarrafal", icon: "🏖️", type: "Praia" },
      { name: "Serra Malagueta", icon: "⛰️", type: "Natureza" },
      { name: "Mercado de Sucupira", icon: "🛒", type: "Mercado" },
    ],
    restaurants: [
      { name: "Quintal da Música", cuisine: "Cabo-verdiana", price: "€€" },
      { name: "Cafe Criolo", cuisine: "Fusão", price: "€€" },
      { name: "Restaurante Palmeira", cuisine: "Marisco", price: "€€€" },
    ],
    hotels: [
      { name: "Pestana Tropico", stars: 4, price: "€120/noite" },
      { name: "Hotel Praia Mar", stars: 3, price: "€65/noite" },
      { name: "Oasis Atlântico", stars: 5, price: "€210/noite" },
    ],
  },
  Sal: {
    img: "https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?w=800&h=400&fit=crop&auto=format",
    capital: "Espargos",
    area: "216 km²",
    population: "33,000",
    desc: "Ilha do Sal é famosa pelas suas praias de areia branca e mar cristalino. É o destino mais turístico de Cabo Verde, reconhecido internacionalmente por windsurf, kitesurf e snorkeling em águas turquesa.",
    attractions: [
      { name: "Praia de Santa Maria", icon: "🏖️", type: "Praia" },
      { name: "Buracona (Olho Azul)", icon: "🌊", type: "Gruta" },
      { name: "Salinas de Pedra de Lume", icon: "🧂", type: "Natural" },
      { name: "Monte Grande", icon: "⛰️", type: "Vista panorâmica" },
    ],
    restaurants: [
      { name: "Nha Terra", cuisine: "Cabo-verdiana", price: "€€" },
      { name: "Restaurant Morabeza", cuisine: "Marisco", price: "€€€" },
      { name: "Tortuga Beach Club", cuisine: "Internacional", price: "€€" },
    ],
    hotels: [
      { name: "Riu Palace Cabo Verde", stars: 5, price: "€280/noite" },
      { name: "Melia Dunas", stars: 5, price: "€350/noite" },
      { name: "Albergaria Creoula", stars: 3, price: "€55/noite" },
    ],
  },
  default: {
    img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=400&fit=crop&auto=format",
    capital: "Capital",
    area: "— km²",
    population: "—",
    desc: "Uma ilha bela e fascinante de Cabo Verde, repleta de paisagens deslumbrantes, cultura rica e praias paradisíacas que aguardam pela sua visita.",
    attractions: [
      { name: "Praia Principal", icon: "🏖️", type: "Praia" },
      { name: "Centro Histórico", icon: "🏛️", type: "Património" },
      { name: "Parque Natural", icon: "🌿", type: "Natureza" },
      { name: "Mirante", icon: "👁️", type: "Vista" },
    ],
    restaurants: [
      { name: "Restaurante Local", cuisine: "Cabo-verdiana", price: "€€" },
      { name: "Marisqueira da Ilha", cuisine: "Marisco", price: "€€€" },
    ],
    hotels: [
      { name: "Hotel da Ilha", stars: 3, price: "€70/noite" },
      { name: "Pousada Tradicional", stars: 2, price: "€40/noite" },
    ],
  },
};

export function IslandDetailScreen({ island, onBack }: Props) {
  const data = islandData[island] || islandData.default;

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#f0f6ff", fontFamily: "Nunito, sans-serif" }}>
      {/* Hero */}
      <div className="relative" style={{ height: "240px", flexShrink: 0 }}>
        <img src={data.img} alt={island} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,10,30,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
        />
        <button
          onClick={onBack}
          className="absolute top-10 left-4 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-white mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 800 }}>
            {island}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-white/80 text-sm">📍 {data.capital}</span>
            <span className="text-white/80 text-sm">📏 {data.area}</span>
            <span className="text-white/80 text-sm">👥 {data.population}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 py-4">
        {/* Description */}
        <div className="bg-white rounded-2xl p-4 mb-4" style={{ boxShadow: "0 2px 12px rgba(0,102,204,0.08)" }}>
          <p style={{ fontSize: "14px", color: "#3a5a7c", lineHeight: 1.6, fontFamily: "Nunito, sans-serif" }}>
            {data.desc}
          </p>
        </div>

        {/* Attractions */}
        <SectionHeader title="Atrações" emoji="📸" />
        <div className="grid grid-cols-2 gap-3 mb-4">
          {data.attractions.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-3 flex items-center gap-3"
              style={{ boxShadow: "0 2px 12px rgba(0,102,204,0.08)" }}
            >
              <span className="text-2xl">{a.icon}</span>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>{a.name}</p>
                <p style={{ fontSize: "10px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>{a.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurants */}
        <SectionHeader title="Restaurantes" emoji="🍽️" />
        <div className="flex flex-col gap-2 mb-4">
          {data.restaurants.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-3 flex items-center justify-between"
              style={{ boxShadow: "0 2px 12px rgba(0,102,204,0.08)" }}
            >
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>{r.name}</p>
                <p style={{ fontSize: "11px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>{r.cuisine}</p>
              </div>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-bold"
                style={{ background: "#e8f2ff", color: "#0066CC", fontFamily: "Nunito, sans-serif" }}
              >
                {r.price}
              </span>
            </div>
          ))}
        </div>

        {/* Hotels */}
        <SectionHeader title="Hotéis" emoji="🏨" />
        <div className="flex flex-col gap-2 mb-4">
          {data.hotels.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-3 flex items-center justify-between"
              style={{ boxShadow: "0 2px 12px rgba(0,102,204,0.08)" }}
            >
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>{h.name}</p>
                <p style={{ fontSize: "11px", color: "#FFD700", fontFamily: "Nunito, sans-serif" }}>
                  {"★".repeat(h.stars)}{"☆".repeat(5 - h.stars)}
                </p>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#0066CC", fontFamily: "Nunito, sans-serif" }}>
                {h.price}
              </span>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <SectionHeader title="Mapa" emoji="🗺️" />
        <div
          className="rounded-2xl overflow-hidden mb-6 flex items-center justify-center"
          style={{ height: "160px", background: "linear-gradient(135deg, #dce8f5, #e8f2ff)", border: "2px dashed rgba(0,102,204,0.2)" }}
        >
          <div className="text-center">
            <p className="text-4xl mb-2">🗺️</p>
            <p style={{ fontSize: "13px", color: "#5a7a9c", fontFamily: "Nunito, sans-serif" }}>Mapa interativo</p>
            <p style={{ fontSize: "11px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>Ilha de {island}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, emoji }: { title: string; emoji: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-lg">{emoji}</span>
      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>{title}</h3>
    </div>
  );
}
