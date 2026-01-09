export default function AboutPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 animate-fade">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-3xl animate-fade">
        <h2 className="text-4xl font-semibold mb-4 text-zinc-900">
          About The Cozy Corner
        </h2>
        <p className="text-zinc-700 leading-relaxed text-lg">
          The Cozy Corner is an online bookstore built for readers who enjoy calm,
          comfort, and meaningful stories. Our goal is to recommend books that
          inspire and relax—perfect companions for quiet nights, warm coffee,
          and thoughtful moments.
        </p>
      </div>
    </section>
  );
}
