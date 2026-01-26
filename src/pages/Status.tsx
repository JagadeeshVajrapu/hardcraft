import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, Clock, Activity, Server, Database, Globe, Shield } from "lucide-react";

const Status = () => {
  // System status data - in production, this would come from an API
  const systems = [
    {
      name: "Web Application",
      status: "operational",
      icon: Globe,
      uptime: "99.99%",
      lastChecked: "2 minutes ago",
    },
    {
      name: "API Services",
      status: "operational",
      icon: Server,
      uptime: "99.98%",
      lastChecked: "2 minutes ago",
    },
    {
      name: "Database",
      status: "operational",
      icon: Database,
      uptime: "99.99%",
      lastChecked: "2 minutes ago",
    },
    {
      name: "Authentication",
      status: "operational",
      icon: Shield,
      uptime: "99.99%",
      lastChecked: "2 minutes ago",
    },
  ];

  const incidents = [
    {
      date: "January 24, 2026",
      title: "Scheduled Maintenance Completed",
      status: "resolved",
      description: "Routine maintenance was completed successfully. All systems are operational.",
      duration: "30 minutes",
    },
    {
      date: "January 15, 2026",
      title: "API Latency Improvements",
      status: "resolved",
      description: "We deployed performance improvements to reduce API response times.",
      duration: "N/A",
    },
    {
      date: "January 10, 2026",
      title: "Minor Database Optimization",
      status: "resolved",
      description: "Database optimizations were applied to improve query performance.",
      duration: "15 minutes",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-400";
      case "degraded":
        return "text-yellow-400";
      case "outage":
        return "text-red-400";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-500/10 border-green-500/20";
      case "degraded":
        return "bg-yellow-500/10 border-yellow-500/20";
      case "outage":
        return "bg-red-500/10 border-red-500/20";
      default:
        return "bg-muted border-border";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-yellow-400" />;
      case "outage":
        return <AlertCircle className="h-5 w-5 text-red-400" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const allOperational = systems.every((s) => s.status === "operational");

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="container mx-auto sm:px-12 px-4 pt-28 pb-16">
          {/* Header */}
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold">System Status</h1>
            <p className="mt-3 text-muted-foreground">
              Real-time status of OpenPlan services and infrastructure.
            </p>
          </div>

          {/* Overall Status Banner */}
          <div
            className={`mb-10 p-6 rounded-xl border ${
              allOperational
                ? "bg-green-500/10 border-green-500/20"
                : "bg-yellow-500/10 border-yellow-500/20"
            }`}
          >
            <div className="flex items-center gap-4">
              {allOperational ? (
                <CheckCircle className="h-8 w-8 text-green-400" />
              ) : (
                <AlertCircle className="h-8 w-8 text-yellow-400" />
              )}
              <div>
                <h2 className={`text-xl font-semibold ${allOperational ? "text-green-400" : "text-yellow-400"}`}>
                  {allOperational ? "All Systems Operational" : "Some Systems Degraded"}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Last updated: {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* System Status Grid */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Current Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {systems.map((system) => (
                <div
                  key={system.name}
                  className={`p-5 rounded-xl border ${getStatusBg(system.status)}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <system.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium">{system.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          Last checked: {system.lastChecked}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">
                        {system.uptime} uptime
                      </span>
                      {getStatusIcon(system.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Uptime Chart Placeholder */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">90-Day Uptime</h2>
            <div className="p-6 rounded-xl border border-border/60 bg-card/40">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Past 90 days</span>
                <span className="text-sm font-medium text-green-400">99.98% uptime</span>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 90 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 flex-1 rounded-sm ${
                      i === 45 ? "bg-yellow-400/60" : "bg-green-400/60"
                    }`}
                    title={`Day ${i + 1}: ${i === 45 ? "Partial outage" : "Operational"}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>90 days ago</span>
                <span>Today</span>
              </div>
            </div>
          </div>

          {/* Recent Incidents */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-border/60 bg-card/40"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs text-muted-foreground">
                        {incident.date}
                      </span>
                      <h3 className="font-medium mt-1">{incident.title}</h3>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        incident.status === "resolved"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {incident.description}
                  </p>
                  {incident.duration !== "N/A" && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Duration: {incident.duration}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="mt-12 p-6 rounded-xl border border-border/60 bg-card/40">
            <h2 className="text-lg font-semibold mb-2">Subscribe to Updates</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified about scheduled maintenance and service disruptions.
            </p>
            <div className="flex gap-3 flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-[200px] h-10 px-4 rounded-lg border border-border/60 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="h-10 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Status;

