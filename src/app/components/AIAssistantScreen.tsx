import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  role: "user" | "ai";
  text: string;
  time: string;
}

const suggestions = [
  "O que visitar em Santiago?",
  "Melhor praia da ilha do Sal?",
  "Onde comer cachupa?",
  "Roteiro de 7 dias em Cabo Verde?",
  "O que fazer em São Vicente?",
];

const aiResponses: Record<string, string> = {
  "O que visitar em Santiago?":
    "Em Santiago, não perca a Cidade Velha (Património Mundial da UNESCO), o mercado da Sucupira, a Praia de Tarrafal e o Parque Natural da Serra Malagueta. Para um toque cultural, visite o Museu Etnográfico e prove a comida local em restaurantes familiares.",
  "Melhor praia da ilha do Sal?":
    "A Praia de Santa Maria é a mais famosa, com areia branca e águas cristalinas, ótimas opções de esportes aquáticos e uma vida noturna animada. Se procura algo mais tranquilo, visite a praia do Buracona ou Ponta Preta.",
  "Onde comer cachupa?":
    "A melhor cachupa encontra-se em restaurantes tradicionais de Santiago, como o Quintal da Música e o Restaurante Crioulo. Procure também tascas locais na Cidade Velha e em Assomada para uma versão caseira e autêntica.",
  "Roteiro de 7 dias em Cabo Verde?":
    "Sugestão: 3 dias em Sal para praia e esportes aquáticos, 2 dias em Santiago para história e cultura, 1 dia em Fogo para o vulcão e 1 dia em São Vicente para música e vida noturna. Combine transfers internos e reserve hotéis com antecedência. Assim terá uma experiência equilibrada entre natureza, cultura e praia.",
  "O que fazer em São Vicente?":
    "Em São Vicente, explore Mindelo, a Baía das Gatas, o Monte Verde e os cafés musicais. Aproveite o mercado municipal, os bares de morna e os passeios à beira-mar para sentir a energia cultural da ilha.",
};

function getTime() {
  return new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });
}

export function AIAssistantScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "ai",
      text: "Olá! Sou o assistente inteligente do Guia de Cabo Verde 🌊. Posso ajudá-lo com informações sobre destinos, viagens, cultura, gastronomia e muito mais! Como posso ajudar?",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response =
        aiResponses[text] ||
        "Excelente pergunta! Cabo Verde tem muito para oferecer. Para informações mais detalhadas sobre " +
          text.toLowerCase() +
          ", recomendo consultar as secções de Ilhas, Turismo ou Gastronomia no menu. Posso também ajudar com dicas de viagem, alojamento e muito mais! 😊";

      setIsTyping(false);
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "ai", text: response, time: getTime() }]);
    }, 1200);
  }

  return (
    <div className="flex flex-col h-full" style={{ background: "#f0f6ff", fontFamily: "Nunito, sans-serif" }}>
      {/* Header */}
      <div
        className="px-5 pt-10 pb-4 flex items-center gap-3"
        style={{ background: "linear-gradient(160deg, #003d7a 0%, #0066CC 100%)" }}
      >
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl"
          style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
        >
          🤖
        </div>
        <div>
          <h1 className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px" }}>
            Assistente IA
          </h1>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <p className="text-white/70 text-xs">Online · Pronto para ajudar</p>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="px-4 py-3" style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,102,204,0.08)" }}>
        <p style={{ fontSize: "11px", color: "#8aaccc", fontFamily: "Nunito, sans-serif", marginBottom: "8px" }}>
          Perguntas frequentes:
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => sendMessage(s)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs transition-all active:scale-95"
              style={{
                background: "#e8f2ff",
                color: "#0066CC",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 600,
                border: "1px solid rgba(0,102,204,0.15)",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ scrollbarWidth: "none" }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
          >
            {msg.role === "ai" && (
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 text-sm"
                style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
              >
                🤖
              </div>
            )}
            <div style={{ maxWidth: "75%" }}>
              <div
                className="px-4 py-3 rounded-2xl"
                style={{
                  background: msg.role === "user" ? "linear-gradient(135deg, #0066CC, #0099FF)" : "#ffffff",
                  color: msg.role === "user" ? "white" : "#0a1628",
                  borderBottomRightRadius: msg.role === "user" ? "4px" : "16px",
                  borderBottomLeftRadius: msg.role === "ai" ? "4px" : "16px",
                  boxShadow: "0 2px 12px rgba(0,102,204,0.1)",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                {msg.text}
              </div>
              <p
                className={`text-xs mt-1 ${msg.role === "user" ? "text-right" : "text-left"}`}
                style={{ color: "#8aaccc", fontFamily: "Nunito, sans-serif" }}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
              style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
            >
              🤖
            </div>
            <div
              className="px-4 py-3 rounded-2xl"
              style={{ background: "#ffffff", boxShadow: "0 2px 12px rgba(0,102,204,0.1)" }}
            >
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "#0066CC",
                      animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        className="px-4 py-3 flex items-center gap-3"
        style={{ background: "#ffffff", borderTop: "1px solid rgba(0,102,204,0.08)" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="Escreva a sua pergunta..."
          className="flex-1 px-4 py-3 rounded-2xl outline-none text-sm"
          style={{
            background: "#f0f6ff",
            color: "#0a1628",
            fontFamily: "Nunito, sans-serif",
            border: "1px solid rgba(0,102,204,0.15)",
          }}
        />
        <button
          onClick={() => sendMessage(input)}
          className="w-11 h-11 rounded-2xl flex items-center justify-center active:scale-90 transition-transform"
          style={{ background: "linear-gradient(135deg, #0066CC, #0099FF)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
