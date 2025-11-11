import {
  heroNarrative,
  sensoryCues,
  storySegments,
  timelineMoments,
} from "@/data/story";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-20 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <header className="space-y-6 border-l border-amber-500/30 pl-6">
          <p className="inline-flex items-center rounded-full border border-amber-500/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-200/80">
            भानगढ़ की सांझ
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-amber-50 sm:text-5xl">
            {heroNarrative.title}
          </h1>
          <p className="max-w-3xl text-lg text-zinc-200 sm:text-xl">
            {heroNarrative.logline}
          </p>
          <p className="max-w-3xl text-base text-zinc-400">
            {heroNarrative.highlight}
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6 rounded-3xl border border-amber-500/20 bg-zinc-900/60 p-8 shadow-[0_0_40px_-24px_rgba(251,191,36,0.45)] backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/90">
              समय की धड़कन
            </h2>
            <div className="space-y-4">
              {timelineMoments.map((moment) => (
                <article
                  key={moment.label}
                  className="rounded-2xl border border-zinc-700/60 bg-zinc-950/40 p-4 transition hover:border-amber-400/60 hover:bg-zinc-900/80"
                >
                  <div className="flex items-center justify-between text-sm text-amber-200">
                    <span className="font-semibold">{moment.label}</span>
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                  </div>
                  <p className="mt-3 text-sm text-zinc-300">{moment.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {storySegments.map((segment) => (
              <article
                key={segment.heading}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-950/90 p-8 shadow-[0_0_40px_-30px_rgba(168,85,247,0.45)] transition hover:border-amber-400/60"
              >
                <div className="pointer-events-none absolute -top-20 right-0 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl transition duration-500 group-hover:scale-125" />
                <h3 className="text-xl font-semibold text-amber-100">
                  {segment.heading}
                </h3>
                <div className="mt-4 space-y-4 text-base leading-7 text-zinc-200">
                  {segment.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-800/80 bg-zinc-900/50 p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">
                अनुभूति के संकेत
              </h2>
              <p className="text-lg text-zinc-200">
                भानगढ़ की सांझ केवल देखी नहीं जाती, उसे सुना और महसूस भी किया
                जाता है। निम्न संकेतों से अपनी कल्पना को परखें और कहानी के
                वातावरण को आत्मसात करें।
              </p>
            </div>
            <div className="grid flex-1 gap-6 sm:grid-cols-3">
              {sensoryCues.map((cue) => (
                <div
                  key={cue.title}
                  className="rounded-2xl border border-zinc-800/60 bg-zinc-950/60 p-6"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                    {cue.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {cue.lines.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-10 backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200">
              अगला अध्याय
            </h2>
            <p className="text-xl text-amber-100">
              यह कथा अभी आरंभ ही हुई है। रत्नावली की नज़र में जगा प्रश्न और
              सिंधु के स्क्रॉल में छुपे उत्तर जल्द ही भानगढ़ के इतिहास को एक नई
              दिशा देंगे।
            </p>
            <p className="text-base text-amber-50/70">
              कल्पना करें कि महल के बंद गलियारों में कदमों की हल्की आहट है, और
              पत्थर भी सुनने लगे हैं। अगले पन्ने में क्या उभरता है—यह निर्णय अब
              पाठक की कल्पना पर है।
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
