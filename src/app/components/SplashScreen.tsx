import { motion } from "motion/react";

interface Props {
  onEnter: () => void;
}

export function SplashScreen({ onEnter }: Props) {
  return (
    <div
      className="relative flex flex-col items-center justify-between h-full w-full overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0066CC 0%, #003d7a 50%, #001f3d 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full opacity-20" style={{ background: "#FFD700" }} />
      <div className="absolute bottom-[-60px] left-[-60px] w-52 h-52 rounded-full opacity-15" style={{ background: "#00AAFF" }} />
      <div className="absolute top-1/3 left-[-40px] w-32 h-32 rounded-full opacity-10" style={{ background: "#ffffff" }} />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1621944668311-7a97c80f0190?w=800&h=1200&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-8 z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <div
            className="w-28 h-28 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M32 8 C20 8 12 18 12 28 C12 42 32 58 32 58 C32 58 52 42 52 28 C52 18 44 8 32 8Z" fill="white" opacity="0.9"/>
              <circle cx="32" cy="28" r="8" fill="#0066CC"/>
              <path d="M18 24 Q32 14 46 24" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center"
        >
          <h1
            className="text-white text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 800, lineHeight: 1.2 }}
          >
            Descubra Cabo Verde com Inteligência
          </h1>
          <p className="text-white/70 text-center mt-2" style={{ fontSize: "15px", fontFamily: "Nunito, sans-serif" }}>
            Explore as ilhas, a cultura, a gastronomia e os tesouros escondidos de Cabo Verde.
          </p>
        </motion.div>

        {/* Wave divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex items-center gap-2"
        >
          <div className="w-8 h-0.5 rounded-full" style={{ background: "#FFD700" }} />
          <div className="w-16 h-0.5 rounded-full" style={{ background: "#FFD700" }} />
          <div className="w-8 h-0.5 rounded-full" style={{ background: "#FFD700" }} />
        </motion.div>
      </div>

      {/* Bottom section */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full px-8 pb-12 z-10"
      >
        <div className="text-center mb-6">
          <p className="text-white/50 text-xs" style={{ fontFamily: "Nunito, sans-serif" }}>
            10 Ilhas • Um Destino Inesquecível
          </p>
        </div>
        <button
          onClick={onEnter}
          className="w-full py-4 rounded-2xl text-center shadow-2xl active:scale-95 transition-transform"
          style={{
            background: "linear-gradient(135deg, #FFD700, #FFA500)",
            color: "#0a1628",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 800,
            fontSize: "17px",
            boxShadow: "0 8px 32px rgba(255, 215, 0, 0.4)",
          }}
        >
          Começar a Explorar
        </button>
        <p className="text-white/40 text-center mt-4 text-xs" style={{ fontFamily: "Nunito, sans-serif" }}>
          Free · No registration required
        </p>
      </motion.div>
    </div>
  );
}
