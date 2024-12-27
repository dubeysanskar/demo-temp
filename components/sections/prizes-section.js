'use client';

import { motion } from 'framer-motion';
import { Trophy, Gift, Award } from 'lucide-react';

const prizes = [
  {
    title: "First Prize",
    amount: "RS 1,00,000",
    icon: Trophy,
    description: "Cash prize + Mentorship opportunities",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Second Prize",
    amount: "RS 50,000",
    icon: Gift,
    description: "Cash prize + Cloud credits",
    color: "from-slate-400 to-slate-600"
  },
  {
    title: "Third Prize",
    amount: "RS 30,000",
    icon: Award,
    description: "Cash prize + Developer tools",
    color: "from-amber-700 to-amber-900"
  }
];

function PrizeCard({ prize, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
      <div className="relative p-6 bg-black rounded-lg">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${prize.color} flex items-center justify-center mb-4`}>
          <prize.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
        <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
          {prize.amount}
        </p>
        <p className="text-gray-400">{prize.description}</p>
      </div>
    </motion.div>
  );
}

export function PrizesSection() {
  return (
    <section id="prizes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prizes & Rewards</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Win big with our amazing prize pool and take your project to the next level
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <PrizeCard key={prize.title} prize={prize} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}