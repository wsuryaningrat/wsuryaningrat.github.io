import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section pb-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
            {t('about')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
