export default function ContactPage() {
  return (
    <section className="flex justify-center items-center min-h-[80vh] px-6 py-12 animate-fade">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-semibold mb-6 text-zinc-900 text-center">
          Contact Us
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-300 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-300 transition"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-300 transition resize-none"
          />
          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-zinc-800 transition transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
