import { motion } from "motion/react";
import { Brain, MapPin, TrendingUp, Zap } from "lucide-react";

export function AboutSection() {
  const features = [
    { icon: <Brain className="w-8 h-8" />, title: "AI-Powered", description: "Machine learning predicts transport demand" },
    { icon: <MapPin className="w-8 h-8" />, title: "Real-Time", description: "Live traffic and transport monitoring" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Predictive", description: "Event-driven congestion forecasting" },
    { icon: <Zap className="w-8 h-8" />, title: "Optimized", description: "Dynamic route and schedule adjustment" },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">What is AzCon FlowAI?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A next-generation smart city mobility platform that combines AI-powered analytics with real-time event data
            to optimize public transport operations and reduce urban congestion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
