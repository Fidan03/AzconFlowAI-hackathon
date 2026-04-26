import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, CartesianGrid, Tooltip } from "recharts";
import { TrendingUp, Users, Zap, AlertCircle } from "lucide-react";

export function OperatorDashboard() {
  const congestionData = [
    { hour: "14:00", actual: 45, predicted: 42 },
    { hour: "15:00", actual: 52, predicted: 50 },
    { hour: "16:00", actual: 61, predicted: 58 },
    { hour: "17:00", actual: 68, predicted: 65 },
    { hour: "18:00", actual: 78, predicted: 82 },
    { hour: "19:00", actual: 85, predicted: 89 },
    { hour: "20:00", actual: 92, predicted: 95 },
    { hour: "21:00", actual: 88, predicted: 91 },
    { hour: "22:00", actual: 72, predicted: 75 },
  ];

  const loadData = [
    { station: "Koroğlu", load: 850 },
    { station: "Q.Qarayev", load: 720 },
    { station: "Neftçilər", load: 680 },
    { station: "Nizami", load: 450 },
    { station: "28 May", load: 420 },
    { station: "Sahil", load: 280 },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 mb-6">
            OPERATOR DASHBOARD
          </div>
          <h2 className="text-5xl font-bold mb-4 text-white">AI-Powered Operations Center</h2>
          <p className="text-xl text-slate-300">Predictive analytics and optimization insights</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Congestion Prediction vs Actual</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={congestionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="hour" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #0ea5e9', borderRadius: '0.5rem' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Line type="monotone" dataKey="predicted" stroke="#0ea5e9" strokeWidth={3} dot={{ fill: '#0ea5e9' }} />
                <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981' }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex gap-6 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-cyan-500 rounded" />
                <span className="text-sm text-slate-300">AI Predicted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded" />
                <span className="text-sm text-slate-300">Actual Load</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Current Station Load</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={loadData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="station" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #0ea5e9', borderRadius: '0.5rem' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Bar dataKey="load" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <RecommendationCard
            icon={<Zap className="w-7 h-7" />}
            title="Reduce Interval"
            description="Metro Red Line to 90 sec"
            impact="+15% capacity"
            color="cyan"
          />
          <RecommendationCard
            icon={<Users className="w-7 h-7" />}
            title="Deploy Buses"
            description="Add 15 buses on Routes 3,7,88"
            impact="+25% coverage"
            color="blue"
          />
          <RecommendationCard
            icon={<TrendingUp className="w-7 h-7" />}
            title="Route Optimization"
            description="Redirect via Nizami & 28 May"
            impact="-18% congestion"
            color="green"
          />
          <RecommendationCard
            icon={<AlertCircle className="w-7 h-7" />}
            title="Alert Passengers"
            description="Send crowding notifications"
            impact="Better distribution"
            color="orange"
          />
        </div>
      </div>
    </section>
  );
}

function RecommendationCard({ icon, title, description, impact, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
  color: string;
}) {
  const colors = {
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/40 text-cyan-300",
    blue: "from-blue-500/20 to-blue-600/20 border-blue-400/40 text-blue-300",
    green: "from-green-500/20 to-green-600/20 border-green-400/40 text-green-300",
    orange: "from-orange-500/20 to-orange-600/20 border-orange-400/40 text-orange-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      className={`bg-gradient-to-br ${colors[color as keyof typeof colors]} backdrop-blur-sm p-6 rounded-2xl border`}
    >
      <div className={`${colors[color as keyof typeof colors]} mb-4`}>{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-300 mb-3">{description}</p>
      <div className="text-xs text-green-400 font-semibold">{impact}</div>
    </motion.div>
  );
}
