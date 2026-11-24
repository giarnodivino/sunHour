import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Copy, Sun } from "lucide-react";

const title = "How many solar panels do you need to zero out your bill with solar?";
const description = "Estimate how many solar panels you need from your monthly electricity use, and learn how batteries or net metering affect the system size.";

function SolarPanelsArticle() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Sunhour Energy`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);
    return () => { document.title = previousTitle; };
  }, []);

  async function copyArticleLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="bg-white">
      <header id="top" className="bg-slate-950 px-4 pb-14 pt-10 text-white sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition hover:text-white"><ArrowLeft size={16} /> All articles</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Solar basics · Sunhour Journal</p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A simple estimate using your monthly electricity consumption, with a look at batteries and net metering for nighttime power.</p>
          <button type="button" onClick={copyArticleLink} className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10" aria-label="Copy article link">
            {copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Link copied" : "Copy article link"}
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8 lg:py-16">
        <div className="min-w-0">
          <div className="mb-10 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
            <p id="estimate" className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">The quick estimate</p>
            <p className="mt-3 text-xl font-bold leading-8 text-slate-900">Monthly usage ÷ 200 × 3 = estimated panels</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">For example, 1,000 kWh ÷ 200 × 3 = about 15 panels.</p>
          </div>

          <div className="space-y-7 text-base leading-8 text-slate-700 sm:text-lg">
            <p>Start with your electricity bill. Look for your monthly consumption in kilowatt-hours (kWh).</p>
            <p>Divide it by 30.5, then divide again by 3.5.</p>
            <div className="rounded-2xl bg-slate-50 p-5 sm:p-6"><p className="font-semibold text-slate-900">Example</p><p className="mt-1">1,000 kWh ÷ (30.5 × 3.5 hours) = 9.37 kW</p></div>
            <p>Then divide that number by 0.63 kW [1]. That gives 14.87, or <strong className="text-slate-950">15 solar panels</strong>. (You can’t have 87% of a solar panel.)</p>
            <p>Here’s an even quicker way to estimate: in 2026, a typical solar panel can offset an average of about 200 kWh per month for you [2]. So if you’re a typical household using 600–1,000 kWh each month, you may need about 9–15 solar panels to offset that usage.</p>
            <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8"><p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300"><Sun size={17} /> Remember 3–2</p><p className="mt-3 text-2xl font-bold">3 panels for every 200 kWh.</p><p className="mt-2 text-sm leading-6 text-slate-300">Each panel can generate an average of 66 kWh per month, or 2.2 kWh per day [3].</p></div>
            <p>There’s a catch: solar panels generate electricity during the day, while many homes use a large share of their electricity at night. You’ll need a plan for nighttime use—such as storing daytime energy in batteries or exporting excess power through net metering.</p>
          </div>

          <section id="battery" className="mt-12 border-t border-slate-200 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Option 1</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Store solar energy for nighttime</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>For the 1,000 kWh/month example, the home uses an average of about 33 kWh per day.</p>
              <p>If 70–80% of that consumption happens at night, you’ll need 23–26 kWh of usable energy overnight. If you can use only 80% of a battery’s rated capacity, you’ll need at least 30 kWh of battery storage.</p>
            </div>
          </section>

          <section id="net-metering" className="mt-12 border-t border-slate-200 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Option 2</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Export excess energy through net metering</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>In this example, exported power is credited at P10/kWh while electricity costs P16/kWh. To make up the difference, the estimate increases solar production by 60% for the portion used at night.</p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 text-sm sm:text-base">
                <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-slate-200 bg-slate-50 p-4"><span>Daytime use: 1,000 kWh × 20%</span><strong>200 kWh · about 3 panels</strong></div>
                <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-slate-200 p-4"><span>Nighttime use: 1,000 kWh × 80%</span><strong>800 kWh · about 12 panels</strong></div>
                <div className="grid grid-cols-[1fr_auto] gap-4 bg-emerald-50 p-4"><span>Increase 12 panels by 60%</span><strong>about 20 panels</strong></div>
              </div>
              <p><strong className="text-slate-950">Total: about 20 + 3 = 23 panels.</strong></p>
            </div>
          </section>

          <section id="next-steps" className="mt-12 rounded-3xl bg-emerald-800 p-7 text-white sm:p-9">
            <h2 className="text-2xl font-bold sm:text-3xl">Could solar offset a P15,000–P16,000 bill?</h2>
            <p className="mt-4 leading-7 text-emerald-50">In this example, the estimate is 15 panels with a 30 kWh battery, or about 23 panels with net metering and no batteries.</p>
            <Link to="/#contact" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50">Talk to Sunhour about your bill</Link>
          </section>

          <aside className="mt-10 rounded-2xl border border-slate-200 p-5 text-sm leading-6 text-slate-600 sm:p-6">
            <h2 className="font-bold text-slate-900">Notes</h2>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>0.63 kW = 630 W, a typical solar panel size used in this estimate.</li>
              <li>Actual output depends on proper panel orientation and mounting, shading, equipment, and installation. Have a qualified technician or installer design and connect your system.</li>
              <li>The estimate assumes an average of 66 kWh per panel each month (2.2 kWh per day).</li>
            </ol>
            <p className="mt-4">These figures are starting estimates. Your roof, location, usage schedule, equipment, and utility rules affect the system you need.</p>
          </aside>
        </div>

        <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">In this guide</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li><a className="hover:text-emerald-800" href="#estimate">Estimate your panels</a></li>
            <li><a className="hover:text-emerald-800" href="#battery">Battery storage</a></li>
            <li><a className="hover:text-emerald-800" href="#net-metering">Net metering</a></li>
            <li><a className="hover:text-emerald-800" href="#next-steps">What to do next</a></li>
          </ul>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950"><ArrowLeft size={15} /> Back to all articles</Link>
        </aside>
      </div>
    </article>
  );
}

export default SolarPanelsArticle;
