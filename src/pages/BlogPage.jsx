import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Sun } from "lucide-react";

function BlogPage() {
  return (
    <section className="min-h-[80vh] bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            <BookOpen size={16} /> Sunhour Journal
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Solar, made clearer.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Practical guides to solar panels, batteries, and getting more from every hour of sunshine.</p>
        </div>

        <article className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex min-h-72 items-center justify-center bg-linear-to-br from-emerald-950 via-emerald-800 to-lime-600 p-10 text-white">
              <div className="text-center">
                <Sun className="mx-auto h-16 w-16 text-amber-300" strokeWidth={1.4} />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">A simple solar guide</p>
                <p className="mt-2 text-5xl font-black tracking-tight">3 : 2</p>
                <p className="mt-1 text-sm text-emerald-100">panels for every 200 kWh</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Solar basics · 7 min read</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">How many solar panels do you need to zero out your bill?</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">A quick way to estimate your panel count from your monthly kWh, plus what changes when you want to use solar power at night.</p>
              <Link to="/blog/how-many-solar-panels" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800">
                Read the guide <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogPage;
