import { motion } from 'framer-motion';
import { Swords as BatWing } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-4/12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-28 px-4 max-w-4xl mx-auto grid grid-cols-1"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Meet Jai</h1>
          <img
            src="/jai.jpg"
            alt="Jai"
            loading="lazy"
            className="w-5/12 h-fit rounded-lg shadow-lg justify-self-center"
          />
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Founder of Amplified Intelligence Academy
          </p>
          <div className="flex justify-center">
            <BatWing className="w-16 h-16 text-yellow-400" />
          </div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Journey</h2>
            <div className="grid gap-8">
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  Teaching & Technology
                </h3>
                <p className="text-gray-300">
                  From teaching design at Parsons to advising tech companies,
                  I've discovered how AI isn't just changing what we do—it's
                  transforming how we think.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  Eastern Wisdom
                </h3>
                <p className="text-gray-300">
                  Following my grandfather's footsteps, I've integrated ancient
                  Vedic knowledge with modern technology, creating a unique
                  approach to education.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  The Mission
                </h3>
                <p className="text-gray-300">
                  Today, I'm making AI education radically accessible, helping
                  others navigate this technological revolution while staying
                  grounded in timeless wisdom.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Impact & Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold text-yellow-400 mb-4">
                  300+
                </h3>
                <p className="text-gray-300">Students Transformed</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-yellow-400 mb-4">10x</h3>
                <p className="text-gray-300">Productivity Gains</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-yellow-400 mb-4">4</h3>
                <p className="text-gray-300">Industries Disrupted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join our community and master the must-have AI skills for 2025
            </p>
            <a
              href="https://www.skool.com/chaiwithjai/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="relative px-8 py-4 bg-gray-900 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] overflow-hidden">
                <div className="relative z-10 flex items-center space-x-2">
                  <BatWing className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 font-bold tracking-wider">
                    JOIN THE ACADEMY
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 animate-[shimmer_2s_infinite]" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
