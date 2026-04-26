import { motion } from "motion/react";
import { MapPin, Calendar, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            AzCon FlowAI
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-cyan-100 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            AI-Powered Transport Intelligence System
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Predictive mobility optimization for smart cities powered by real-time event data
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <CTAButton icon={<MapPin className="w-5 h-5" />}>
              Explore Live Map
            </CTAButton>
            <CTAButton icon={<Calendar className="w-5 h-5" />} variant="secondary">
              See Event Impact
            </CTAButton>
            <CTAButton icon={<TrendingUp className="w-5 h-5" />} variant="outline">
              Plan Route
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            width: `${Math.random() * 60 + 40}%`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
    </div>
  );
}

interface CTAButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

function CTAButton({ children, icon, variant = "primary" }: CTAButtonProps) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50",
    secondary: "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/50",
    outline: "bg-transparent border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/30",
  };

  return (
    <motion.button
      className={`px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 ${variants[variant]}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      {children}
    </motion.button>
  );
}
