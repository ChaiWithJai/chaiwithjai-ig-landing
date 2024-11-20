import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'UX Designer',
    company: 'TechCorp',
    content:
      'The AI course completely transformed my approach to design. I now see patterns I never noticed before!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    company: 'InnovateSoft',
    content:
      `Jai's method of teaching AI is revolutionary. It's not just about the tools, but about reshaping how we think.`,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'FutureTech',
    content:
      `This course gave me the edge I needed in my career. I'm now leading AI initiatives in my company.`,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 hover:bg-gray-900/70 transition-colors duration-300"
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
          <p className="text-sm text-gray-400">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{testimonial.content}</p>
      <div className="flex items-center">
        <div className="flex mr-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < testimonial.rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        <span className="text-gray-400">{testimonial.rating}.0</span>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Students Say
          </h1>
          <p className="text-xl text-gray-400">
            Join the community of transformed professionals
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.skool.com/chaiwithjai/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </div>
  );
};