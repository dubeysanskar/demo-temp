'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: "Dec 1, 2024",
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address call and kickoff"
  },
  {
    date: "Jan 31, 2025",
    time: "11:59 PM",
    title: "Last date to register",
    description: "Find your teammates and brainstorm ideas"
  },
  {
    date: "Feb 5, 2025",
    time: "2:00 PM",
    title: "PPT Submission Deadline",
    description: "Submit your projects/PPTs for judging"
  },
  {
    date: "Feb 15, 2025",
    time: "2:00 PM",
    title: "Announcement of Selected Teams",
    description: "Pack your bags for the event"
  },
  {
    date: "March 11, 2025",
    time: "4:00 PM",
    title: "Project Presentations",
    description: "Present your work to the judges"
  },
  {
    date: "March 18, 2025",
    time: "6:00 PM",
    title: "Awards Ceremony",
    description: "Winners announcement and prizes"
  }
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Event Timeline</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            48 hours of innovation, creativity, and breakthrough technologies
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                    <div className="text-sm text-purple-400">{event.date}</div>
                    <div className="text-pink-400">{event.time}</div>
                    <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                    <p className="text-gray-400 mt-1">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}