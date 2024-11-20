import { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const INTRO_DURATION = 3000;
const CONTENT_DELAY = 500;
const SECTION_THRESHOLD = 0.2;

const sections = [
  {
    title: 'The Pattern Hidden in Plain Sight',
    content:
      "In finance, I spotted it first—the way AI wasn't just automating jobs, but reshaping entire thinking patterns. That observation became an obsession: understanding how technology transforms not just what we do, but how we think. This led me from Wall Street to teaching design at Parsons, where I discovered something no one was talking about.",
  },
  {
    title: 'The Deconstruction Method',
    content:
      "At Parsons, teaching students to see technology differently, I developed a framework I call 'conscious deconstruction.' Instead of learning tools, we break down thought patterns. The result? Students started seeing AI differently—not as software to master, but as systems to reshape. Their work began outpacing industry veterans. That's when tech companies started calling.",
  },
  {
    title: 'Breaking Industry Barriers',
    content:
      'In 2024, Jai spoke at the United Nations about the intersection of two very different ideas:  AI + Vedic Wisdom. With a small group of CEOs, startup founders and small business owners, I reconstructed their entire approach to technology. Result: A team of 20 achieved what their competitors needed 200 people for. The CEO of a publicly traded company saw this and asked me to rebuild them. Same method, different industry, 10x results. A pattern was emerging.',
  },
  {
    title: 'Where Vision Meets Proof',
    content:
      "Now I teach others to see these patterns. My students don't just use AI—they reshape industries with it. A designer who reinvented her agency's entire workflow. A doctor who rebuilt patient care systems. A teacher who transformed online education. They all started with the same framework: conscious deconstruction of existing patterns.",
  },
  {
    title: 'Beyond Just AI Skills',
    content:
      "This isn't about surviving AI disruption—it's about seeing the deeper patterns that will shape the next decade. In our community, we're applying Jony Ive's design thinking to technical learning, Yeezy's creative disruption to industry transformation, and Eastern philosophy to technological evolution. The result? A new way of thinking that turns industry chaos into career opportunity.",
  },
  {
    title: 'Your Pattern Recognition Begins',
    content:
      'Most AI education focuses on tools that will be obsolete in months. We focus on pattern recognition that will keep you ahead for years. The same framework that took me from finance to design to tech leadership, that helped my students disrupt their industries rather than just survive them. Ready to see the patterns hidden in plain sight?',
  },
  {
    title: 'Join us',
    content: `We're re-writing the story on AI education by creating a radically inclusive and accessible curriculum. We're having a massive impact in the:  healthcare, financial services, online education and food & beverage industries. Our goal is to build a talent pipelne of "amplifiers" who can solve problems across multiple industries and job functions. I can't predict the future, but I can guarantee that you're going to love coming to class.`,
  },
];
const FINAL_SECTION_TITLE = sections[sections.length - 1].title;

export const StoryScroll = ({ testMode = false }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const handleScroll = useCallback(
    (value) => {
      if (!hasScrolled && value > 0) {
        setHasScrolled(true);
      }

      const newSection = Math.min(
        Math.floor(value * sections.length + SECTION_THRESHOLD),
        sections.length - 1
      );
      setCurrentSection(newSection);
    },
    [hasScrolled]
  );

  useEffect(() => {
    if (testMode) return;

    const introTimer = setTimeout(() => setShowIntro(false), INTRO_DURATION);
    const contentTimer = setTimeout(
      () => setShowContent(true),
      INTRO_DURATION + CONTENT_DELAY
    );

    return () => {
      clearTimeout(introTimer);
      clearTimeout(contentTimer);
    };
  }, [testMode]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollYProgress, handleScroll]);

  return (
    <div className="text-white min-h-screen" data-testid="story-scroll">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            data-testid="intro-animation"
          >
            <Logo />
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={containerRef} className="relative">
        <ProgressBar progress={scrollYProgress} />
        <AnimatePresence mode="wait">
          {showContent && !hasScrolled && <Hero />}
        </AnimatePresence>
        {showContent && !hasScrolled && <ScrollIndicator />}
        <div className="sticky top-0 h-[60vh]" />
        <SectionContainer>
          {sections.map((section, index) => (
            <Section
              key={index}
              {...section}
              progress={useTransform(
                scrollYProgress,
                [
                  (index - 0.5) / sections.length,
                  index / sections.length,
                  (index + 1) / sections.length,
                ],
                [0, 1, 0]
              )}
              isActive={currentSection === index}
              isFinal={section.title === FINAL_SECTION_TITLE}
            />
          ))}
        </SectionContainer>
      </div>
    </div>
  );
};

const Logo = () => (
  <svg
    className="w-full h-full max-w-4xl"
    viewBox="0 0 1283 610"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="logo"
  >
    <defs>
      <radialGradient
        id="batSignal"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>
    </defs>
    <motion.path
      d="M641.5 305L450 150L500 450L641.5 305ZM641.5 305L833 150L783 450L641.5 305Z"
      stroke="url(#batSignal)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        opacity: { duration: 0.5 },
      }}
    />
  </svg>
);

const ProgressBar = ({ progress }) => (
  <motion.div
    className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
    style={{ scaleX: progress }}
    data-testid="progress-bar"
  />
);

const Hero = () => (
  <motion.div
    className="fixed top-0 left-0 w-full h-screen z-10 flex flex-col items-center justify-center p-4 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{
      duration: 1.5,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }}
    data-testid="hero-section"
  >
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      Welcome to the Bat Cave.
    </motion.h1>
    <img
      src="/jai.jpg"
      alt="Jai"
      loading="lazy"
      className="w-5/12 h-fit rounded-lg shadow-lg"
    />
    <motion.p
      className="text-xl md:text-2xl max-w-2xl text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: 1.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      From finance, agriculture to healthcare, here's how we're experimenting
      with AI.
    </motion.p>
  </motion.div>
);

const ScrollIndicator = () => (
  <motion.div
    className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      delay: 2,
      ease: [0.22, 1, 0.36, 1],
    }}
    data-testid="scroll-indicator"
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      <ChevronDown className="w-8 h-8" />
    </motion.div>
  </motion.div>
);

const SectionContainer = ({ children }) => (
  <div className="relative" data-testid="section-container">
    {children}
  </div>
);

const BatSignalButton = () => (
  <motion.div className="mt-6">
    <a
      href="https://www.skool.com/chaiwithjai/about"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block relative group"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,theme(colors.yellow.300/0.4)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150" />
      <button className="relative px-8 py-4 bg-gray-900 rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] overflow-hidden">
        <div className="relative z-10 flex items-center space-x-2">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current text-yellow-400 transform group-hover:scale-110 transition-transform duration-300"
          >
            <path d="M12 1 9 4h6l-3-3zm6.324 12.926c.208-.195.407-.404.596-.626A9.953 9.953 0 0 0 20 8a1 1 0 0 0-1-1h-3.501L12 2.999 8.501 7H5a1 1 0 0 0-1 1 9.953 9.953 0 0 0 1.08 5.3c.189.222.388.431.596.626C3.872 15.671 3 16.806 3 18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1c0-1.194-.872-2.329-2.676-4.074zM7 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          <span className="text-yellow-400 font-bold tracking-wider">
            JOIN THE ACADEMY
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 animate-[shimmer_2s_infinite]" />
      </button>
    </a>
  </motion.div>
);

const Section = ({ title, content, progress, isActive, isFinal }) => {
  const scale = useTransform(progress, [0, 0.3, 0.8], [1, 1.05, 1]);
  const opacity = useTransform(progress, [0.5, 0.8], [1, 0]);

  return (
    <motion.div
      className="h-[100vh] flex items-center justify-center p-8"
      style={{ opacity, scale }}
      data-testid="story-section"
    >
      <div className="max-w-2xl">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="text-lg md:text-xl text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>{content}</p>
          {isFinal && <BatSignalButton />}
        </motion.div>
      </div>
    </motion.div>
  );
};
