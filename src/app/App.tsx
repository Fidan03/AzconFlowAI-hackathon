import { HeroSection } from "./components/HeroSection";
import { ITicketIntegration } from "./components/ITicketIntegration";
import { AboutSection } from "./components/AboutSection";
import { LiveDashboard } from "./components/LiveDashboard";
import { RoutePlanner } from "./components/RoutePlanner";
import { AnnouncementsSection } from "./components/AnnouncementsSection";
import { OperatorDashboard } from "./components/OperatorDashboard";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <ITicketIntegration />
      <AboutSection />
      <LiveDashboard />
      <RoutePlanner />
      <AnnouncementsSection />
      <OperatorDashboard />
      <Footer />
    </div>
  );
}