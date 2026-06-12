import { useState } from "react";

const categories = ["Praias", "Montanhas", "Histórico", "Cultural"];

const items: Record<string, { name: string; location: string; img: string; desc: string; rating: number; tag: string }[]> = {
  Praias: [
    {
      name: "Praia de Santa Maria",
      location: "Ilha do Sal",
      img: "https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?w=400&h=250&fit=crop&auto=format",
      desc: "Areia branca e mar turquesa, perfeita para windsurf e kitesurf",
      rating: 4.9,
      tag: "Trending",
    },
    {
      name: "Praia de Chaves",
      location: "Boa Vista",
      img: "https://images.unsplash.com/photo-1690683270754-4db2f3ada597?w=400&h=250&fit=crop&auto=format",
      desc: "Praia selvagem com tartarugas marinhas aninhando de Junho a Setembro",
      rating: 4.8,
      tag: "Natureza",
    },
    {
      name: "Tarrafal",
      location: "Santiago",
      img: "https://images.unsplash.com/photo-1621944668311-7a97c80f0190?w=400&h=250&fit=crop&auto=format",
      desc: "Baía protegida com água calma, ideal para snorkeling e mergulho",
      rating: 4.7,
      tag: "Mergulho",
    },
  ],
  Montanhas: [
    {
      name: "Pico do Fogo",
      location: "Fogo",
      img: "https://images.unsplash.com/photo-1580094333632-438bdc04f79f?w=400&h=250&fit=crop&auto=format",
      desc: "Vulcão activo a 2.829m, o ponto mais alto de Cabo Verde",
      rating: 4.9,
      tag: "Trekking",
    },
    {
      name: "Serra Malagueta",
      location: "Santiago",
      img: "https://images.unsplash.com/photo-1708181467620-f2aaff4d980c?w=400&h=250&fit=crop&auto=format",
      desc: "Reserva natural com belas trilhas e fauna endémica",
      rating: 4.6,
      tag: "Trilho",
    },
    {
      name: "Monte Verde",
      location: "São Vicente",
      img: "https://images.unsplash.com/photo-1616707477649-fe201fdf3e6a?w=400&h=250&fit=crop&auto=format",
      desc: "Ponto mais alto de São Vicente com vista panorâmica de Mindelo",
      rating: 4.7,
      tag: "Vista",
    },
  ],
  Histórico: [
    {
      name: "Cidade Velha",
      location: "Santiago",
      img: "https://images.unsplash.com/photo-1611424458342-096fd23fc077?w=400&h=250&fit=crop&auto=format",
      desc: "Primeiro assentamento colonial europeu nos trópicos — UNESCO",
      rating: 4.8,
      tag: "UNESCO",
    },
    {
      name: "Fortaleza Real de São Filipe",
      location: "Santiago",
      img: "https://images.unsplash.com/photo-1576475510454-b0af18970e6d?w=400&h=250&fit=crop&auto=format",
      desc: "Forte colonial português do século XVI com vista para o oceano",
      rating: 4.7,
      tag: "Fortaleza",
    },
  ],
  Cultural: [
    {
      name: "Festival Baia das Gatas",
      location: "São Vicente",
      img: "https://images.unsplash.com/photo-1774434355015-bb547e11b32c?w=400&h=250&fit=crop&auto=format",
      desc: "O maior festival de música de Cabo Verde, realizado em Agosto",
      rating: 4.9,
      tag: "Festival",
    },
    {
      name: "Mercado de Sucupira",
      location: "Praia, Santiago",
      img: "https://images.unsplash.com/photo-1619118986411-29b465253365?w=400&h=250&fit=crop&auto=format",
      desc: "Mercado vibrante com artesanato, tecidos e especiarias locais",
      rating: 4.5,
      tag: "Mercado",
    },
  ],
};

const tagColors: Record<string, string> = {
  Trending: "#0066CC",
  Natureza: "#00A86B",
  Mergulho: "#0099FF",
  Trekking: "#E85D04",
  Trilho: "#00A86B",
  Vista: "#8B2FC9",
  UNESCO: "#c9a227",
  Fortaleza: "#666",
  Festival: "#FF6B35",
  Mercado: "#FF8C00",
};

export function TourismScreen() {
  const [activeCategory, setActiveCategory] = useState("Praias");
  const list = items[activeCategory] ?? [];

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#f0f6ff", fontFamily: "Nunito, sans-serif" }}>
      {/* Header */}
      <div
        className="px-5 pt-10 pb-5"
        style={{ background: "linear-gradient(160deg, #00A86B 0%, #00D68F 100%)" }}
      >
        <h1 className="text-white mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700 }}>
          Turismo 🌄
        </h1>
        <p className="text-white/80 text-sm">Os melhores destinos de Cabo Verde</p>

        <div className="grid grid-cols-4 gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="py-2 px-1 rounded-xl text-center transition-all"
              style={{
                background: activeCategory === cat ? "#FFD700" : "rgba(255,255,255,0.2)",
                color: activeCategory === cat ? "#0a1628" : "white",
                fontFamily: "Nunito, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
              }}
            >
              {cat === "Praias" && "🏖️ "}
              {cat === "Montanhas" && "⛰️ "}
              {cat === "Histórico" && "🏛️ "}
              {cat === "Cultural" && "🎭 "}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4 pb-6 flex flex-col gap-4">
        {list.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 16px rgba(0,102,204,0.1)" }}
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full object-cover"
                style={{ height: "160px" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }}
              />
              <span
                className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-xs font-bold"
                style={{
                  background: tagColors[item.tag] ?? "#0066CC",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                {item.tag}
              </span>
              <div className="absolute bottom-3 left-3 flex items-center gap-1">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "rgba(0,0,0,0.5)", color: "#FFD700", fontFamily: "Nunito, sans-serif" }}
                >
                  ★ {item.rating}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0a1628", fontFamily: "'Playfair Display', serif" }}>
                {item.name}
              </h3>
              <p style={{ fontSize: "12px", color: "#5a7a9c", fontFamily: "Nunito, sans-serif", marginTop: "2px", marginBottom: "8px" }}>
                📍 {item.location}
              </p>
              <p style={{ fontSize: "13px", color: "#3a5a7c", lineHeight: 1.5, fontFamily: "Nunito, sans-serif" }}>
                {item.desc}
              </p>
              <button
                className="mt-3 w-full py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #0066CC, #0099FF)",
                  color: "white",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                Saber Mais →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
