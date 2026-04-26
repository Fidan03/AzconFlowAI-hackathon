import { motion } from "motion/react";
import { Calendar, MapPin, Users, ArrowRight, Brain, Activity, TrendingUp, AlertTriangle, Zap } from "lucide-react";

export function ITicketIntegration() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <GlowingOrbs />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-6 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 mb-6"
            animate={{ boxShadow: ["0 0 20px rgba(6,182,212,0.3)", "0 0 40px rgba(6,182,212,0.6)", "0 0 20px rgba(6,182,212,0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CORE TECHNOLOGY
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Event-Driven Transport Intelligence
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Powered by <span className="text-cyan-400 font-semibold">iTicket</span> Integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
          <EventCard />
          <AIProcessing />
          <TransportOptimization />
        </div>

        <FlowVisualization />
      </div>
    </section>
  );
}

function EventCard() {
  const events = [
    { name: "Coldplay Concert", location: "Baku Olympic Stadium", date: "May 15, 2026", time: "20:00", capacity: 45000, expected: 42000 },
    { name: "Formula 1 Grand Prix", location: "Baku City Circuit", date: "June 20, 2026", time: "15:00", capacity: 35000, expected: 33500 },
    { name: "Tech Summit 2026", location: "Heydar Aliyev Center", date: "May 10, 2026", time: "09:00", capacity: 5000, expected: 4800 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center gap-3">
        <Calendar className="w-7 h-7" />
        Events (iTicket)
      </h3>

      {events.map((event, idx) => (
        <motion.div
          key={idx}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
          whileHover={{ scale: 1.02, borderColor: "rgba(6,182,212,0.6)" }}
          transition={{ duration: 0.3 }}
          animate={{
            boxShadow: ["0 0 20px rgba(6,182,212,0.2)", "0 0 30px rgba(6,182,212,0.4)", "0 0 20px rgba(6,182,212,0.2)"]
          }}
          style={{ transition: "all 0.3s" }}
        >
          <h4 className="font-bold text-lg text-white mb-3">{event.name}</h4>
          <div className="space-y-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {event.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              {event.date} • {event.time}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              Expected: <span className="text-cyan-300 font-semibold">{event.expected.toLocaleString()}</span> / {event.capacity.toLocaleString()}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function AIProcessing() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col items-center justify-center space-y-8"
    >
      <motion.div
        className="relative w-48 h-48"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-2xl" />
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-cyan-400/30 border-t-cyan-400"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border-4 border-blue-400/30 border-r-blue-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="w-16 h-16 text-cyan-300" />
        </div>
      </motion.div>

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-cyan-300 flex items-center gap-3 justify-center">
          <Activity className="w-7 h-7" />
          AI Analysis
        </h3>
        <div className="space-y-2">
          <motion.div
            className="text-sm text-slate-300 px-4 py-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Analyzing demand patterns...
          </motion.div>
          <motion.div
            className="text-sm text-slate-300 px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            Predicting congestion hotspots...
          </motion.div>
          <motion.div
            className="text-sm text-slate-300 px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/30"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            Optimizing transport routes...
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function TransportOptimization() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center gap-3">
        <TrendingUp className="w-7 h-7" />
        Transport Impact
      </h3>

      <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm p-6 rounded-2xl border border-red-500/50 shadow-lg shadow-red-500/30">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <h4 className="font-bold text-lg text-white">Predicted Congestion</h4>
        </div>
        <div className="text-5xl font-bold text-red-400 mb-2">HIGH</div>
        <p className="text-sm text-slate-300">Peak impact: 18:00 - 22:00</p>
      </div>

      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30">
        <h4 className="font-bold text-white mb-4">Affected Stations</h4>
        <div className="space-y-2 text-sm">
          {["Koroğlu", "Qara Qarayev", "Neftçilər"].map((station, idx) => (
            <motion.div
              key={station}
              className="flex items-center justify-between p-3 bg-orange-500/20 rounded-lg border border-orange-500/40"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-white">{station}</span>
              <span className="text-orange-400 font-semibold">+{Math.floor(Math.random() * 300 + 200)}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm p-6 rounded-2xl border border-green-500/50 shadow-lg shadow-green-500/20">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-green-400" />
          <h4 className="font-bold text-lg text-white">AI Recommendations</h4>
        </div>
        <ul className="space-y-2 text-sm text-slate-200">
          <li className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Reduce metro interval to 90 seconds</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Add 15 extra buses on Routes 3, 7, 88</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Redirect passengers via Nizami & 28 May</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

function FlowVisualization() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-20 relative"
    >
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <FlowBox icon={<Calendar className="w-12 h-12" />} label="Event Data" color="cyan" />
        <FlowArrow />
        <FlowBox icon={<Brain className="w-12 h-12" />} label="AI Processing" color="blue" />
        <FlowArrow />
        <FlowBox icon={<TrendingUp className="w-12 h-12" />} label="Optimized Transport" color="green" />
      </div>
    </motion.div>
  );
}

function FlowBox({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  const colors = {
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/50 text-cyan-300 shadow-cyan-500/40",
    blue: "from-blue-500/20 to-blue-600/20 border-blue-400/50 text-blue-300 shadow-blue-500/40",
    green: "from-green-500/20 to-green-600/20 border-green-400/50 text-green-300 shadow-green-500/40",
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${colors[color as keyof typeof colors]} backdrop-blur-sm border-2 rounded-2xl p-8 shadow-xl`}
      whileHover={{ scale: 1.05, y: -5 }}
      animate={{
        boxShadow: ["0 0 30px rgba(6,182,212,0.3)", "0 0 50px rgba(6,182,212,0.6)", "0 0 30px rgba(6,182,212,0.3)"]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="flex flex-col items-center gap-4">
        {icon}
        <div className="font-semibold text-lg">{label}</div>
      </div>
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <motion.div
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <ArrowRight className="w-12 h-12 text-cyan-400" />
    </motion.div>
  );
}

function GlowingOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
    </>
  );
}
