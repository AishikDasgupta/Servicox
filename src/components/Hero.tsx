import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink

export function Hero() {
  return (
    <section
      id="home"
      className="w-screen min-h-screen bg-black flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/panoramic-view-dubai-city-illuminated-neon-spectrum_23-2151305340.jpg?t=st=1737107611~exp=1737111211~hmac=0d1449bfdbc3cf1ca746a65fe26763a44e115f640db8e4080b993da2ae2ada7c&w=826")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white text-center font-extrabold tracking-tight mb-6"
          >
            Transform Your Business with
            <span className="bg-gradient-to-r from-white/80 to-white/10 bg-clip-text text-transparent">
              {" "}
              Modern Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <motion.p className="text-lg sm:text-xl text-white/80 text-center max-w-3xl">
              Elevate your business with our comprehensive CRM solutions. From
              web development to digital marketing, we provide the tools you
              need to succeed in the digital age.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-start lg:justify-center"
          >
            {/* Smooth Scroll to Pricing */}
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={800}
              offset={-80} // Adjust to account for fixed headers if needed
              className="group"
            >
              <Button
                variant="gradient"
                size="lg"
                className="group flex items-center justify-center px-8 py-4 cursor-pointer"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollLink>

            {/* Smooth Scroll to Services */}
            <ScrollLink
              to="services"
              smooth={true}
              duration={800}
              offset={-80} // Adjust to account for fixed headers if needed
              className="group"
            >
              <Button
                variant="outline"
                size="lg"
                className="group flex items-center justify-center px-8 py-4 cursor-pointer"
              >
                Explore Services
                <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              </Button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
