import {
  siArduino,
  siDocker,
  siExpo,
  siExpress,
  siGooglegemini,
  siJsonwebtokens,
  siMongodb,
  siNodedotjs,
  siPython,
  siReact,
  siRedis,
  siScikitlearn,
  siStreamlit,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

// Logosu olan teknolojiler
const logolar: Record<string, SimpleIcon> = {
  Python: siPython,
  "scikit-learn": siScikitlearn,
  Streamlit: siStreamlit,
  Docker: siDocker,
  "React Native": siReact,
  Expo: siExpo,
  "Node.js": siNodedotjs,
  Express: siExpress,
  MongoDB: siMongodb,
  JWT: siJsonwebtokens,
  Redis: siRedis,
  Vercel: siVercel,
  Arduino: siArduino,
  Gemini: siGooglegemini,
};

// Logosu olmayan kavram, donanım ve özellikler
const emojiler: Record<string, string> = {
  "Diferansiyel Denklem": "∂",
  Sıcaklık: "🌡️",
  Nem: "💧",
  Ağırlık: "⚖️",
  "Zaman Serisi": "📈",
  IoT: "📡",
  "Random Forest": "🌳",
  "Saldırı Tespiti": "🛡️",
  Kamera: "📹",
  "Bilgisayarlı Görü": "👁️",
  "Yapay Zeka": "🧠",
  LiDAR: "📡",
  "Otonom Sürüş": "🚗",
  "HC-SR04": "📏",
  L298N: "⚙️",
  "LDR & LED": "💡",
  "Open-Meteo": "🌤️",
  "Yeşil Enerji": "⚡",
  Mobil: "📱",
};

export default function Sembol({ ad }: { ad: string }) {
  const logo = logolar[ad];

  return (
    <div className="flex w-16 flex-col items-center gap-1.5" title={ad}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110">
        {logo ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill={`#${logo.hex}`} aria-hidden>
            <path d={logo.path} />
          </svg>
        ) : (
          <span className="text-xl font-bold leading-none text-purple-700">{emojiler[ad] ?? "✦"}</span>
        )}
      </div>
      <span className="text-center text-[10px] font-semibold leading-tight text-white/90">{ad}</span>
    </div>
  );
}
