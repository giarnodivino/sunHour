import { useMemo, useState } from "react";
import { ArrowRight, BatteryCharging, Info, Sun, Zap } from "lucide-react";

const PANEL_KW = 0.65;
const SUN_HOURS = 3.5;
const HYBRID_MIN_CAPACITY = 3.5;
const HYBRID_MIN_BILL = 8000;

const pricePerKw = {
  grid: [
    [1, 100000],
    [3, 60000],
    [5, 50000],
    [10, 50000],
    [15, 50000],
    [20, 50000],
  ],
  hybrid: [
    [3, 120000],
    [5, 103000],
    [10, 97000],
    [15, 91000],
    [20, 85000],
  ],
};

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat("en-PH", { maximumFractionDigits: 1 });

function getTierPrice(capacity, system) {
  return pricePerKw[system].reduce(
    (selected, tier) => (capacity >= tier[0] ? tier[1] : selected),
    pricePerKw[system][0][1],
  );
}

function SolarEstimator() {
  const [bill, setBill] = useState("0");
  const [rate, setRate] = useState("15.50");
  const [system, setSystem] = useState("grid");

  const estimate = useMemo(() => {
    const monthlyBill = Math.max(Number(bill) || 0, 0);
    const electricityRate = Math.max(Number(rate) || 15.5, 0.01);
    const monthlyUse = monthlyBill / electricityRate;
    const dailyUse = monthlyUse / 30.5;
    const targetDailyUse = system === "grid" ? dailyUse * 0.3 : dailyUse * 0.5;
    const calculatedCapacity = Math.ceil((targetDailyUse / SUN_HOURS) * 10) / 10;
    const proposedCapacity =
      system === "hybrid" && monthlyBill >= HYBRID_MIN_BILL
        ? Math.max(calculatedCapacity, HYBRID_MIN_CAPACITY)
        : calculatedCapacity;
    const panels = Math.ceil(proposedCapacity / PANEL_KW);
    const actualCapacity = panels * PANEL_KW;
    const annualProduction = actualCapacity * SUN_HOURS * 365;
    const annualSavings = annualProduction * electricityRate;
    const applicable = !(system === "hybrid" && actualCapacity < 3.5);
    const cost = applicable ? actualCapacity * getTierPrice(actualCapacity, system) : null;

    return {
      monthlyUse,
      panels,
      actualCapacity,
      annualProduction,
      monthlySavings: annualSavings / 12,
      annualSavings,
      cost,
      applicable,
      payback: cost && annualSavings ? cost / annualSavings : null,
    };
  }, [bill, rate, system]);

  return (
    <section
      id="solar-estimator"
      className="overflow-hidden bg-[#071b17] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Solar calculator</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            See what solar could look like for you.
          </h2>
          <p className="mt-5 text-base leading-8 text-emerald-50/70 sm:text-lg">
            Enter a recent electricity bill for a quick system recommendation, projected savings, and estimate cost.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-4xl border border-white/10 bg-white shadow-2xl shadow-black/20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-6 text-slate-900 sm:p-8 lg:p-10">
            <div className="grid gap-6">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Average monthly electricity bill
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-100">
                  <span className="text-slate-400">₱</span>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    value={bill}
                    onChange={(event) => setBill(event.target.value)}
                    className="w-full bg-transparent px-3 py-3.5 text-lg font-semibold outline-none"
                    aria-label="Average monthly electricity bill"
                  />
                </div>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Electricity rate
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-100">
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={rate}
                    onChange={(event) => setRate(event.target.value)}
                    className="w-full bg-transparent py-3.5 text-lg font-semibold outline-none"
                    aria-label="Electricity rate per kilowatt-hour"
                  />
                  <span className="whitespace-nowrap text-sm text-slate-400">₱ / kWh</span>
                </div>
              </label>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-slate-700">Preferred system</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { value: "grid", label: "Grid-tied", detail: "Lower upfront cost", Icon: Zap },
                    {
                      value: "hybrid",
                      label: "Hybrid + battery",
                      detail: "Backup power included",
                      Icon: BatteryCharging,
                    },
                  ].map(({ value, label, detail, Icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setSystem(value)}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${system === value ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-100" : "border-slate-200 hover:border-slate-300"}`}
                    >
                      <Icon className={`mt-0.5 h-5 w-5 ${system === value ? "text-emerald-700" : "text-slate-400"}`} />
                      <span>
                        <span className="block text-sm font-bold text-slate-800">{label}</span>
                        <span className="text-xs text-slate-500">{detail}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <div className="relative flex flex-col bg-emerald-950 p-6 sm:p-8 lg:p-10">
            <Sun className="absolute -right-12 -top-12 h-52 w-52 text-orange-400/10" strokeWidth={1} />
            <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Your rough estimate
            </p>
            {estimate.applicable ? (
              <>
                <div className="relative mt-5 border-b border-white/10 pb-7">
                  <p className="text-sm text-emerald-50/60">Estimated system cost</p>
                  <p className="mt-1 text-4xl font-black tracking-tight text-white sm:text-5xl">
                    {peso.format(estimate.cost)}
                  </p>
                </div>
                <div className="relative grid grid-cols-2 gap-x-5 gap-y-7 py-7">
                  <Result label="Recommended size" value={`${number.format(estimate.actualCapacity)} kWp`} />
                  <Result label="Solar panels" value={`${estimate.panels} × 650 W`} />
                  <Result label="Est. monthly savings" value={peso.format(estimate.monthlySavings)} />
                  <Result label="Simple payback" value={`${number.format(estimate.payback)} years`} />
                  <Result label="Monthly usage" value={`${number.format(estimate.monthlyUse)} kWh`} />
                  <Result label="Annual production" value={`${number.format(estimate.annualProduction)} kWh`} />
                </div>
              </>
            ) : (
              <div className="relative my-auto rounded-2xl border border-orange-300/20 bg-orange-300/10 p-6">
                <BatteryCharging className="h-8 w-8 text-orange-300" />
                <h3 className="mt-4 text-xl font-bold">A hybrid system may not be the best fit yet.</h3>
                <p className="mt-2 leading-7 text-emerald-50/70">
                  The calculated system is below the reference calculator’s 3.5 kWp minimum for hybrid setups. Try a
                  grid-tied system or speak with our team for a custom design.
                </p>
              </div>
            )}

            <a
              href="#contact"
              className="relative mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Get an accurate quote <ArrowRight className="h-4 w-4" />
            </a>
            {Number(bill) > 0 && Number(bill) < 5000 && (
              <p className="relative mt-4 flex gap-2 text-xs leading-5 text-orange-200">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                With a bill below ₱5,000, solar may not provide a compelling return yet.
              </p>
            )}
          </div>
        </div>
        <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-5 text-emerald-50/45">
          This is an indicative estimate only.
        </p>
      </div>
    </section>
  );
}

function Result({ label, value }) {
  return (
    <div>
      <p className="text-xs text-emerald-100/55">{label}</p>
      <p className="mt-1 text-lg font-bold text-white sm:text-xl">{value}</p>
    </div>
  );
}

export default SolarEstimator;
