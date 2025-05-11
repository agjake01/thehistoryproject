// src/app/page.tsx
export const metadata = {
  title: "The History Project",
  description: "AI-driven conversations with historical figures—coming soon!",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-4">
      <div className="max-w-xl text-center">
        {/* Logo placeholder */}
        <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-gray-300" />

        <h1 className="mb-4 text-4xl font-extrabold text-[var(--foreground)]">
          The History Project
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Engage with lifelike AI avatars of history’s greatest figures.
          Launching soon.
        </p>

        {/* Email capture form (placeholder) */}
        <form className="flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Notify Me
          </button>
        </form>
      </div>
    </main>
  );
}
