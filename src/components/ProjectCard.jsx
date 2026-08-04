function ProjectCard({ title, image, imageAlt }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {image ? (
        <img src={image} alt={imageAlt || title} className="h-56 w-full object-cover sm:h-64" />
      ) : (
        <div className="h-56 w-full bg-linear-to-br from-blue-500 to-slate-700 sm:h-64" />
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>
      </div>
    </article>
  );
}

export default ProjectCard;
