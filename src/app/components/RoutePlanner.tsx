import { motion } from "motion/react";
import { MapPin, Navigation, Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

export function RoutePlanner() {
  const [activeFilter, setActiveFilter] = useState<"fastest" | "cheapest" | "least-crowded">("fastest");

  const routes = {
    fastest: { time: "23 min", transfers: 1, cost: "0.60 ₼", crowding: "High" },
    cheapest: { time: "35 min", transfers: 2, cost: "0.40 ₼", crowding: "Moderate" },
    "least-crowded": { time: "28 min", transfers: 1, cost: "0.60 ₼", crowding: "Low" },
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0ea5e9_1px,transparent_1px),linear-gradient(-45deg,#0ea5e9_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">Intelligent Route Planner</h2>
          <p className="text-xl text-slate-300">AI-optimized journey planning</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 mb-8"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                    <input
                      type="text"
                      placeholder="Koroğlu Metro"
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-12 py-4 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-400">To</label>
                  <div className="relative">
                    <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                    <input
                      type="text"
                      placeholder="Baku Olympic Stadium"
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-12 py-4 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <FilterButton
                  active={activeFilter === "fastest"}
                  onClick={() => setActiveFilter("fastest")}
                  icon={<Clock className="w-4 h-4" />}
                  label="Fastest"
                />
                <FilterButton
                  active={activeFilter === "cheapest"}
                  onClick={() => setActiveFilter("cheapest")}
                  icon={<DollarSign className="w-4 h-4" />}
                  label="Cheapest"
                />
                <FilterButton
                  active={activeFilter === "least-crowded"}
                  onClick={() => setActiveFilter("least-crowded")}
                  icon={<Users className="w-4 h-4" />}
                  label="Least Crowded"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <RouteCard
              type="Metro"
              route={routes[activeFilter]}
              steps={["Koroğlu", "28 May", "Sahil", "Stadium (Bus 88)"]}
              color="cyan"
            />
            <RouteCard
              type="Bus"
              route={{ time: "42 min", transfers: 0, cost: "0.40 ₼", crowding: "Low" }}
              steps={["Koroğlu", "Direct Route 88", "Stadium"]}
              color="blue"
            />
            <RouteCard
              type="Combined"
              route={{ time: "26 min", transfers: 1, cost: "0.80 ₼", crowding: "Moderate" }}
              steps={["Koroğlu", "Metro to Sahil", "Bolt (5 min)", "Stadium"]}
              color="purple"
              showRideOptions
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FilterButton({ active, onClick, icon, label }: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
        active
          ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
          : "bg-slate-800/60 text-slate-300 border border-slate-700 hover:border-cyan-400/50"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      {label}
    </motion.button>
  );
}

function RouteCard({ type, route, steps, color, showRideOptions }: {
  type: string;
  route: { time: string; transfers: number; cost: string; crowding: string };
  steps: string[];
  color: string;
  showRideOptions?: boolean;
}) {
  const colors = {
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/40",
    blue: "from-blue-500/20 to-blue-600/20 border-blue-400/40",
    purple: "from-purple-500/20 to-purple-600/20 border-purple-400/40",
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${colors[color as keyof typeof colors]} backdrop-blur-sm p-6 rounded-2xl border`}
      whileHover={{ scale: 1.01, y: -2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{type} Route</h3>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-slate-300"><Clock className="w-4 h-4 inline mr-1" />{route.time}</span>
          <span className="text-slate-300">{route.cost}</span>
          <span className={`px-3 py-1 rounded-full text-xs ${
            route.crowding === "Low" ? "bg-green-500/20 text-green-300" :
            route.crowding === "Moderate" ? "bg-yellow-500/20 text-yellow-300" :
            "bg-red-500/20 text-red-300"
          }`}>
            {route.crowding}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="px-3 py-1 bg-slate-800/60 rounded-lg text-sm text-white">
              {step}
            </div>
            {idx < steps.length - 1 && <ArrowRight className="w-4 h-4 text-cyan-400" />}
          </div>
        ))}
      </div>

      {showRideOptions && (
        <div className="flex gap-3 mt-4">
          <RideButton logo="Bolt" color="bg-green-500" />
          <RideButton logo="Apara" color="bg-purple-500" />
        </div>
      )}
    </motion.div>
  );
}

function RideButton({ logo, color }: { logo: string; color: string }) {
  return (
    <motion.button
      className={`${color} text-white px-6 py-2 rounded-lg font-semibold text-sm flex items-center gap-2`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Navigation className="w-4 h-4" />
      {logo}
    </motion.button>
  );
}
