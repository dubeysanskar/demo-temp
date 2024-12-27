'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, GraduationCap, Accessibility, Shield, Gamepad } from 'lucide-react';

const themes = [
  {
    title: 'AI for Climate Change',
    icon: Brain,
    description: 'Develop AI solutions to address environmental challenges and promote sustainability'
  },
  {
    title: 'AI in Healthcare',
    icon: Heart,
    description: 'Create innovative healthcare solutions using artificial intelligence'
  },
  {
    title: 'AI in Education',
    icon: GraduationCap,
    description: 'Transform learning experiences with AI-powered educational tools'
  },
  {
    title: 'AI for Accessibility',
    icon: Accessibility,
    description: 'Make technology more accessible for everyone using AI'
  },
  {
    title: 'Ethical AI',
    icon: Shield,
    description: 'Develop responsible AI solutions with ethics at their core'
  },
  {
    title: 'AI in Gaming',
    icon: Gamepad,
    description: 'Create next-generation gaming experiences powered by AI'
  }
];

export function ThemesSection() {
  return (
    <section id="themes" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hackathon Themes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from these exciting AI themes to make a real impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
              <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <theme.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                <p className="text-gray-400">{theme.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}