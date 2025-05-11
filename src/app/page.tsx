"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  const avatars = [
    {
      name: "George Washington",
      src: "https://images.unsplash.com/photo-1573845355987-1309eea1f43b?auto=format&fit=crop&w=256&h=256",
    },
    {
      name: "Benjamin Franklin",
      src: "https://images.unsplash.com/photo-1542343631-7b3bf0d6cd3b?auto=format&fit=crop&w=256&h=256",
    },
    {
      name: "John F. Kennedy",
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=256&h=256",
    },
    {
      name: "Teddy Roosevelt",
      src: "https://images.unsplash.com/photo-1520244437436-58863c279809?auto=format&fit=crop&w=256&h=256",
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/1/18/Map_of_the_United_States_%281787%29.jpg')",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex grow flex-col items-center justify-center px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-5xl font-heading"
        >
          The History Project
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8 max-w-xl text-lg"
        >
          Step into the past—have lifelike conversations with AI avatars of
          history’s greatest minds.
        </motion.p>

        <form className="flex w-full max-w-md gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded border border-ink/30 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="rounded bg-accent px-6 py-2 font-heading text-ink hover:bg-opacity-90"
          >
            Notify Me
          </button>
        </form>
      </div>

      {/* Avatar carousel */}
      <section className="relative z-10 mt-auto py-16">
        <h2 className="mb-8 text-center text-2xl font-heading">Featured Avatars</h2>
        <div className="mx-auto flex max-w-4xl gap-6 overflow-x-auto px-6">
          {avatars.map(({ name, src }) => (
            <div key={name} className="flex-shrink-0 w-48">
              <img
                src={src}
                alt={name}
                className="h-48 w-48 rounded-lg object-cover shadow-md"
              />
              <p className="mt-2 text-center font-body">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
