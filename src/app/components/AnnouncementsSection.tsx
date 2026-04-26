import { motion } from "motion/react";
import { AlertTriangle, Construction, Info, TrendingUp } from "lucide-react";

export function AnnouncementsSection() {
  const announcements = [
    {
      type: "alert",
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "High Congestion Warning",
      message: "Expected heavy traffic near Olympic Stadium due to Coldplay concert (May 15, 20:00)",
      time: "2 hours ago",
      color: "red",
    },
    {
      type: "info",
      icon: <Construction className="w-6 h-6" />,
      title: "Planned Route Change",
      message: "Metro intervals reduced to 90 seconds on Red Line (18:00 - 23:00)",
      time: "4 hours ago",
      color: "orange",
    },
    {
      type: "update",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Service Enhancement",
      message: "15 additional buses deployed on Routes 3, 7, and 88",
      time: "5 hours ago",
      color: "blue",
    },
    {
      type: "maintenance",
      icon: <Info className="w-6 h-6" />,
      title: "Scheduled Maintenance",
      message: "Brief service interruption at Nizami station (01:00 - 03:00)",
      time: "1 day ago",
      color: "cyan",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">Real-Time Announcements</h2>
          <p className="text-xl text-slate-300">Stay updated with live transport alerts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {announcements.map((announcement, idx) => (
            <AnnouncementCard key={idx} announcement={announcement} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnnouncementCard({ announcement, delay }: {
  announcement: {
    type: string;
    icon: React.ReactNode;
    title: string;
    message: string;
    time: string;
    color: string;
  };
  delay: number;
}) {
  const colors = {
    red: "from-red-500/20 to-red-600/20 border-red-400/50 text-red-300",
    orange: "from-orange-500/20 to-orange-600/20 border-orange-400/50 text-orange-300",
    blue: "from-blue-500/20 to-blue-600/20 border-blue-400/50 text-blue-300",
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/50 text-cyan-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -3 }}
      className={`bg-gradient-to-br ${colors[announcement.color as keyof typeof colors]} backdrop-blur-sm p-6 rounded-2xl border`}
    >
      <div className="flex items-start gap-4">
        <div className={colors[announcement.color as keyof typeof colors]}>
          {announcement.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{announcement.title}</h3>
          <p className="text-slate-300 text-sm mb-3">{announcement.message}</p>
          <span className="text-xs text-slate-500">{announcement.time}</span>
        </div>
      </div>
    </motion.div>
  );
}
