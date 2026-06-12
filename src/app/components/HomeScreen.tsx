import { useState } from "react";

interface Props {
  onNavigate: (screen: string, data?: unknown) => void;
}

const fallbackImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format";

const featureCards = [
  {
    id: "islands",
    title: "10 Ilhas",
    desc: "Descubra cada ilha com roteiros e curiosidades.",
    icon: "🏝️",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "gastronomy",
    title: "Gastronomia",
    desc: "Sabores autênticos, pratos típicos e receitas locais.",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "tourism",
    title: "Cultura",
    desc: "Música, festas e tradições de Cabo Verde.",
    icon: "🎶",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "worldcup",
    title: "Mundial 2026",
    desc: "Tudo sobre a participação histórica de Cabo Verde.",
    icon: "⚽",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "ai",
    title: "Assistente IA",
    desc: "Planeie a viagem com suporte inteligente.",
    icon: "🤖",
    image: "https://images.unsplash.com/photo-1677442d019cecf8025b43d63bb0fcc84b2b9165?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "services",
    title: "Serviços",
    desc: "Hotéis, transportes e guias para sua viagem.",
    icon: "🧭",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format",
  },
];

const reasons = [
  { icon: "🏖️", title: "Praias paradisíacas", desc: "Areias brancas, lagoas azuis e recantos privados." },
  { icon: "🎭", title: "Cultura vibrante", desc: "Música morna, festivais e herança africana." },
  { icon: "🍲", title: "Gastronomia rica", desc: "Pratos autênticos que contam a história do arquipélago." },
  { icon: "🌿", title: "Natureza impressionante", desc: "Vulcões, trilhos verdes e paisagens únicas." },
];

const islandsPreview = [
  { name: "Santiago", desc: "História colonial e centros culturais vibrantes.", attractions: "Cidade Velha, Tarrafal", category: "Cultura", img: "https://images.unsplash.com/photo-1611424458342-096fd23fc077?w=400&h=300&fit=crop&auto=format" },
  { name: "Sal", desc: "Praias perfeitas, windsurf e resorts de luxo.", attractions: "Santa Maria, Buracona", category: "Praias", img: "https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?w=400&h=300&fit=crop&auto=format" },
  { name: "Boa Vista", desc: "Dunas douradas e praias selvagens para relaxar.", attractions: "Chaves, Viana", category: "Praias", img: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=400&h=300&fit=crop&auto=format" },
  { name: "São Vicente", desc: "Cultura musical e vida noturna cosmopolita.", attractions: "Mindelo, Monte Verde", category: "Cultura", img: "https://images.unsplash.com/photo-1774434355015-bb547e11b32c?w=400&h=300&fit=crop&auto=format" },
  { name: "Santo Antão", desc: "Trilhos épicos com vales verdes e montanhas.", attractions: "Paul Valley, Ribeira Grande", category: "Trilhos", img: "https://images.unsplash.com/photo-1708181467620-f2aaff4d980c?w=400&h=300&fit=crop&auto=format" },
  { name: "Fogo", desc: "O vulcão mais icónico e paisagens lunares impressionantes.", attractions: "Pico do Fogo, Chã das Caldeiras", category: "Vulcão do Fogo", img: "https://images.unsplash.com/photo-1580094333632-438bdc04f79f?w=400&h=300&fit=crop&auto=format" },
  { name: "Maio", desc: "Praias tranquilas e aldeias charmosas ainda pouco exploradas.", attractions: "Porto Inglês, Praia de Cascabulho", category: "Praias", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&auto=format" },
  { name: "Brava", desc: "Ilha das flores com aldeias pitorescas e trilhos serenos.", attractions: "Cachaço, Furna", category: "Natureza", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop&auto=format" },
  { name: "São Nicolau", desc: "Cenários naturais autênticos e tradição musical forte.", attractions: "Tarrafal, Monte Gordo", category: "Natureza", img: "https://images.unsplash.com/photo-1605715638173-ef2f3f8757b5?w=400&h=300&fit=crop&auto=format" },
];

const dishes = [
  { name: "Cachupa", origin: "Santiago", curious: "O prato nacional, servido de manhã à noite.", img: "https://images.unsplash.com/photo-1665554837563-3782d21a676b?w=400&h=300&fit=crop&auto=format" },
  { name: "Pastel com Diabo Dentro", origin: "Sal", curious: "Frito e picante, um clássico das ruas de Cabo Verde.", img: "https://images.unsplash.com/photo-1621944668311-7a97c80f0190?w=400&h=300&fit=crop&auto=format" },
  { name: "Buzio", origin: "São Vicente", curious: "Marisco fresco preparado com ervas e picante suave.", img: "https://images.unsplash.com/photo-1567578088470-94c0c99d7d01?w=400&h=300&fit=crop&auto=format" },
  { name: "Lagosta Grelhada", origin: "Boa Vista", curious: "Única nas ilhas, servida com manteiga de alho.", img: "https://images.unsplash.com/photo-1593252719532-53f183016149?w=400&h=300&fit=crop&auto=format" },
  { name: "Xerém", origin: "Santiago", curious: "Milho triturado com feijão e carne fumada.", img: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=400&h=300&fit=crop&auto=format" },
  { name: "Grogue", origin: "Santo Antão", curious: "Bebida tradicional feita de cana-de-açúcar fermentada.", img: "https://images.unsplash.com/photo-1533777324565-a040eb52fac2?w=400&h=300&fit=crop&auto=format" },
  { name: "Queijo do Fogo", origin: "Fogo", curious: "Queijo artesanal com sabor intenso e notas de fumaça.", img: "https://images.unsplash.com/photo-1540151792735-6ec74ff7b557?w=400&h=300&fit=crop&auto=format" },
];

const categoryTabs = ["Todas", "Praias", "Montanhas", "Trilhos", "Vulcão do Fogo", "Cultura", "Natureza"];

const worldCupInfo = {
  headline: "Cabo Verde no Mundial 2026",
  summary: "A paixão nacional e a história da qualificação para o maior palco do futebol.",
  group: "Grupo D",
  calendar: [
    { match: "Cabo Verde vs Portugal", date: "15 Jun", venue: "Nova Iorque" },
    { match: "Cabo Verde vs Marrocos", date: "19 Jun", venue: "Dallas" },
    { match: "Cabo Verde vs Uruguai", date: "23 Jun", venue: "Los Angeles" },
  ],
};

export function HomeScreen({ onNavigate }: Props) {
  const [activeCategory, setActiveCategory] = useState("Todas");

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#F5F7FA", fontFamily: "Nunito, sans-serif" }}>
      <div className="relative px-5 pt-10 pb-6 overflow-hidden" style={{ background: "linear-gradient(180deg, #0057B8 0%, #003B7A 100%)" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.18), transparent 20%), radial-gradient(circle at 80% 10%, rgba(255,215,0,0.12), transparent 18%)",
          }}
        />
        <div className="absolute left-[-40px] top-16 w-28 h-28 rounded-full opacity-20" style={{ background: "#FFD700" }} />
        <div className="absolute right-[-50px] top-32 w-36 h-36 rounded-full opacity-15" style={{ background: "#FFFFFF" }} />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-white/70 text-sm uppercase tracking-[0.2em]" style={{ fontFamily: "Nunito, sans-serif" }}>
                Guia Inteligente de Cabo Verde
              </p>
              <h1 className="text-white text-3xl font-black leading-tight sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Descubra Cabo Verde
              </h1>
            </div>
            <div
              className="w-14 h-14 rounded-3xl flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              style={{ background: "linear-gradient(135deg, #FFD700, #FFB800)" }}
            >
              <span className="text-2xl">🌊</span>
            </div>
          </div>

          <p className="max-w-xl text-white/80 text-sm leading-6" style={{ fontFamily: "Nunito, sans-serif" }}>
            Um arquipélago único no coração do Atlântico.
          </p>

          <button
            onClick={() => onNavigate("islands")}
            className="mt-6 inline-flex items-center gap-2 rounded-3xl px-5 py-3 text-sm font-bold text-[#003B7A] transition-all active:scale-[0.98]"
            style={{ background: "#FFD700", boxShadow: "0 16px 40px rgba(255,215,0,0.24)", fontFamily: "Nunito, sans-serif" }}
          >
            Explorar Destinos
            <span>→</span>
          </button>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur-sm">
            <span className="text-lg">✨</span>
            <span>10 Ilhas • Um Destino Inesquecível</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="-mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="group h-56 overflow-hidden rounded-3xl text-left shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 active:scale-95"
              style={{ background: "#ffffff" }}
            >
              <div className="relative h-full w-full overflow-hidden flex flex-col">
                <img
                  src={card.image}
                  alt={card.title}
                  onError={(event) => {
                    (event.currentTarget as HTMLImageElement).src = fallbackImage;
                  }}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003B7A] via-[#003B7A]/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="relative h-full flex flex-col justify-end p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white w-fit mb-3 shadow-md">
                    <span className="text-lg">{card.icon}</span>
                    <span>{card.title}</span>
                  </div>
                  <p className="text-sm font-semibold leading-6 text-white">{card.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#0057B8] font-semibold">Porque Visitar Cabo Verde</p>
              <h2 className="mt-2 text-3xl font-bold text-[#003B7A]">Experiências memoráveis</h2>
            </div>
            <span className="rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFC400] px-4 py-2 text-sm font-bold text-[#003B7A] shadow-md">Premium</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-3xl border-2 border-[#E5EAF2] bg-gradient-to-br from-[#F9FBFF] to-[#F0F6FF] p-5 hover:border-[#0057B8] hover:shadow-md transition-all duration-300">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0057B8] to-[#003B7A] text-2xl text-white shadow-lg">
                  {reason.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#003B7A]">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5F7C99]">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#0057B8] font-semibold">Ilhas</p>
              <h2 className="mt-2 text-3xl font-bold text-[#003B7A]">Descubra as ilhas inspiradoras</h2>
            </div>
            <button
              onClick={() => onNavigate("islands")}
              className="rounded-full bg-gradient-to-r from-[#0057B8] to-[#003B7A] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Ver todas →
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {categoryTabs.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === item ? "bg-gradient-to-r from-[#0057B8] to-[#003B7A] text-white shadow-md" : "bg-[#F0F5FA] text-[#0057B8] hover:bg-[#E0EBFF]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {islandsPreview
              .filter((island) => activeCategory === "Todas" || island.category === activeCategory)
              .map((island) => (
                <button
                  key={island.name}
                  onClick={() => onNavigate("island-detail", island.name)}
                  className="group overflow-hidden rounded-3xl bg-white text-left shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 active:scale-95 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={island.img}
                      alt={island.name}
                      onError={(event) => {
                        (event.currentTarget as HTMLImageElement).src = fallbackImage;
                      }}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#003B7A]/30 to-[#003B7A]/90" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xl font-bold text-white">{island.name}</p>
                      <p className="text-xs uppercase tracking-widest text-white/85 mt-1">{island.attractions}</p>
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <p className="text-sm leading-6 text-[#5F7C99]">{island.desc}</p>
                  </div>
                </button>
              ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#0057B8] font-semibold">Gastronomia</p>
              <h2 className="mt-2 text-3xl font-bold text-[#003B7A]">Sabores de Cabo Verde</h2>
            </div>
            <button
              onClick={() => onNavigate("gastronomy")}
              className="rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFC400] px-6 py-2.5 text-sm font-semibold text-[#003B7A] shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Ver pratos →
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish) => (
              <div key={dish.name} className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    onError={(event) => {
                      (event.currentTarget as HTMLImageElement).src = fallbackImage;
                    }}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#003B7A]/40" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#003B7A]">{dish.name}</p>
                    <p className="mt-2 text-xs uppercase tracking-widest text-[#0057B8] font-semibold">{dish.origin}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#5F7C99]">{dish.curious}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-gradient-to-br from-[#003B7A] via-[#0057B8] to-[#003B7A] p-8 text-white shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FFD700] font-semibold">Especial</p>
              <h2 className="mt-2 text-3xl font-bold">{worldCupInfo.headline}</h2>
            </div>
            <button
              onClick={() => onNavigate("worldcup")}
              className="rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFC400] px-6 py-2.5 text-sm font-semibold text-[#003B7A] shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Ver detalhes →
            </button>
          </div>
          <p className="text-base leading-7 text-[#F0F8FF]">{worldCupInfo.summary}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {worldCupInfo.calendar.map((item) => (
              <div key={item.match} className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <p className="text-sm font-bold">{item.match}</p>
                <p className="mt-3 text-xs text-[#F0F8FF]/90 font-semibold">{item.date}</p>
                <p className="text-xs text-[#F0F8FF]/75">{item.venue}</p>
              </div>
            ))}
          </div>
        </section>



        <section className="mt-8 mb-8 text-center">
          <p className="text-sm text-[#5F7C99]">Explorado com ❤️ • Guia Inteligente de Cabo Verde</p>
        </section>
      </div>
    </div>
  );
}
