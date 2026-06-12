interface Props {
  onSelectIsland: (island: string) => void;
}

const islands = [
  {
    name: "Santiago",
    capital: "Praia",
    desc: "A maior ilha, rica em história e cultura africana",
    img: "https://images.unsplash.com/photo-1611424458342-096fd23fc077?w=400&h=300&fit=crop&auto=format",
    tag: "Capital",
    tagColor: "#0066CC",
    attractions: "Cidade Velha, Tarrafal",
    area: "991 km²",
  },
  {
    name: "Sal",
    capital: "Espargos",
    desc: "Sol, praias brancas e windsurf de classe mundial",
    img: "https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?w=400&h=300&fit=crop&auto=format",
    tag: "Mais visitada",
    tagColor: "#FF6B35",
    attractions: "Santa Maria, Buracona",
    area: "216 km²",
  },
  {
    name: "Boa Vista",
    capital: "Sal Rei",
    desc: "Dunas douradas e tartarugas marinhas aninhando",
    img: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=400&h=300&fit=crop&auto=format",
    tag: "Natureza",
    tagColor: "#00A86B",
    attractions: "Praia de Chaves, Viana",
    area: "620 km²",
  },
  {
    name: "São Vicente",
    capital: "Mindelo",
    desc: "Capital cultural, jazz e vida noturna vibrante",
    img: "https://images.unsplash.com/photo-1774434355015-bb547e11b32c?w=400&h=300&fit=crop&auto=format",
    tag: "Cultura",
    tagColor: "#8B2FC9",
    attractions: "Mindelo, Monte Verde",
    area: "227 km²",
  },
  {
    name: "Santo Antão",
    capital: "Porto Novo",
    desc: "Vales verdes, trilhos e paisagens vulcânicas",
    img: "https://images.unsplash.com/photo-1708181467620-f2aaff4d980c?w=400&h=300&fit=crop&auto=format",
    tag: "Trekking",
    tagColor: "#00A86B",
    attractions: "Paul Valley, Ribeira Grande",
    area: "779 km²",
  },
  {
    name: "Fogo",
    capital: "São Filipe",
    desc: "O vulcão activo mais alto do Atlântico africano",
    img: "https://images.unsplash.com/photo-1580094333632-438bdc04f79f?w=400&h=300&fit=crop&auto=format",
    tag: "Vulcão",
    tagColor: "#E85D04",
    attractions: "Pico do Fogo, Chã das Caldeiras",
    area: "476 km²",
  },
];

export function IslandsScreen({ onSelectIsland }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#f0f6ff", fontFamily: "Nunito, sans-serif" }}>
      {/* Header */}
      <div
        className="px-5 pt-10 pb-5"
        style={{ background: "linear-gradient(160deg, #0066CC 0%, #0099FF 100%)" }}
      >
        <h1 className="text-white mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700 }}>
          Explorar Ilhas 🏝️
        </h1>
        <p className="text-white/70 text-sm">Descubra as 10 ilhas de Cabo Verde</p>

        <div className="flex gap-2 mt-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {["Todas", "Barlavento", "Sotavento", "Desabitadas"].map((f) => (
            <button
              key={f}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
              style={{
                background: f === "Todas" ? "#FFD700" : "rgba(255,255,255,0.2)",
                color: f === "Todas" ? "#0a1628" : "white",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Islands Grid */}
      <div className="px-4 py-4 grid grid-cols-2 gap-4 pb-6">
        {islands.map((island) => (
          <button
            key={island.name}
            onClick={() => onSelectIsland(island.name)}
            className="rounded-2xl overflow-hidden text-left active:scale-95 transition-transform"
            style={{ background: "#ffffff", boxShadow: "0 4px 16px rgba(0,102,204,0.1)" }}
          >
            <div className="relative">
              <img
                src={island.img}
                alt={island.name}
                className="w-full object-cover"
                style={{ height: "110px" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }}
              />
              <span
                className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-white"
                style={{ background: island.tagColor, fontSize: "9px", fontFamily: "Nunito, sans-serif", fontWeight: 800, opacity: 0.95 }}
              >
                {island.tag}
              </span>
              <span
                className="absolute bottom-2 left-2 text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 700 }}
              >
                {island.name}
              </span>
            </div>
            <div className="p-3">
              <p style={{ fontSize: "10px", color: "#5a7a9c", fontFamily: "Nunito, sans-serif", marginBottom: "4px" }}>
                📍 {island.capital} · {island.area}
              </p>
              <p style={{ fontSize: "11px", color: "#0a1628", fontFamily: "Nunito, sans-serif", lineHeight: 1.4 }}>
                {island.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
