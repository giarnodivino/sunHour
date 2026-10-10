import MainPicture from "../assets/sunhour-homepage.jpeg";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import { farm1, farm2, farm3, solarchurch, bulacanhatchery, farm4 } from "../assets/images";
import SpecularButton from "../components/SpecularButton";
import SolarEstimator from "../components/SolarEstimator";

function HomePage() {
  const featuredProjects = [
    {
      title: "San Bartolome Parish",
      image: solarchurch,
    },
    {
      title: "Bulacan Hatchery",
      image: bulacanhatchery,
    },
    {
      title: "Farm in Pangasinan",
      image: farm4,
    },
  ];

  return (
    <div className="w-full">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={MainPicture}
            alt="Solar panels on roof"
            className="h-full w-full object-cover brightness-60 saturate-110"
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-950/40 via-slate-900/10 to-blue-700/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 py-24 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-black leading-[0.9] tracking-[-0.04em] drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]">
            <span className="text-orange-400">SUN</span>HOUR
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-8 p-8 text-slate-100/95 lg:mb-12">
            Optimizing every hour of the sun
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact">
              <SpecularButton
                size="md"
                radius={9}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor="#f5f5f5"
                lineColor="#F97316"
                baseColor="#525252"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1.3}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => console.log("clicked")}
              >
                GET A FREE QUOTE
              </SpecularButton>
            </a>
            <a href="#solar-estimator">
              <SpecularButton
                size="md"
                radius={9}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor="#f5f5f5"
                lineColor="#F97316"
                baseColor="#525252"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1.3}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => console.log("clicked")}
              >
                Get Started
              </SpecularButton>
            </a>
          </div>
        </div>
      </section>

      <SolarEstimator />

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Our Vision</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                  Solar For Every Filipino
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                We deliver end-to-end solar installations for homes, businesses, and communities. From design and
                installation to monitoring and support, our team helps you capture more energy and reduce your
                electricity costs.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="text-3xl font-extrabold text-slate-900">146+</p>
                  <p className="mt-2 text-sm text-slate-500">Successful Installations</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="text-3xl font-extrabold text-slate-900">2.34MWp+</p>
                  <p className="mt-2 text-sm text-slate-500">Solar Capacity Delivered</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="text-3xl font-extrabold text-slate-900">2.99GWh+</p>
                  <p className="mt-2 text-sm text-slate-500">Electricity Generated per Year</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Message Us Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto grid max-w-lg gap-6">
                <div className="overflow-hidden rounded-4xl border-4 border-white shadow-xl shadow-slate-200">
                  <img src={farm1} alt="Solar installation" className="h-72 w-full object-cover" />
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="overflow-hidden rounded-4xl border-4 border-white shadow-xl shadow-slate-200">
                    <img src={farm2} alt="Team at solar site" className="h-44 w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-4xl border-4 border-white shadow-xl shadow-slate-200">
                    <img src={farm3} alt="Solar rooftop" className="h-44 w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Powering the Future</h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            From solar panel optimization to energy storage solutions, delivering sustainable technology for a cleaner
            tomorrow.
          </p>
          <div className="mt-10 flex gap-4 sm:flex-row justify-center">
            <div className="h-12 w-12 rounded-full bg-linear-to-br from-blue-400 to-purple-600 shadow"></div>
            <div className="h-12 w-12 rounded-full bg-linear-to-br from-blue-400 to-purple-600 shadow"></div>
            <div className="h-12 w-12 rounded-full bg-linear-to-br from-blue-400 to-purple-600 shadow"></div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Featured Projects</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A few solar installations we’re proud to have delivered
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              Each installation is tailored to maximize performance, reliability, and long-term savings for homes and
              businesses.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image || null}
                imageAlt={project.title}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

export default HomePage;
