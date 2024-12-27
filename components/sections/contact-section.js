'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, BrandTelegram, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us through any of these platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-xs"
              onClick={() => window.open('mailto:hackonmount@gmail.com')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-xs"
              onClick={() => window.open('https://discord.gg/7AADJrhCFR')}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-xs"
              onClick={() => window.open('https://t.me/HOMount')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Telegram 1:1
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-xs"
              onClick={() => window.open('https://t.me/+tWm6DWfEmxcwMzNl')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Telegram Group
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}