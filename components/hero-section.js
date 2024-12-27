'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/countdown-timer';
import { ParticleBackground } from '@/components/particle-background';

export function HeroSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-20">
      <ParticleBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Hack on Mount AI Logo" 
              className="h-20 w-20 rounded-full" 
            />
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pb-2">
              Hack on Mount
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            A week-long adventurers AI HACKATHON in Rishikesh, Uttarakhand. More than just coding - 
            experience team building, sightseeing, and innovation at its best.
          </p>

          <div className="mt-12">
            <CountdownTimer targetDate={new Date('2025-03-10T00:00:00').toISOString()} />
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li>✓ Free accommodation at a premium hotel</li>
              <li>✓ All meals included</li>
              <li>✓ Travel expenses covered</li>
              <li>✓ Adventure activities and local tours</li>
              <li>✓ Team building exercises</li>
            </ul>
          </div>

          <div className="mt-12 space-y-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://forms.gle/EvT5mXzWNZ3Gpn6C8', '_blank')}
            >
              Register Now
            </Button>

            <div>
              <a
                href="https://docs.google.com/presentation/d/1btSNRmDCZ5IA7u5IJdhvqLnMLeYIx0w1/edit?usp=drive_link&ouid=108637076960284686248&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-purple-400 hover:text-pink-500 underline"
              >
                📥 Download Submission Template
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
