import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import IntroText from '../components/IntroText';
import { useLanguage } from '../contexts/LanguageContext';

export default function Ventures() {
  const { t } = useLanguage();

  return (
    <section id="ventures" className="section bg-gray-50/50 dark:bg-gray-900/50 pt-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
            {t('sections.ventures.title')}
          </h2>
          <IntroText sectionKey="ventures" />

          <div className="grid gap-3 sm:grid-cols-3">
            {t('ventures').map((venture: any, index: number) => (
              <motion.a
                key={venture.name}
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {venture.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500" />
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {venture.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
