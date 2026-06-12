interface Props {
  active: string;
  onNavigate: (screen: string) => void;
}

const tabs = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "islands",
    label: "Ilhas",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: "ai",
    label: "IA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12s1.5-2 4-2 4 2 4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="9" r="1" fill="currentColor"/>
        <circle cx="15" cy="9" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "tourism",
    label: "Turismo",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-8 4 4 4-6 4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "services",
    label: "Serviços",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export function BottomNav({ active, onNavigate }: Props) {
  return (
    <div
      className="flex items-center justify-around px-2 pt-2 pb-3"
      style={{
        background: "#ffffff",
        borderTop: "1px solid rgba(0,87,184,0.12)",
        boxShadow: "0 -10px 30px rgba(0,87,184,0.12)",
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className="flex flex-col items-center gap-0.5 py-2 px-3 rounded-2xl transition-all"
            style={{
              color: isActive ? "#0057B8" : "#8aaccc",
              background: isActive ? "rgba(0,87,184,0.08)" : "transparent",
            }}
          >
            {tab.icon}
            <span
              style={{
                fontSize: "10px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: isActive ? 700 : 500,
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
