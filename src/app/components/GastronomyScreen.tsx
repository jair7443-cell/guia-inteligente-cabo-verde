import { useState } from "react";

const categories = ["Todos", "Pratos", "Sopas", "Peixes", "Sobremesas", "Bebidas"];

const dishes = [
  {
    name: "Cachupa Rica",
    desc: "Prato nacional de Cabo Verde com milho, feijão, legumes e carne",
    img: "https://images.unsplash.com/photo-1665554837563-3782d21a676b?w=400&h=300&fit=crop&auto=format",
    category: "Pratos",
    origin: "Todas as ilhas",
    price: "€8–14",
    rating: 4.9,
    time: "2–3h",
  },
  {
    name: "Lagosta Grelhada",
    desc: "Lagosta fresca do Atlântico, grelhada com manteiga de alho e limão",
    img: "https://images.unsplash.com/photo-1593252719532-53f183016149?w=400&h=300&fit=crop&auto=format",
    category: "Peixes",
    origin: "Sal & Boa Vista",
    price: "€25–45",
    rating: 4.8,
    time: "30min",
  },
  {
    name: "Caldo de Peixe",
    desc: "Sopa rica de peixe fresco com batata doce, mandioca e couve",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop&auto=format",
    category: "Sopas",
    origin: "Santiago",
    price: "€6–10",
    rating: 4.7,
    time: "1h",
  },
  {
    name: "Xerém",
    desc: "Papas de milho triturado cozido com feijão e carne fumada",
    img: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=400&h=300&fit=crop&auto=format",
    category: "Pratos",
    origin: "Santiago",
    price: "€5–9",
    rating: 4.6,
    time: "1.5h",
  },
  {
    name: "Atum Grelhado",
    desc: "Atum do Atlântico grelhado na brasa com molho de coentros",
    img: "https://images.unsplash.com/photo-1746716447103-e1618bbd0669?w=400&h=300&fit=crop&auto=format",
    category: "Peixes",
    origin: "São Nicolau",
    price: "€12–20",
    rating: 4.8,
    time: "20min",
  },
  {
    name: "Pudim de Queijo",
    desc: "Pudim cremoso com queijo local de Santiago, doce e delicado",
    img: "https://images.unsplash.com/photo-1593252719532-53f183016149?w=400&h=300&fit=crop&auto=format",
    category: "Sobremesas",
    origin: "Santiago",
    price: "€4–6",
    rating: 4.5,
    time: "2h",
  },
];

export function GastronomyScreen() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos" ? dishes : dishes.filter((d) => d.category === activeCategory);

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#f0f6ff", fontFamily: "Nunito, sans-serif" }}>
      {/* Header */}
      <div
        className="px-5 pt-10 pb-5"
        style={{ background: "linear-gradient(160deg, #FF6B35 0%, #FF8C00 100%)" }}
      >
        <h1 className="text-white mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700 }}>
          Gastronomia 🍽️
        </h1>
        <p className="text-white/80 text-sm">Sabores autênticos de Cabo Verde</p>

        {/* Categories */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm transition-all"
              style={{
                background: activeCategory === cat ? "#FFD700" : "rgba(255,255,255,0.2)",
                color: activeCategory === cat ? "#0a1628" : "white",
                fontFamily: "Nunito, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      <div className="px-4 mt-4">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 4px 20px rgba(255,107,53,0.2)" }}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1665554837563-3782d21a676b?w=700&h=200&fit=crop&auto=format"
              alt="Cachupa"
              className="w-full object-cover"
              style={{ height: "140px" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full w-fit mb-2"
                style={{ background: "#FFD700", color: "#0a1628", fontFamily: "Nunito, sans-serif" }}
              >
                🏆 Prato Nacional
              </span>
              <h3 className="text-white text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cachupa Rica
              </h3>
              <p className="text-white/70 text-xs" style={{ fontFamily: "Nunito, sans-serif" }}>
                O símbolo da cozinha cabo-verdiana
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dishes */}
      <div className="px-4 mt-4 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>
            {filtered.length} pratos encontrados
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {filtered.map((dish, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden flex"
              style={{ boxShadow: "0 2px 12px rgba(0,102,204,0.08)" }}
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="object-cover flex-shrink-0"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>
                      {dish.name}
                    </h3>
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ml-1"
                      style={{ background: "#fff3e0", color: "#FF6B35", fontFamily: "Nunito, sans-serif", fontWeight: 700 }}
                    >
                      {dish.category}
                    </span>
                  </div>
                  <p style={{ fontSize: "11px", color: "#8aaccc", lineHeight: 1.4, fontFamily: "Nunito, sans-serif" }} className="mt-1">
                    {dish.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span style={{ fontSize: "11px", color: "#5a7a9c", fontFamily: "Nunito, sans-serif" }}>
                    📍 {dish.origin}
                  </span>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: "11px", color: "#FFD700", fontFamily: "Nunito, sans-serif", fontWeight: 700 }}>
                      ★ {dish.rating}
                    </span>
                    <span style={{ fontSize: "12px", color: "#0066CC", fontFamily: "Nunito, sans-serif", fontWeight: 700 }}>
                      {dish.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
