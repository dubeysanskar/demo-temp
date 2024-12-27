'use client';

import { motion } from 'framer-motion';
import { Users, Clock, FileCheck, CreditCard } from 'lucide-react';

export function GuidelinesSection() {
  return (
    <section id="guidelines" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Guidelines for Participants</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Important information to ensure a smooth hackathon experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-purple-400" />
              General Rules
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Team Composition: 1-4 members per team</li>
              <li>• Individual participation allowed</li>
              <li>• Open to students, professionals, and enthusiasts</li>
              <li>• PPT should be submit according to the given format</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FileCheck className="w-6 h-6 mr-2 text-purple-400" />
              Registration Process
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Complete the registration form</li>
              <li>• Registration fee: ₹500 per team</li>
              <li>• Selected teams will receive email confirmation</li>
              <li>• Check email regularly for updates</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-purple-400" />
              Event Schedule
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• One-week duration</li>
              <li>• Orientation session at start</li>
              <li>• Daily team activities and coding sessions</li>
              <li>• Final presentation and awards ceremony</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-purple-400" />
              What's Covered
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Accommodation in Rishikesh</li>
              <li>• All meals during the event</li>
              <li>• Travel expenses for selected teams</li>
              <li>• Adventure activities and local tours</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}