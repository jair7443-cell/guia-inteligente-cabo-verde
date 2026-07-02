import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, BadgeCheck, CalendarDays, Clock3, Flag, Globe2, MapPin, Shield, Sparkles, Star, Trophy, Users } from "lucide-react";
import teamHero from "../../assets/images/worldcup/team-hero.jpg";
import coachBubista from "../../assets/images/worldcup/coach-bubista.jpg";
import ryanMendes from "../../assets/images/worldcup/ryan-mendes.png";
import teamSquad from "../../assets/images/worldcup/team-squad.jpg";
import galleryTraining from "../../assets/images/worldcup/gallery/gallery-training.jpg";
import galleryMatch from "../../assets/images/worldcup/gallery/gallery-match.jpg";
import galleryQualification from "../../assets/images/worldcup/gallery/gallery-qualification.jpg";
import galleryFans from "../../assets/images/worldcup/gallery/gallery-fans.jpg";
import galleryStadiums from "../../assets/images/worldcup/gallery/gallery-stadiums.jpg";
import fcfLogo from "../../assets/images/worldcup/fcf-logo.png";

interface Props {
  onBack: () => void;
}

const targetDate = new Date("2026-06-15T16:00:00");
const fallbackImage = "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80";

function ImageWithFallback({ src, alt, className, ...props }: { src: string; alt: string; className?: string; [key: string]: unknown }) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (imageSrc !== fallbackImage) {
          setImageSrc(fallbackImage);
        }
      }}
    />
  );
}

const stats = [
  { label: "Participação Mundial", value: "1", description: "História inédita", icon: Trophy, accent: "from-[#fbbf24] via-[#f59e0b] to-[#fb923c]" },
  { label: "Ranking FIFA", value: "68º", description: "Posição atual", icon: Shield, accent: "from-[#38bdf8] via-[#0ea5e9] to-[#2563eb]" },
  { label: "Jogadores Convocados", value: "26", description: "Plantel completo", icon: Users, accent: "from-[#22c55e] via-[#14b8a6] to-[#0f766e]" },
  { label: "Jogos da Fase de Grupos", value: "3", description: "Percurso no Mundial", icon: Globe2, accent: "from-[#6366f1] via-[#8b5cf6] to-[#7c3aed]" },
  { label: "Objetivo", value: "Oitavos-de-final", description: "Ambição da seleção", icon: Star, accent: "from-[#f472b6] via-[#ec4899] to-[#db2777]" },
];

const groupTeams = [
  { name: "Cabo Verde", flag: "🇨🇻", ranking: "68º", badge: "Primeira Participação", highlight: true },
  { name: "Espanha", flag: "🇪🇸", ranking: "3º", badge: "Favorita", highlight: false },
  { name: "Uruguai", flag: "🇺🇾", ranking: "11º", badge: "Tradicional", highlight: false },
  { name: "Arábia Saudita", flag: "🇸🇦", ranking: "58º", badge: "Presença sólida", highlight: false },
];

const matches = [
  { date: "15 Junho", time: "16:00", opponent: "Espanha", flag: "🇪🇸", venue: "Atlanta Stadium", city: "Atlanta", group: "Grupo H" },
  { date: "21 Junho", time: "22:00", opponent: "Uruguai", flag: "🇺🇾", venue: "Miami Stadium", city: "Miami", group: "Grupo H" },
  { date: "26 Junho", time: "20:00", opponent: "Arábia Saudita", flag: "🇸🇦", venue: "Houston Stadium", city: "Houston", group: "Grupo H" },
];

const squadPlayers = [
  {
    name: "Ryan Mendes",
    position: "Avançado",
    club: "Villarreal",
    age: 34,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    nationality: "Cabo-verdiano",
    height: "1.75 m",
    matches: 95,
    goals: 26,
    caps: 72,
    bio: "Líder técnico e referência ofensiva da seleção, com visão de jogo e finalização de alto nível.",
  },
  {
    name: "Logan Costa",
    position: "Defesa Central",
    club: "Villarreal",
    age: 27,
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80",
    nationality: "Cabo-verdiano",
    height: "1.90 m",
    matches: 41,
    goals: 2,
    caps: 29,
    bio: "Segurança defensiva e presença dominante no eixo, com grande capacidade de leitura de jogo.",
  },
  {
    name: "Kevin Pina",
    position: "Médio",
    club: "GD Chaves",
    age: 31,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    nationality: "Cabo-verdiano",
    height: "1.78 m",
    matches: 67,
    goals: 9,
    caps: 42,
    bio: "Criatividade e energia no meio-campo azul, com grande capacidade de recuperar bola.",
  },
  {
    name: "Dailon Livramento",
    position: "Avançado",
    club: "AC Milan",
    age: 26,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
    nationality: "Cabo-verdiano",
    height: "1.72 m",
    matches: 48,
    goals: 12,
    caps: 31,
    bio: "Velocidade, técnica e explosão no ataque, um dos talentos mais promissores do país.",
  },
];

const timeline = [
  { year: "2023", title: "CAN", description: "Primeiros passos na caminhada continental com grande impacto nacional." },
  { year: "2024", title: "Qualificação", description: "Campanha consistente e decisiva para o sonho do Mundial." },
  { year: "2025", title: "Apuramento", description: "Vitória histórica que fechou a porta ao sonho dos Tubarões Azuis." },
  { year: "2026", title: "Mundial FIFA", description: "O maior palco do futebol mundial acolhe a estreia de Cabo Verde." },
];

const gallery = [
  { title: "Treinos", category: "Treinos", image: galleryTraining, description: "Sessões de preparação da Seleção Nacional antes do Mundial FIFA 2026." },
  { title: "Jogos", category: "Jogos", image: galleryMatch, description: "Momentos oficiais dos jogos da Seleção de Cabo Verde durante o Mundial FIFA 2026." },
  { title: "Qualificação", category: "Qualificação", image: galleryQualification, description: "Campanha histórica que garantiu a presença inédita de Cabo Verde no Campeonato do Mundo FIFA 2026." },
  { title: "Adeptos", category: "Torcida", image: galleryFans, description: "Os adeptos cabo-verdianos apoiaram a Seleção Nacional durante toda a campanha do Mundial FIFA 2026, criando um ambiente de festa e orgulho nacional." },
  { title: "Estádios", category: "Estádios", image: galleryStadiums, description: "Os modernos estádios que receberam os jogos do Campeonato do Mundo FIFA 2026." },
];

function getTimeLeft(date: Date) {
  const total = date.getTime() - new Date().getTime();

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export function WorldCupScreen({ onBack }: Props) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const [selectedPlayer, setSelectedPlayer] = useState<(typeof squadPlayers)[number] | null>(null);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("Todos");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredGallery = activeGalleryCategory === "Todos" ? gallery : gallery.filter((item) => item.category === activeGalleryCategory);

  return (
    <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#f3f9ff_0%,#f8fbff_100%)]" style={{ fontFamily: "Nunito, sans-serif" }}>
      <div
        className="relative overflow-hidden px-4 pb-10 pt-5 text-white sm:px-6 sm:pb-12 sm:pt-7 lg:px-8 lg:pb-14 lg:pt-8"
        style={{ background: "linear-gradient(135deg, #002c5f 0%, #004f9d 42%, #0066c7 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-8%] top-[-12%] h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-[-8%] top-[8%] h-56 w-56 rounded-full bg-[#ffd76f]/20 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[12%] h-56 w-56 rounded-full bg-[#7dd3fc]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.16),transparent_35%)]" />
        </div>

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent" />
        <div className="absolute left-6 top-6 h-2.5 w-2.5 rounded-full border border-white/30 bg-[#ffd76f]/70" />
        <div className="absolute bottom-8 right-6 h-3 w-3 rounded-full border border-white/20 bg-white/20" />

        <button
          onClick={onBack}
          className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:scale-105 hover:bg-white/20 sm:h-14 sm:w-14"
        >
          <ArrowLeft size={18} />
        </button>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-10 mx-auto flex min-h-[44vh] max-w-6xl flex-col items-center justify-center sm:min-h-[52vh] lg:min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-[rgba(255,255,255,0.12)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[10px] sm:h-24 sm:w-24 lg:h-24 lg:w-24"
          >
            <img src={fcfLogo} alt="Federação Cabo-verdiana de Futebol" className="h-[44px] w-[44px] object-contain sm:h-[52px] sm:w-[52px] lg:h-[56px] lg:w-[56px]" />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="mb-3 text-center text-[11px] font-black uppercase tracking-[0.45em] text-[#FFD700] sm:text-[12px]">
            Cabo Verde no Mundial FIFA 2026
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-4 max-w-3xl text-center text-[28px] font-black leading-[1.05] tracking-[0.04em] text-white sm:text-[40px] lg:text-[52px]">
            CABO VERDE NO MUNDIAL FIFA 2026
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="mx-auto mb-6 max-w-[760px] text-center text-[15px] leading-7 text-white/85 sm:text-[16px]">
            A primeira participação da Seleção Nacional de Cabo Verde no Campeonato do Mundo FIFA representa um momento histórico para o país e para todos os Tubarões Azuis.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.6 }} className="mb-3 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <div className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md sm:px-4">
              🇨🇻 Seleção Nacional
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md sm:px-4">
              🏆 Mundial FIFA 2026
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.32, duration: 0.6 }} className="mb-5 w-full max-w-[95%] overflow-hidden rounded-3xl border border-[#3b82f6] bg-transparent p-1.5 shadow-[0_24px_60px_rgba(59,130,246,0.18)] sm:max-w-[92%] sm:p-2 lg:max-w-[95%] lg:p-2.5">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-[22px]">
              <ImageWithFallback
                src={teamHero}
                alt="Seleção de Cabo Verde"
                className="h-[280px] w-full rounded-[22px] object-cover sm:h-[340px] lg:h-[420px]"
              />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.6 }} className="flex w-full flex-col items-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection("calendario")}
              className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#003B7A] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:px-6 sm:py-3.5 sm:text-[15px]"
              style={{ background: "linear-gradient(135deg, #FFD700, #ffe066)" }}
            >
              <CalendarDays size={16} />
              Ver Calendário
            </motion.button>

            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection("plantel")}
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_16px_35px_rgba(0,0,0,0.2)] sm:px-6 sm:py-3.5 sm:text-[15px]"
            >
              <Users size={16} />
              Ver Plantel
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-[28px] border border-slate-100 bg-white/90 p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] backdrop-blur sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={18} className="text-[#0057B8]" />
            <h2 className="text-[17px] font-black text-[#0a1628]">Estatísticas</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div whileHover={{ y: -4, scale: 1.01 }} key={stat.label} className="rounded-[22px] border border-slate-100 bg-gradient-to-br from-white to-[#f7fbff] p-4 shadow-[0_12px_30px_rgba(20,68,126,0.08)]">
                  <div className={`mb-3 inline-flex rounded-2xl bg-gradient-to-br ${stat.accent} p-3 text-white shadow-lg`}>
                    <Icon size={18} />
                  </div>
                  <p className="text-[22px] font-black text-[#003B7A]">{stat.value}</p>
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-sm text-slate-600">{stat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="rounded-[28px] bg-gradient-to-br from-[#003B7A] via-[#0057B8] to-[#0d5fb3] p-4 text-white shadow-[0_18px_55px_rgba(0,87,184,0.2)] sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[12px] uppercase tracking-[0.25em] text-[#FFD700]">Contagem Decrescente</p>
              <h2 className="text-[17px] font-black">Próximo jogo</h2>
            </div>
            <div className="rounded-full bg-white/10 p-2">
              <Clock3 size={18} />
            </div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 text-center text-sm font-semibold">
              <span className="rounded-full bg-white/10 px-3 py-1">🇨🇻 Cabo Verde</span>
              <span className="text-[#FFD700]">vs</span>
              <span className="rounded-full bg-white/10 px-3 py-1">🇪🇸 Espanha</span>
            </div>
            <div className="mb-4 text-center text-sm text-white/85">15 Junho 2026 · Atlanta · Atlanta Stadium</div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Dias", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((unit) => (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} key={unit.label} className="rounded-[18px] bg-white/10 p-3 text-center backdrop-blur">
                  <p className="text-[20px] font-black text-[#FFD700]">{String(unit.value).padStart(2, "0")}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/80">{unit.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <Flag size={18} className="text-[#0057B8]" />
            <h2 className="text-[17px] font-black text-[#0a1628]">Grupo H</h2>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-[#f8fbff]">
            {groupTeams.map((team) => (
              <motion.div whileHover={{ y: -2, scale: 1.005 }} key={team.name} className={`flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between ${team.highlight ? "bg-gradient-to-r from-[#fff8d8] via-[#fff5b8] to-[#ffe69c]" : "bg-transparent"}`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-[24px] shadow-sm">
                    {team.flag}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-black text-[#003B7A]">{team.name}</p>
                      {team.highlight ? <Star size={14} className="text-[#b8860b]" /> : null}
                    </div>
                    <p className="text-[13px] text-slate-500">{team.ranking}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:justify-end">
                  <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${team.highlight ? "bg-[#ffd76f] text-[#8a5b00]" : "bg-[#eaf4ff] text-[#0057B8]"}`}>
                    {team.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="calendario" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <CalendarDays size={18} className="text-[#0057B8]" />
            <h2 className="text-[17px] font-black text-[#0a1628]">📅 Calendário Oficial</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                id: 1,
                homeFlag: "🇨🇻",
                homeName: "Cabo Verde",
                awayFlag: "🇪🇸",
                awayName: "Espanha",
                date: "15 Junho 2026",
                city: "Atlanta",
                stadium: "Atlanta Stadium",
                result: "Empate",
              },
              {
                id: 2,
                homeFlag: "🇨🇻",
                homeName: "Cabo Verde",
                awayFlag: "🇺🇾",
                awayName: "Uruguai",
                date: "21 Junho 2026",
                city: "Miami",
                stadium: "Miami Stadium",
                result: "Empate",
              },
              {
                id: 3,
                homeFlag: "🇨🇻",
                homeName: "Cabo Verde",
                awayFlag: "🇸🇦",
                awayName: "Arábia Saudita",
                date: "25 Junho 2026",
                city: "Dallas",
                stadium: "Dallas Stadium",
                result: "Empate",
              },
            ].map((match) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_22px_60px_rgba(15,78,165,0.08)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.3em] text-[#0057B8]">JOGO {match.id}</p>
                    <p className="mt-3 text-[15px] font-black text-[#003B7A]">{match.date}</p>
                  </div>
                  <span className="rounded-full bg-slate-500 px-3 py-1.5 text-[12px] font-semibold text-white">✓ FINALIZADO</span>
                </div>
                <div className="mt-5 rounded-[20px] border border-slate-100 bg-[#f8fbff] p-4">
                  <div className="flex items-center justify-between gap-4 text-center">
                    <div>
                      <p className="text-[28px] font-black text-[#003B7A]">{match.homeFlag}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-600">{match.homeName}</p>
                    </div>
                    <div className="text-[34px] font-black text-[#003B7A]">
                      0 <span className="mx-4">—</span> 0
                    </div>
                    <div>
                      <p className="text-[28px] font-black text-[#003B7A]">{match.awayFlag}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-600">{match.awayName}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <p className="flex items-center gap-2 text-sm text-slate-600"><span>📍</span>{match.stadium}</p>
                  <p className="text-sm text-slate-600">{match.city}</p>
                  <p className="flex items-center gap-2 text-sm text-slate-600"><span>⚽</span>Resultado: {match.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <Users size={18} className="text-[#0057B8]" />
            <h2 className="text-[17px] font-black text-[#0a1628]">Treinador</h2>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-gradient-to-br from-[#f8fbff] to-white shadow-[0_16px_40px_rgba(20,68,126,0.08)]">
            <div className="relative">
              <ImageWithFallback src={coachBubista} alt="Bubista" className="h-56 w-full object-cover rounded-[22px] sm:h-64" />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[22px] font-black text-[#003B7A]">Pedro Leitão Brito</p>
                  <p className="text-sm font-semibold text-[#0057B8]">Selecionador Nacional</p>
                </div>
                <span className="rounded-full bg-[#eaf4ff] px-3 py-1 text-[12px] font-semibold text-[#0057B8]">Desde 2020</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { title: "Qualificação Mundial 2026", icon: BadgeCheck },
                  { title: "Quartos CAN", icon: Trophy },
                  { title: "Mais de 60 jogos", icon: Shield },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[18px] border border-slate-100 bg-white/90 p-3">
                      <div className="mb-2 inline-flex rounded-full bg-[#eaf4ff] p-2 text-[#0057B8]">
                        <Icon size={14} />
                      </div>
                      <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <Users size={18} className="text-[#0057B8]" />
            <h2 className="text-[17px] font-black text-[#0a1628]">Capitão</h2>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-gradient-to-br from-[#f8fbff] to-white shadow-[0_16px_40px_rgba(20,68,126,0.08)]">
            <div className="overflow-hidden">
              <ImageWithFallback src={ryanMendes} alt="Ryan Mendes" className="w-full h-[260px] object-cover rounded-[22px]" />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[22px] font-black text-[#003B7A]">Ryan Mendes</p>
                  <p className="mt-1 text-sm font-semibold text-[#0057B8]">Capitão da Seleção Nacional de Cabo Verde</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Capitão dos Tubarões Azuis e uma das maiores referências da história do futebol cabo-verdiano.</p>
                </div>
                <span className="rounded-full bg-[#eaf4ff] px-3 py-1 text-[12px] font-semibold text-[#0057B8]">Capitão</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[18px] border border-slate-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-[28px] font-black text-[#003B7A]">100</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Internacionalizações</p>
                </div>
                <div className="rounded-[18px] border border-slate-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-[28px] font-black text-[#003B7A]">22</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Golos pela Seleção</p>
                </div>
                <div className="rounded-[18px] border border-slate-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-[24px] font-black text-[#003B7A]">39 anos</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Veterano da equipa</p>
                </div>
                <div className="rounded-[18px] border border-slate-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-[20px] font-black text-[#003B7A]">Capitão</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Líder dos Tubarões Azuis</p>
                </div>
              </div>
              <div className="mt-4 rounded-[22px] border border-[#dbeafe] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] p-4 shadow-[0_12px_30px_rgba(59,130,246,0.08)]">
                <p className="text-[15px] font-black text-[#003B7A]">Recorde Histórico</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Ryan Mendes tornou-se o primeiro jogador da história de Cabo Verde a atingir 100 internacionalizações pela Seleção Nacional durante o Mundial FIFA 2026.
                  Também é o jogador com mais jogos e o melhor marcador da história da Seleção A de Cabo Verde, com 22 golos.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/80 px-3 py-2 text-sm font-semibold text-[#0057B8] shadow-sm">🏆 100 Internacionalizações</span>
                <span className="rounded-full bg-white/80 px-3 py-2 text-sm font-semibold text-[#0057B8] shadow-sm">⚽ Melhor marcador histórico</span>
                <span className="rounded-full bg-white/80 px-3 py-2 text-sm font-semibold text-[#0057B8] shadow-sm">🇨🇻 Capitão Nacional</span>
                <span className="rounded-full bg-white/80 px-3 py-2 text-sm font-semibold text-[#0057B8] shadow-sm">🌍 Mundial FIFA 2026</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="plantel" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] sm:p-5">
          <div className="mb-4">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[#0057B8]">Plantel Oficial</p>
            <h2 className="mt-3 text-[28px] font-black text-[#003B7A] sm:text-[32px]">Plantel Oficial</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
              Os 26 convocados para representar Cabo Verde na sua primeira participação no Campeonato do Mundo FIFA 2026.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.01 }} className="overflow-hidden rounded-3xl border border-blue-100 shadow-2xl">
            <ImageWithFallback src={teamSquad} alt="Plantel Oficial de Cabo Verde" className="w-full h-[320px] object-cover rounded-3xl shadow-2xl sm:h-[420px]" loading="lazy" />
          </motion.div>
          <div className="mt-4 rounded-[24px] border border-slate-100 bg-[#f8fbff]/80 p-4 shadow-[0_12px_30px_rgba(59,130,246,0.08)]">
            <p className="text-sm font-semibold text-[#0057B8]">Seleção Nacional de Cabo Verde</p>
            <p className="mt-1 text-sm font-semibold text-[#003B7A]">Mundial FIFA 2026</p>
            <p className="mt-1 text-sm text-slate-600">Primeira participação da história.</p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-[0_20px_45px_rgba(15,78,165,0.08)] transition-all duration-300">
              <div className="mb-4 rounded-[20px] bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0057B8]">🧤 Guarda-redes</p>
              </div>
              <div className="grid gap-3 text-[#003B7A]">
                <p className="text-lg font-semibold">Vozinha</p>
                <p className="text-lg font-semibold">Márcio Rosa</p>
                <p className="text-lg font-semibold">CJ Dos Santos</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-[0_20px_45px_rgba(15,78,165,0.08)] transition-all duration-300">
              <div className="mb-4 rounded-[20px] bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0057B8]">🛡️ Defesas</p>
              </div>
              <div className="grid gap-3 text-[#003B7A]">
                <p className="text-lg font-semibold">Steven Moreira</p>
                <p className="text-lg font-semibold">Wagner Pina</p>
                <p className="text-lg font-semibold">Sidny Cabral</p>
                <p className="text-lg font-semibold">Logan Costa</p>
                <p className="text-lg font-semibold">Roberto Lopes</p>
                <p className="text-lg font-semibold">Kelvin Pires</p>
                <p className="text-lg font-semibold">Stopira</p>
                <p className="text-lg font-semibold">Diney Borges</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-[0_20px_45px_rgba(15,78,165,0.08)] transition-all duration-300">
              <div className="mb-4 rounded-[20px] bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0057B8]">⚙️ Médios</p>
              </div>
              <div className="grid gap-3 text-[#003B7A]">
                <p className="text-lg font-semibold">Jamiro Monteiro</p>
                <p className="text-lg font-semibold">Deroy Duarte</p>
                <p className="text-lg font-semibold">Kevin Pina</p>
                <p className="text-lg font-semibold">Laros Duarte</p>
                <p className="text-lg font-semibold">Telmo Arcanjo</p>
                <p className="text-lg font-semibold">Yannick Semedo</p>
                <p className="text-lg font-semibold">João Paulo Fernandes</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-[0_20px_45px_rgba(15,78,165,0.08)] transition-all duration-300">
              <div className="mb-4 rounded-[20px] bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0057B8]">⚽ Avançados</p>
              </div>
              <div className="grid gap-3 text-[#003B7A]">
                <p className="text-lg font-semibold">Ryan Mendes (Capitão)</p>
                <p className="text-lg font-semibold">Garry Rodrigues</p>
                <p className="text-lg font-semibold">Jovane Cabral</p>
                <p className="text-lg font-semibold">Nuno da Costa</p>
                <p className="text-lg font-semibold">Dailon Livramento</p>
                <p className="text-lg font-semibold">Gilson Benchimol</p>
                <p className="text-lg font-semibold">Willy Semedo</p>
                <p className="text-lg font-semibold">Hélio Varela</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="mt-6 rounded-[24px] border border-[#dbeafe] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] p-5 shadow-[0_20px_60px_rgba(59,130,246,0.1)]">
            <p className="text-[18px] font-black text-[#003B7A]">Uma geração histórica</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Os 26 jogadores convocados por Bubista representam a primeira geração de futebolistas cabo-verdianos a disputar um Campeonato do Mundo FIFA.
              Esta seleção alcançou um dos maiores marcos da história do futebol cabo-verdiano.
            </p>
          </motion.div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0057B8] shadow-sm">🏆 Mundial FIFA 2026</span>
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0057B8] shadow-sm">🇨🇻 Primeira Participação</span>
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0057B8] shadow-sm">👥 26 Convocados</span>
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0057B8] shadow-sm">⚽ Tubarões Azuis</span>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <Trophy size={18} className="text-[#0057B8]" />
            <h2 className="text-[17px] font-black text-[#0a1628]">Caminho até ao Mundial</h2>
          </div>
          <div className="space-y-3">
            {timeline.map((item, index) => (
              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + index * 0.08 }} key={item.year} className="relative rounded-[20px] border border-slate-100 bg-[#f8fbff] p-4 pl-6">
                <div className="absolute left-2 top-5 h-3 w-3 rounded-full border-4 border-white bg-[#0057B8] shadow" />
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-[0.25em] text-[#0057B8]">{item.year}</p>
                    <p className="text-[16px] font-black text-[#003B7A]">{item.title}</p>
                  </div>
                  <span className="text-sm text-slate-500">{item.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] sm:p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Star size={18} className="text-[#0057B8]" />
              <h2 className="text-[17px] font-black text-[#0a1628]">Galeria</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Todos', 'Treinos', 'Jogos', 'Qualificação', 'Torcida', 'Estádios'].map((category) => (
                <button key={category} onClick={() => setActiveGalleryCategory(category)} className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition ${activeGalleryCategory === category ? "bg-[#0057B8] text-white" : "bg-[#f4f8ff] text-slate-600"}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filteredGallery.map((item) => (
              <motion.div whileHover={{ scale: 1.03 }} key={item.title} className="group overflow-hidden rounded-[22px] border border-slate-100 bg-[#f8fbff]">
                <div className="overflow-hidden">
                  <ImageWithFallback src={item.image} alt={item.title} className="h-36 w-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-3">
                  <p className="text-[14px] font-black text-[#003B7A]">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_18px_55px_rgba(18,84,160,0.08)] sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-[#0057B8]" />
            <h2 className="text-[17px] font-black text-[#0a1628]">Mapa dos Jogos</h2>
          </div>
          <div className="rounded-[24px] border border-slate-100 bg-[#f8fbff] p-3">
            <svg viewBox="0 0 400 260" className="h-56 w-full">
              <rect x="20" y="20" width="360" height="220" rx="24" fill="#eef6ff" />
              <path d="M80 140c20-25 35-40 80-40 50 0 80 40 130 40 25 0 45-10 65-25" stroke="#9ac2ea" strokeWidth="8" fill="none" strokeLinecap="round" />
              <circle cx="130" cy="140" r="18" fill="#0057B8" />
              <circle cx="250" cy="150" r="18" fill="#0057B8" />
              <circle cx="320" cy="115" r="18" fill="#0057B8" />
              <circle cx="130" cy="140" r="5" fill="#FFD700" />
              <circle cx="250" cy="150" r="5" fill="#FFD700" />
              <circle cx="320" cy="115" r="5" fill="#FFD700" />
              <text x="120" y="175" fill="#003B7A" fontSize="14" fontWeight="700">Atlanta</text>
              <text x="235" y="185" fill="#003B7A" fontSize="14" fontWeight="700">Miami</text>
              <text x="302" y="140" fill="#003B7A" fontSize="14" fontWeight="700">Houston</text>
            </svg>
          </div>
        </motion.section>
      </div>

      {selectedPlayer ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" onClick={() => setSelectedPlayer(null)}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} onClick={(event) => event.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-[30px] border border-white/20 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
              <p className="text-[16px] font-black text-[#003B7A]">Ficha completa</p>
              <button onClick={() => setSelectedPlayer(null)} className="rounded-full bg-[#f4f8ff] px-3 py-1.5 text-sm font-semibold text-[#0057B8]">Fechar</button>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex flex-col gap-4 md:flex-row">
                <ImageWithFallback src={selectedPlayer.image} alt={selectedPlayer.name} className="h-56 w-full rounded-[22px] object-cover md:h-64 md:w-48" />
                <div className="flex-1">
                  <p className="text-[22px] font-black text-[#003B7A]">{selectedPlayer.name}</p>
                  <p className="text-sm font-semibold text-[#0057B8]">{selectedPlayer.position}</p>
                  <p className="mt-2 text-sm text-slate-600">{selectedPlayer.bio}</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      { label: "Clube", value: selectedPlayer.club },
                      { label: "Idade", value: `${selectedPlayer.age} anos` },
                      { label: "Altura", value: selectedPlayer.height },
                      { label: "Jogos", value: selectedPlayer.matches },
                      { label: "Golos", value: selectedPlayer.goals },
                      { label: "Internacionalizações", value: selectedPlayer.caps },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[16px] border border-slate-100 bg-[#f8fbff] p-3">
                        <p className="text-[12px] uppercase tracking-[0.2em] text-[#0057B8]">{item.label}</p>
                        <p className="mt-1 font-semibold text-slate-700">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}
