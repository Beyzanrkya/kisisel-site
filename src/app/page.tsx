import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import TypingText from "@/components/TypingText";
import { profil } from "@/data/profil";

const kartRenkleri = [
  "from-pink-500/30 to-purple-500/30",
  "from-purple-500/30 to-cyan-500/30",
  "from-cyan-500/30 to-pink-500/30",
];

function Baslik({ ust, baslik }: { ust: string; baslik: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">{ust}</p>
      <h2 className="font-display text-4xl font-bold sm:text-5xl">{baslik}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Arka plan renk lekeleri */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-pink-600" />
        <div className="blob right-[-10%] top-[20%] h-[32rem] w-[32rem] bg-purple-700 [animation-delay:-6s]" />
        <div className="blob bottom-[-15%] left-[30%] h-[26rem] w-[26rem] bg-cyan-600 [animation-delay:-12s]" />
      </div>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* GİRİŞ */}
        <section className="flex min-h-screen flex-col items-center justify-center text-center">
          <Reveal>
            <p className="glass mb-6 inline-block rounded-full px-4 py-1.5 text-sm text-muted">
              👋 Merhaba, ben
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight sm:text-7xl md:text-8xl">
              <span className="gradient-text">
                {profil.ad} {profil.soyad}
              </span>
            </h1>
            <p className="mt-6 h-8 font-display text-xl text-white/90 sm:text-2xl">
              <TypingText words={[profil.unvan, profil.slogan]} />
            </p>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              📍 {profil.konum} · 🎓 {profil.okul}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#projeler"
                className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 py-3 font-semibold shadow-lg shadow-purple-500/30 transition-transform hover:scale-105"
              >
                Projelerimi Gör
              </a>
              <a
                href="#iletisim"
                className="glass rounded-full px-8 py-3 font-semibold transition-colors hover:bg-white/10"
              >
                İletişime Geç
              </a>
            </div>
          </Reveal>
        </section>

        {/* HAKKIMDA */}
        <section id="hakkimda" className="scroll-mt-24 py-24">
          <Reveal>
            <Baslik ust="Tanışalım" baslik="Hakkımda" />
          </Reveal>
          <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
            <Reveal>
              <div className="glass space-y-4 rounded-3xl p-8 text-lg leading-relaxed text-white/85">
                {profil.hakkimda.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
              {profil.istatistikler.map((s, i) => (
                <Reveal key={s.etiket} delay={i * 120}>
                  <div className="glass gradient-border rounded-2xl p-5 text-center">
                    <div className="gradient-text font-display text-3xl font-bold sm:text-4xl">
                      {s.deger}
                    </div>
                    <div className="mt-1 text-sm text-muted">{s.etiket}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* YETENEKLER */}
        <section id="yetenekler" className="scroll-mt-24 py-24">
          <Reveal>
            <Baslik ust="Neler yapabilirim" baslik="Yetenekler" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {profil.yetenekler.map((y, i) => (
              <Reveal key={y.kategori} delay={i * 120}>
                <div
                  className={`glass gradient-border h-full rounded-3xl bg-gradient-to-br p-8 transition-transform duration-300 hover:-translate-y-2 ${kartRenkleri[i % 3]}`}
                >
                  <h3 className="mb-5 font-display text-2xl font-bold">{y.kategori}</h3>
                  <div className="flex flex-wrap gap-2">
                    {y.ogeler.map((o) => (
                      <span
                        key={o}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm transition-colors hover:bg-white/15"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJELER */}
        <section id="projeler" className="scroll-mt-24 py-24">
          <Reveal>
            <Baslik ust="Çalışmalarım" baslik="Projeler" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {profil.projeler.map((p, i) => (
              <Reveal key={p.baslik} delay={i * 120}>
                <article className="glass gradient-border group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2">
                  <div
                    className={`flex h-40 items-center justify-center bg-gradient-to-br ${kartRenkleri[i % 3]}`}
                  >
                    <span className="font-display text-5xl font-bold text-white/80 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3">
                      {p.baslik.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-pink-400">
                      {p.kategori}
                    </p>
                    <h3 className="font-display text-xl font-bold">{p.baslik}</h3>
                    <p className="mt-2 flex-1 text-muted">{p.aciklama}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.etiketler.map((e) => (
                        <span key={e} className="text-xs font-semibold text-cyan-300">
                          #{e}
                        </span>
                      ))}
                    </div>
                    {(p.link || p.github) && (
                      <div className="mt-5 flex gap-4 text-sm font-semibold">
                        {p.link && (
                          <a href={p.link} target="_blank" rel="noreferrer" className="text-pink-400 hover:underline">
                            Canlı Demo →
                          </a>
                        )}
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer" className="text-purple-300 hover:underline">
                            GitHub →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim" className="scroll-mt-24 py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 p-10 text-center sm:p-16">
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Birlikte çalışalım!</h2>
              <p className="mx-auto mt-4 max-w-lg text-white/85">
                Bir proje fikrin mi var ya da sadece merhaba mı demek istiyorsun? Bana yazmaktan çekinme.
              </p>
              <a
                href={`mailto:${profil.eposta}`}
                className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-purple-700 transition-transform hover:scale-105"
              >
                {profil.eposta}
              </a>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {profil.sosyal.map((s) => (
                  <a
                    key={s.ad}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold transition-colors hover:bg-white/20"
                  >
                    {s.ad}
                  </a>
                ))}
                {profil.cvLinki && (
                  <a
                    href={profil.cvLinki}
                    target="_blank"
                    className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold transition-colors hover:bg-white/20"
                  >
                    CV İndir
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-muted">
        © 2026 {profil.ad} {profil.soyad} · Sevgiyle kodlandı 💜
      </footer>
    </>
  );
}
