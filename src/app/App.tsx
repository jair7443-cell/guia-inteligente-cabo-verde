import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { HomeScreen } from "./components/HomeScreen";
import { IslandsScreen } from "./components/IslandsScreen";
import { IslandDetailScreen } from "./components/IslandDetailScreen";
import { GastronomyScreen } from "./components/GastronomyScreen";
import { TourismScreen } from "./components/TourismScreen";
import { AIAssistantScreen } from "./components/AIAssistantScreen";
import { ServicesScreen } from "./components/ServicesScreen";
import { WorldCupScreen } from "./components/WorldCupScreen";
import { BottomNav } from "./components/BottomNav";

type Screen =
  | "splash"
  | "home"
  | "islands"
  | "island-detail"
  | "gastronomy"
  | "tourism"
  | "ai"
  | "services"
  | "worldcup";

const screensWithNav: Screen[] = ["home", "islands", "gastronomy", "tourism", "ai", "services"];
const navMapping: Record<string, Screen> = {
  home: "home",
  islands: "islands",
  ai: "ai",
  tourism: "tourism",
  services: "services",
};
const navActive: Record<Screen, string> = {
  splash: "",
  home: "home",
  islands: "islands",
  "island-detail": "islands",
  gastronomy: "home",
  tourism: "tourism",
  ai: "ai",
  services: "services",
  worldcup: "home",
};

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [selectedIsland, setSelectedIsland] = useState("Santiago");

  function navigate(target: string, data?: unknown) {
    if (target === "islands") setScreen("islands");
    else if (target === "gastronomy") setScreen("gastronomy");
    else if (target === "tourism") setScreen("tourism");
    else if (target === "ai") setScreen("ai");
    else if (target === "services") setScreen("services");
    else if (target === "worldcup") setScreen("worldcup");
    else if (target === "home") setScreen("home");
    else setScreen("home");
  }

  function selectIsland(island: string) {
    setSelectedIsland(island);
    setScreen("island-detail");
  }

  const showNav = (screensWithNav as string[]).includes(screen);

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2240 100%)" }}
    >
      {/* Phone Frame */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "44px",
          background: "#f0f6ff",
          boxShadow:
            "0 0 0 12px #1a2a40, 0 0 0 14px #0d1825, 0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)",
          maxHeight: "95vh",
        }}
      >
        {/* Status bar */}
        <div
          className="flex items-center justify-between px-7 pt-3 pb-1 flex-shrink-0"
          style={{
            background:
              screen === "splash"
                ? "transparent"
                : screen === "ai"
                ? "#003d7a"
                : screen === "services"
                ? "#E85D04"
                : screen === "gastronomy"
                ? "#FF6B35"
                : screen === "tourism"
                ? "#00A86B"
                : screen === "worldcup"
                ? "#1a0030"
                : "#0066CC",
            position: screen === "splash" ? "absolute" : "relative",
            zIndex: 10,
            width: "100%",
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "Nunito, sans-serif" }}>
            9:41
          </span>
          <div
            className="w-24 h-5 rounded-full"
            style={{ background: "rgba(0,0,0,0.3)" }}
          />
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="8" width="3" height="4" rx="0.5" fill="rgba(255,255,255,0.9)"/>
              <rect x="4" y="5" width="3" height="7" rx="0.5" fill="rgba(255,255,255,0.9)"/>
              <rect x="8" y="2" width="3" height="10" rx="0.5" fill="rgba(255,255,255,0.9)"/>
              <rect x="12" y="0" width="3" height="12" rx="0.5" fill="rgba(255,255,255,0.9)"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 25 18" fill="none">
              <path d="M12.5 3C16.5 3 20 4.8 22.4 7.5L25 5C21.9 1.9 17.4 0 12.5 0C7.6 0 3.1 1.9 0 5L2.6 7.5C5 4.8 8.5 3 12.5 3Z" fill="rgba(255,255,255,0.9)"/>
              <path d="M12.5 9C14.8 9 16.9 9.9 18.5 11.4L21 8.9C18.8 6.8 15.8 5.5 12.5 5.5C9.2 5.5 6.2 6.8 4 8.9L6.5 11.4C8.1 9.9 10.2 9 12.5 9Z" fill="rgba(255,255,255,0.9)"/>
              <circle cx="12.5" cy="15" r="3" fill="rgba(255,255,255,0.9)"/>
            </svg>
            <div
              className="flex items-center gap-0.5 pl-1 pr-0.5 py-0.5 rounded"
              style={{ border: "1.5px solid rgba(255,255,255,0.5)" }}
            >
              <div className="w-5 h-2.5 rounded-sm" style={{ background: "rgba(255,255,255,0.9)" }} />
              <div className="w-0.5 h-1.5 rounded-r" style={{ background: "rgba(255,255,255,0.5)" }} />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-hidden flex flex-col" style={{ minHeight: 0 }}>
          {screen === "splash" && (
            <SplashScreen onEnter={() => setScreen("home")} />
          )}
          {screen === "home" && (
            <HomeScreen onNavigate={navigate} />
          )}
          {screen === "islands" && (
            <IslandsScreen onSelectIsland={selectIsland} />
          )}
          {screen === "island-detail" && (
            <IslandDetailScreen island={selectedIsland} onBack={() => setScreen("islands")} />
          )}
          {screen === "gastronomy" && <GastronomyScreen />}
          {screen === "tourism" && <TourismScreen />}
          {screen === "ai" && <AIAssistantScreen />}
          {screen === "services" && <ServicesScreen />}
          {screen === "worldcup" && <WorldCupScreen onBack={() => setScreen("home")} />}
        </div>

        {/* Bottom Nav */}
        {showNav && (
          <BottomNav
            active={navActive[screen]}
            onNavigate={(id) => {
              const target = navMapping[id];
              if (target) setScreen(target);
            }}
          />
        )}

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1 flex-shrink-0" style={{ background: screen === "splash" ? "transparent" : "#ffffff" }}>
          <div
            className="w-28 h-1 rounded-full"
            style={{ background: screen === "splash" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.15)" }}
          />
        </div>
      </div>
    </div>
  );
}
