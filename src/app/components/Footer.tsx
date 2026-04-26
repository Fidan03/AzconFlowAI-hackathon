import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
              AzCon FlowAI
            </h3>
            <p className="text-slate-400 text-sm">
              Next-generation smart city mobility powered by AI and real-time event data.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Live Map</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Route Planner</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Operator Dashboard</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex gap-4">
              <SocialIcon icon={<Github className="w-5 h-5" />} />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© 2026 AzCon FlowAI. Built for AZCON Hackathon - Smart City Mobility Challenge.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}
