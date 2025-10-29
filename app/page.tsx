'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-400/10 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main greeting */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-glow">
              Hello, World.
            </span>
          </h1>

          {/* Intro text */}
          <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-gray-300">
            <p className="leading-relaxed">
              Welcome. I'm <span className="text-yellow-400 font-semibold">Teruki Hanazawa</span> - 
              yes, <em className="text-yellow-300">that</em> Hanazawa.
            </p>
            
            <p className="leading-relaxed">
              Some call themselves the protagonist of their own story. 
              I used to think the same way. But I've learned there's more to life 
              than being the main character.
            </p>

            <p className="leading-relaxed text-yellow-200">
              Still, that doesn't mean we can't make an entrance. ✨
            </p>
          </div>

          {/* Quote section */}
          <div className="mt-16 p-8 border border-yellow-500/30 rounded-lg bg-black/30 backdrop-blur-sm max-w-xl mx-auto">
            <blockquote className="text-gray-400 italic mb-2">
              "Don't underestimate people. Everyone has their own potential."
            </blockquote>
            <p className="text-yellow-400 text-sm">- A lesson learned the hard way</p>
          </div>

          {/* Footer */}
          <div className="mt-16 text-gray-500 text-sm">
            <p>Built with confidence. Deployed with style.</p>
            <p className="mt-2">Powered by psychic energy ⚡ (and Next.js)</p>
          </div>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </main>
  );
}