import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <AnalyticsDashboard />
      <Features />
      <Industries />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
