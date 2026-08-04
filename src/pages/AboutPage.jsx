function AboutPage() {
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">About this project</h1>
        <p className="text-base leading-8 text-gray-600 sm:text-lg">
          The app has been organized into reusable components, page modules, and a central router so new features can be
          added more easily.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
