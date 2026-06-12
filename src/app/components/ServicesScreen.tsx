import { useState } from "react";

const categories = ["Hotéis", "Restaurantes", "Transporte", "Guias"];

const services: Record<string, { name: string; desc: string; img: string; rating: number; price: string; detail: string }[]> = {
  Hotéis: [
    {
      name: "Riu Palace Cabo Verde",
      desc: "Resort 5★ all-inclusive em Boa Vista",
      img: "https://images.unsplash.com/photo-1611043714658-af3e56bc5299?w=400&h=250&fit=crop&auto=format",
      rating: 4.8,
      price: "€280/noite",
      detail: "Boa Vista · All-Inclusive",
    },
    {
      name: "Melia Dunas Beach",
      desc: "O maior resort de Cabo Verde no Sal",
      img: "https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?w=400&h=250&fit=crop&auto=format",
      rating: 4.7,
      price: "€350/noite",
      detail: "Ilha do Sal · 5 Estrelas",
    },
    {
      name: "Pestana Tropico",
      desc: "Hotel colonial elegante no centro de Praia",
      img: "https://images.unsplash.com/photo-1690683270754-4db2f3ada597?w=400&h=250&fit=crop&auto=format",
      rating: 4.5,
      price: "€120/noite",
      detail: "Santiago · 4 Estrelas",
    },
  ],
  Restaurantes: [
    {
      name: "Quintal da Música",
      desc: "Cozinha cabo-verdiana autêntica com música ao vivo",
      img: "https://images.unsplash.com/photo-1743805024693-ecc7fa49b0f0?w=400&h=250&fit=crop&auto=format",
      rating: 4.8,
      price: "€€€",
      detail: "Santiago · Cabo-verdiana",
    },
    {
      name: "Restaurante Morabeza",
      desc: "Marisco fresco e peixe do dia à beira-mar",
      img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=250&fit=crop&auto=format",
      rating: 4.6,
      price: "€€",
      detail: "Sal · Marisco",
    },
    {
      name: "Tortuga Beach Club",
      desc: "Cocktails e snacks ao pôr-do-sol na praia",
      img: "https://images.unsplash.com/photo-1567565954620-0e1a655bd5bf?w=400&h=250&fit=crop&auto=format",
      rating: 4.5,
      price: "€€",
      detail: "Boa Vista · Beach Club",
    },
  ],
  Transporte: [
    {
      name: "TACV Airlines",
      desc: "Companhia nacional com voos entre ilhas",
      img: "https://images.unsplash.com/photo-1576475510454-b0af18970e6d?w=400&h=250&fit=crop&auto=format",
      rating: 4.2,
      price: "€35–120",
      detail: "Inter-ilhas · Aéreo",
    },
    {
      name: "Ferry Intercity",
      desc: "Ferries regulares entre Santiago, Fogo e Brava",
      img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=400&h=250&fit=crop&auto=format",
      rating: 4.0,
      price: "€15–40",
      detail: "Marítimo · Barco",
    },
    {
      name: "Cabo Verde Car Rental",
      desc: "Aluguer de jeeps e carros para explorar as ilhas",
      img: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=400&h=250&fit=crop&auto=format",
      rating: 4.4,
      price: "€40–80/dia",
      detail: "Todas as ilhas · 4x4",
    },
  ],
  Guias: [
    {
      name: "João Silva — Guia Santiago",
      desc: "Especialista em Cidade Velha e história colonial",
      img: "https://images.unsplash.com/photo-1611424458342-096fd23fc077?w=400&h=250&fit=crop&auto=format",
      rating: 4.9,
      price: "€60/dia",
      detail: "Santiago · Português & Inglês",
    },
    {
      name: "Maria Costa — Trekking Fogo",
      desc: "Guia certificada para ascensão ao Pico do Fogo",
      img: "https://images.unsplash.com/photo-1580094333632-438bdc04f79f?w=400&h=250&fit=crop&auto=format",
      rating: 5.0,
      price: "€80/dia",
      detail: "Fogo · Montanhismo",
    },
    {
      name: "Pedro Almada — Windsurf",
      desc: "Instrutor certificado de windsurf e kitesurf",
      img: "https://images.unsplash.com/photo-1621944668311-7a97c80f0190?w=400&h=250&fit=crop&auto=format",
      rating: 4.8,
      price: "€50/sessão",
      detail: "Sal · Desporto Aquático",
    },
  ],
};

const catIcons: Record<string, string> = {
  Hotéis: "🏨",
  Restaurantes: "🍽️",
  Transporte: "✈️",
  Guias: "🗺️",
};

const catColors: Record<string, string> = {
  Hotéis: "linear-gradient(135deg, #0066CC, #0099FF)",
  Restaurantes: "linear-gradient(135deg, #FF6B35, #FF8C00)",
  Transporte: "linear-gradient(135deg, #8B2FC9, #C44DFF)",
  Guias: "linear-gradient(135deg, #00A86B, #00D68F)",
};

export function ServicesScreen() {
  const [activeCategory, setActiveCategory] = useState("Hotéis");
  const list = services[activeCategory] ?? [];

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#f0f6ff", fontFamily: "Nunito, sans-serif" }}>
      {/* Header */}
      <div
        className="px-5 pt-10 pb-5"
        style={{ background: "linear-gradient(160deg, #E85D04 0%, #F48C06 100%)" }}
      >
        <h1 className="text-white mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700 }}>
          Serviços 🏨
        </h1>
        <p className="text-white/80 text-sm">Hotéis, restaurantes e transportes</p>

        <div className="grid grid-cols-4 gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="py-2 px-1 rounded-xl text-center transition-all active:scale-95"
              style={{
                background: activeCategory === cat ? "#FFD700" : "rgba(255,255,255,0.2)",
                color: activeCategory === cat ? "#0a1628" : "white",
                fontFamily: "Nunito, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
              }}
            >
              {catIcons[cat]} {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,102,204,0.08)" }}
      >
        <div className="text-center">
          <p style={{ fontSize: "18px", fontWeight: 800, color: "#0066CC", fontFamily: "Nunito, sans-serif" }}>47</p>
          <p style={{ fontSize: "10px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>Hotéis</p>
        </div>
        <div className="w-px h-8" style={{ background: "#dce8f5" }} />
        <div className="text-center">
          <p style={{ fontSize: "18px", fontWeight: 800, color: "#FF6B35", fontFamily: "Nunito, sans-serif" }}>120+</p>
          <p style={{ fontSize: "10px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>Restaurantes</p>
        </div>
        <div className="w-px h-8" style={{ background: "#dce8f5" }} />
        <div className="text-center">
          <p style={{ fontSize: "18px", fontWeight: 800, color: "#8B2FC9", fontFamily: "Nunito, sans-serif" }}>15</p>
          <p style={{ fontSize: "10px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>Companhias</p>
        </div>
        <div className="w-px h-8" style={{ background: "#dce8f5" }} />
        <div className="text-center">
          <p style={{ fontSize: "18px", fontWeight: 800, color: "#00A86B", fontFamily: "Nunito, sans-serif" }}>35</p>
          <p style={{ fontSize: "10px", color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}>Guias</p>
        </div>
      </div>

      {/* List */}
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
                style={{ height: "140px" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }}
              />
              <div
                className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1"
                style={{ background: "rgba(0,0,0,0.5)", fontFamily: "Nunito, sans-serif" }}
              >
                <span style={{ color: "#FFD700" }}>★</span> {item.rating}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-1">
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif", flex: 1 }}>
                  {item.name}
                </h3>
                <span
                  className="ml-2 flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "#e8f2ff", color: "#0066CC", fontFamily: "Nunito, sans-serif" }}
                >
                  {item.price}
                </span>
              </div>
              <p style={{ fontSize: "11px", color: "#5a7a9c", fontFamily: "Nunito, sans-serif", marginBottom: "4px" }}>
                📍 {item.detail}
              </p>
              <p style={{ fontSize: "12px", color: "#3a5a7c", lineHeight: 1.5, fontFamily: "Nunito, sans-serif" }}>
                {item.desc}
              </p>
              <button
                className="mt-3 w-full py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95"
                style={{
                  background: catColors[activeCategory],
                  color: "white",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                Reservar Agora →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
