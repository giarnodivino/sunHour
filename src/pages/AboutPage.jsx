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

          <section className="rounded-4xl border border-amber-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <div className="mx-auto max-w-5xl space-y-8 text-slate-600">
              <header>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Solar technology</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                  ☀️ How many solar panels do you need to power a 2.5 HP air conditioner?
                </h2>
                <p className="mt-4 text-base leading-8 sm:text-lg">
                  Here’s something interesting about how solar technology has changed. A typical <strong>2.5 HP air conditioner</strong> can consume roughly <strong>2.0–2.5 kW</strong> of electrical power while running, depending on the model, efficiency, inverter technology, and operating conditions. Let’s use <strong>2.0 kW</strong> as a simple example.
                </p>
              </header>

              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="text-xl font-bold text-slate-900">☀️ In 2013</h3>
                  <p className="mt-3 leading-7">When I started working with solar in <strong>2013</strong>, a typical solar panel was around <strong>250 watts</strong>.</p>
                  <p className="mt-4 font-semibold text-slate-900">8 panels × 250 W = 2,000 W (2.0 kW)</p>
                  <p className="mt-2 leading-7">So you needed approximately <strong>8 solar panels</strong>. Those panels would occupy roughly <strong>13–15 square meters</strong> of roof area, depending on panel dimensions and installation spacing.</p>
                </article>
                <article className="rounded-3xl bg-amber-50 p-6">
                  <h3 className="text-xl font-bold text-slate-900">☀️ Fast forward to 2026</h3>
                  <p className="mt-3 leading-7">Today, a good residential panel can produce around <strong>500–600 watts</strong>. Using 4 × 550 W panels:</p>
                  <p className="mt-4 font-semibold text-slate-900">4 × 550 W = 2,200 W (2.2 kW)</p>
                  <p className="mt-2 leading-7">So today, you can use <strong>just 4 solar panels</strong> and still have a little additional capacity compared with the 2.0 kW example. Those panels occupy around <strong>8–9 square meters</strong> of roof area.</p>
                </article>
              </div>

              <p className="text-base leading-8 sm:text-lg">That’s roughly <strong>half the number of panels and significantly less roof space</strong> than what was needed in 2013.</p>

              <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-slate-900">But here’s the important part...</h3>
                <p className="mt-4 leading-8">Having a <strong>2.2 kW solar array doesn’t mean the air conditioner can run continuously for the entire day.</strong> The sun doesn’t produce the same amount of energy throughout the day. Solar production rises in the morning, peaks around midday, and falls in the afternoon. Clouds, rain, heat, shading, and other conditions also reduce production.</p>
                <p className="mt-4 leading-8">For the Philippines, a reasonable planning assumption is around <strong>3.5 peak sun hours per day on average</strong>. So a 2.2 kW solar array could theoretically produce:</p>
                <p className="mt-3 font-semibold text-slate-900">2.2 kW × 3.5 hours = 7.7 kWh/day</p>
                <p className="mt-4 leading-8">If the air conditioner consumes approximately 2.0 kW while running, that is equivalent to roughly:</p>
                <p className="mt-3 font-semibold text-slate-900">7.7 kWh ÷ 2.0 kW ≈ 3.8 hours</p>
                <p className="mt-4 leading-8">In real-world operation, after accounting for system losses and changing solar intensity, <strong>around 3.5 hours of average daily operation</strong> is a more practical way to think about it.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-emerald-50 p-6"><h3 className="font-bold text-emerald-900">☀️ Some days could be better.</h3><p className="mt-2 leading-7">During strong summer sunshine, you might get enough solar production to support the aircon for <strong>around 5 hours</strong>.</p></div>
                <div className="rounded-3xl bg-slate-100 p-6"><h3 className="font-bold text-slate-900">🌧️ Some days could be much worse.</h3><p className="mt-2 leading-7">On heavily cloudy or rainy days, you might only get the equivalent of <strong>around 2 hours</strong>.</p></div>
              </div>
              <p className="leading-8">But averaged over the year, <strong>3.5 hours/day is a reasonable planning figure for the Philippines.</strong></p>

              <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
                <h3 className="text-2xl font-bold">The bigger story</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <p className="rounded-2xl bg-white/10 p-4"><span className="text-emerald-300">In 2013:</span><br /><strong>8 × 250 W = 2.0 kW</strong></p>
                  <p className="rounded-2xl bg-white/10 p-4"><span className="text-amber-300">In 2026:</span><br /><strong>4 × 550 W = 2.2 kW</strong></p>
                </div>
                <p className="mt-5 text-lg leading-8">Same basic job. <strong>Half the number of panels. Less roof area. More power per panel.</strong> And solar panel technology continues to improve. This is one of the reasons solar has become increasingly practical for homes and businesses.</p>
                <p className="mt-5 text-xl font-semibold leading-8">The sun hasn’t changed.<br />Our ability to capture its energy has. ☀️</p>
              </div>

              <p className="text-sm leading-7 text-slate-500">#SolarEnergy #SolarPhilippines #SolarPanels #RenewableEnergy #CleanEnergy #SolarTechnology #Philippines</p>
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
