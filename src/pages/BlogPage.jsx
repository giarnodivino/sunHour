import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Sun } from "lucide-react";
import rooftopPhoto from "../assets/solar-rooftop-blog.jpeg";

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
            <div className="relative min-h-72 overflow-hidden bg-slate-200 lg:min-h-full">
              <img src={rooftopPhoto} alt="Solar panels installed on a tiled residential roof" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-slate-950/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <Sun className="h-4 w-4 text-amber-300" /> A simple solar guide
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
