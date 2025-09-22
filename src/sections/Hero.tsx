import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, User } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const { t, isLoading } = useLanguage();

  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t('roles').length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t, isLoading]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = t('cv');
    link.download = 'WahyuSuryaningrat_CV.pdf';
    link.click();
  };

  const toggleAbout = () => {
    setIsAboutExpanded(!isAboutExpanded);
  };

  return (
    <section id="hero" className="section pt-6 sm:pt-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.img
                  src="/profile.jpg"
                  alt="Wahyu Suryaningrat"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              className="space-y-4 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Greeting and Role */}
              <div className="space-y-3">
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="inline-block">
                    {t('language') === 'id' ? 'Halo, saya seorang ' : 'Hi, I\'m a '}
                  </span>
                  <div className="inline-block w-48 sm:w-56 md:w-64 text-left ml-1">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={roleIndex}
                        className="text-gradient inline-block"
                        initial={{ opacity: 0, y: 20, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: -20, rotateX: 90 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {t('roles')[roleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.h1>
                
                <motion.p
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t('pitch')}
                </motion.p>
              </div>
            </motion.div>

            {/* CTAs - Under the text */}
            <motion.div
              className="flex flex-row gap-2 w-full max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button
                onClick={toggleAbout}
                variant="outline"
                className="flex-1 inline-flex justify-center gap-2 whitespace-nowrap border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                {t('language') === 'id' ? 'Tentang' : 'About'}
                <User className="w-4 h-4" />
              </Button>
              
              <Button
                onClick={downloadCV}
                variant="outline"
                className="flex-1 inline-flex justify-center gap-2 whitespace-nowrap border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                {t('language') === 'id' ? 'Unduh CV' : 'Download CV'}
                <Download className="w-4 h-4" />
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="flex-1 inline-flex justify-center gap-2 whitespace-nowrap border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                {t('language') === 'id' ? 'Hubungi Saya' : 'Contact Me'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* About Content - Collapsible */}
            <AnimatePresence>
              {isAboutExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-full max-w-3xl"
                >
                  <motion.div
                    className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p className="text-center text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('about')}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}