'use client';

import { motion } from 'framer-motion';

const sponsors = [
  { 
    name: 'TensorWorks AI',
    tier: 'platinum',
    description: 'AI Infrastructure Solutions'
  },
  { 
    name: 'CloudByte',
    tier: 'gold',
    description: 'Edge Computing Platform'
  },
  { 
    name: 'NeuralStack',
    tier: 'gold',
    description: 'ML Development Tools'
  },
  { 
    name: 'DataCraft Labs',
    tier: 'silver',
    description: 'Data Analytics Solutions'
  },
  { 
    name: 'CodeSage',
    tier: 'silver',
    description: 'Developer Tools'
  },
  { 
    name: 'QuantumLeap Systems',
    tier: 'silver',
    description: 'Quantum Computing Research'
  }
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Supported by emerging leaders in AI and technology
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {/* Platinum Sponsors */}
          <div className="grid grid-cols-1 gap-8">
            {sponsors
              .filter(sponsor => sponsor.tier === 'platinum')
              .map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-10 rounded-lg bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-3">
                      {sponsor.name}
                    </div>
                    <div className="text-lg text-gray-400 mb-2 capitalize">{sponsor.tier} Sponsor</div>
                    <div className="text-gray-500">{sponsor.description}</div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Gold Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors
              .filter(sponsor => sponsor.tier === 'gold')
              .map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                      {sponsor.name}
                    </div>
                    <div className="text-sm text-gray-400 mb-2 capitalize">{sponsor.tier} Sponsor</div>
                    <div className="text-sm text-gray-500">{sponsor.description}</div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Silver Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors
              .filter(sponsor => sponsor.tier === 'silver')
              .map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                      {sponsor.name}
                    </div>
                    <div className="text-sm text-gray-400 mb-1 capitalize">{sponsor.tier} Sponsor</div>
                    <div className="text-sm text-gray-500">{sponsor.description}</div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}