import Image from 'next/image';

export const metadata = {
  title: 'The History Project',
  description: 'Bringing history to life through AI-driven avatars.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Logo */}
      <Image
        src="/logo.jpg"
        alt="The History Project Logo"
        width={192}
        height={192}
        className="mb-6"
      />

      {/* Hero Banner */}
      <div className="w-full max-w-4xl mb-8">
        <Image
          src="/hero-banner.jpg"
          alt="Historical Figures Collage"
          width={1200}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Headline & Tagline */}
      <h1 className="text-5xl font-extrabold text-center mb-4">
        The History Project
      </h1>
      <p className="text-xl text-gray-700 text-center mb-8 max-w-2xl">
        Bringing history to life through AI-driven avatars. Chat with your favorite
        historical figures, explore landmarks, and dive into culture—coming soon!
      </p>

      {/* Call to Action */}
      <a
        href="mailto:AGJAKE01@gmail.com"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Notified
      </a>
    </main>
  );
}
