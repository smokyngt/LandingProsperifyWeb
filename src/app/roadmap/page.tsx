import { NavbarDemo } from "../../components/section/nav/NavbarDemo";
import TimelineDemo from "../../components/section/timeline/roadmap";

export const metadata = {
  title: "Roadmap - Prosperify",
  description:
    "Découvrez la feuille de route de Prosperify et nos prochaines évolutions en intelligence artificielle souveraine.",
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Navbar */}
      <div className="flex items-center justify-center py-6 bg-transparent mx-2 sm:mx-4 rounded-t-xl sm:rounded-t-2xl">
        <NavbarDemo />
      </div>

      {/* Timeline */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-50">
        
        <TimelineDemo />
      </main>
    </div>
  );
}
