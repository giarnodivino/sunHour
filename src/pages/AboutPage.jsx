import { farm1, farm2, farm3 } from "../assets/images";

function AboutPage() {
  const services = [
    {
      title: "Residential Solar",
      description:
        "Rooftop solar systems designed to cut household electricity costs and build long-term energy independence.",
    },
    {
      title: "Commercial & Industrial Solar",
      description:
        "Custom solar and battery-backed solutions that reduce operating costs for businesses across the Philippines.",
    },
    {
      title: "Off-Grid & Remote Electrification",
      description:
        "Bringing sustainable power to schools, communities, and locations beyond the reach of the traditional grid.",
    },
    {
      title: "Solar + Storage Solutions",
      description:
        "Battery-backed systems that improve reliability during outages, brownouts, and high-demand periods.",
    },
  ];

  const values = [
    {
      title: "Accessibility",
      text: "Clean energy should not be a luxury. We design practical systems for a wide range of budgets and needs.",
    },
    {
      title: "Reliability",
      text: "Every installation is built to perform year after year, across intense heat, humidity, and typhoon season.",
    },
    {
      title: "Community",
      text: "We prioritize projects that bring light and stability to underserved and off-grid communities in the Philippines.",
    },
    {
      title: "Integrity",
      text: "Honest assessments, transparent pricing, and solutions sized for what you actually need — never oversold.",
    },
  ];

  const reasons = [
    "Founder-led, hands-on approach to every project",
    "Deep roots in the Philippine solar industry",
    "Solutions tailored to local heat, humidity, and typhoon resilience",
    "A track record built from real energy challenges, not theory",
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <header className="relative overflow-hidden rounded-4xl bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
          <img
            src={farm1}
            alt="Solar installation in the Philippines"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/80 to-emerald-900/70" />

          <div className="relative grid gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-14 lg:py-14">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200">
                About Sunhour Solar PH
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Powering the Philippines, One Roof at a Time
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Sunhour Energy Inc. started with a dream of providing light powered simply by the sun.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#story"
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  Our Story
                </a>
                <a
                  href="#solutions"
                  className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  What We Do
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-200">Founded in 2013</p>
              <p className="mt-4 text-3xl font-black text-white">A dream powered by the sun</p>
              <p className="mt-4 text-base leading-7 text-slate-200">
                It began with a simple belief: solar energy should be practical, reliable, and accessible to more
                Filipinos.
              </p>
            </div>
          </div>
        </header>

        <main className="space-y-20 pt-20">
          <section id="story" className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Our Story</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                From a simple belief to a brighter future
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  That dream began in 2013, when founder Gerry Divino entered the Philippine solar industry with a
                  simple belief: solar energy should be practical, reliable, and accessible to more Filipinos.
                </p>
                <p>
                  Since then, Gerry has been involved in the design, provisioning, installation, and integration of
                  solar energy systems for homes and businesses across the Philippines. His experience spans both
                  grid-connected and stand-alone systems, as well as the growing use of battery storage to provide
                  greater energy independence and resilience.
                </p>
                <p>
                  Today, Sunhour Energy brings together that experience with a practical, engineering-driven approach
                  to renewable energy. We design solar and battery systems around how our customers actually use
                  electricity—helping them lower energy costs, improve reliability, and make better use of clean energy.
                </p>
                <p>
                  Now it provides power from the sun to homes, businesses and establishments where conventional power
                  from the grid is limited, beyond reach, or too expensive.
                </p>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-4xl border border-emerald-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.07)]">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Impact</p>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-3xl font-black text-slate-900">2013</p>
                    <p className="text-sm text-slate-500">Year the journey began</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-900">10+ Years</p>
                    <p className="text-sm text-slate-500">Of hands-on solar experience</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                <img src={farm2} alt="Solar team and installation" className="h-52 w-full object-cover opacity-90" />
              </div>
            </aside>
          </section>

          <section className="rounded-4xl bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-3xl border border-slate-200">
                <img src={farm3} alt="Founder Gregory Divino" className="h-full w-full object-cover" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Meet the Founder</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Gregory Raymund C. Divino</h2>
                <p className="mt-2 text-lg font-medium text-emerald-700">Founder & CEO</p>

                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                  <p>
                    Gerry has been involved in the design, provisioning, installation, and integration of solar energy
                    systems for homes and businesses across the Philippines since 2013.
                  </p>
                  <p>
                    His experience covers grid-connected and stand-alone systems, including battery storage solutions
                    that give customers greater energy independence and resilience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-4xl bg-slate-900 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Our Mission</p>
              <h3 className="mt-4 text-3xl font-bold">
                To make dependable solar power practical for every Filipino household and business.
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-200">
                We provide sustainable, environment-friendly, and reliable electrification to households and businesses
                across the Philippines — including underserved and off-grid communities — through quality solar and
                energy storage solutions.
              </p>
            </div>

            <div className="rounded-4xl border border-emerald-100 bg-emerald-50 p-8 shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Our Vision</p>
              <h3 className="mt-4 text-3xl font-bold text-slate-900">
                A Philippines where clean, affordable solar is within reach of every home and business.
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-600">
                From major cities to the most remote islands, we believe solar power should be accessible, dependable,
                and within reach for communities that need it most.
              </p>
            </div>
          </section>

          <section id="solutions" className="space-y-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">What We Do</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Practical solar solutions for real energy needs
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl text-emerald-700">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Our Values</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                The principles behind every installation
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">{value.title}</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{value.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-4xl bg-linear-to-r from-emerald-600 to-sky-600 p-8 text-white shadow-[0_30px_80px_rgba(16,185,129,0.2)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
                  Why Choose Sunhour Solar PH
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A solar partner built for Philippine realities</h2>
              </div>

              <ul className="space-y-4 text-base leading-7 text-emerald-50 sm:text-lg">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                      ✓
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}

export default AboutPage;
