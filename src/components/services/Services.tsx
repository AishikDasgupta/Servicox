// src/components/services/Services.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Smartphone, Search, BarChart } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { staggerContainer } from '@/lib/animations';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web apps built with modern technologies.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic to your website.',
  },
  {
    icon: BarChart,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business.',
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="services" className="bg-black/95 py-24">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}