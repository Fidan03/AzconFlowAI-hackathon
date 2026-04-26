import { motion } from "motion/react";
import { Activity, Users, AlertCircle } from "lucide-react";

export function LiveDashboard() {
  const stations = [
    { name: "Koroğlu", congestion: 85, status: "critical" },
    { name: "Qara Qarayev", congestion: 72, status: "high" },
    { name: "Neftçilər", congestion: 68, status: "high" },
    { name: "Xalqlar Dostluğu", congestion: 45, status: "moderate" },
    { name: "Nizami", congestion: 38, status: "moderate" },
    { name: "Sahil", congestion: 28, status: "low" },
    { name: "28 May", congestion: 42, status: "moderate" },
    { name: "Gənclik", congestion: 35, status: "moderate" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "moderate": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-slate-500";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d4_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/50 rounded-full text-green-300 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            LIVE
          </div>
          <h2 className="text-5xl font-bold mb-4 text-white">Real-Time Mobility Dashboard</h2>
          <p className="text-xl text-slate-300">Metro network congestion monitoring</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <StatsCard
            icon={<Activity className="w-8 h-8" />}
            label="Active Passengers"
            value="127,543"
            change="+12%"
            color="cyan"
          />
          <StatsCard
            icon={<Users className="w-8 h-8" />}
            label="Vehicles Operating"
            value="342"
            change="+8%"
            color="blue"
          />
          <StatsCard
            icon={<AlertCircle className="w-8 h-8" />}
            label="Congestion Alerts"
            value="7"
            change="+3"
            color="orange"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Metro Station Congestion Heatmap</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stations.map((station, idx) => (
              <motion.div
                key={station.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{station.name}</span>
                  <span className="text-slate-400 text-sm">{station.congestion}%</span>
                </div>

                <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full ${getStatusColor(station.status)} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${station.congestion}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.05 }}
                  />
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className={`w-2 h-2 ${getStatusColor(station.status)} rounded-full`} />
                  <span className="text-xs text-slate-400 capitalize">{station.status}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            <LegendItem color="bg-red-500" label="Critical (>80%)" />
            <LegendItem color="bg-orange-500" label="High (60-80%)" />
            <LegendItem color="bg-yellow-500" label="Moderate (40-60%)" />
            <LegendItem color="bg-green-500" label="Low (<40%)" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsCard({ icon, label, value, change, color }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  color: string;
}) {
  const colors = {
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/40 text-cyan-300",
    blue: "from-blue-500/20 to-blue-600/20 border-blue-400/40 text-blue-300",
    orange: "from-orange-500/20 to-orange-600/20 border-orange-400/40 text-orange-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={`bg-gradient-to-br ${colors[color as keyof typeof colors]} backdrop-blur-sm p-6 rounded-2xl border`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={colors[color as keyof typeof colors]}>{icon}</div>
        <span className="text-green-400 text-sm font-semibold">{change}</span>
      </div>
      <div className="text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-slate-400 text-sm">{label}</div>
    </motion.div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 ${color} rounded`} />
      <span className="text-sm text-slate-400">{label}</span>
    </div>
  );
}
