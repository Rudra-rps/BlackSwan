"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Bell, Play } from "lucide-react"
import { Radar, BarChart3, Shield, Eye, Zap, BookOpen } from "lucide-react"
import { SwanRadar } from "@/components/swan-radar"
import { DisasterSimulator } from "@/components/disaster-simulator"
import { DefensePlaybooks } from "@/components/defense-playbooks"
import { PolicyWatch } from "@/components/policy-watch"
import { MainDashboard } from "@/components/main-dashboard"

export default function BlackSwanSentinel() {
  const [emergencyMode, setEmergencyMode] = useState(false)
  const [activeFeature, setActiveFeature] = useState<string | null>(null)
  const [showDashboard, setShowDashboard] = useState(false)

  const newsItems = [
    "Fed signals aggressive rate hikes • RISK: Market volatility +40%",
    "Geopolitical tensions escalate • RISK: Oil price surge imminent",
    "Major bank reports liquidity issues • RISK: Credit crunch warning",
    "Inflation hits 40-year high • RISK: Consumer spending collapse",
    "Supply chain disruptions worsen • RISK: Manufacturing slowdown",
  ]

  if (showDashboard) {
    return <MainDashboard onBack={() => setShowDashboard(false)} />
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        emergencyMode
          ? "bg-gradient-to-br from-red-950 via-black to-red-900"
          : "bg-gradient-to-br from-gray-950 via-black to-gray-900"
      }`}
    >
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Emergency Mode Pulse Effect */}
      {emergencyMode && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 border-4 border-red-500 animate-pulse opacity-50" />
        </div>
      )}

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black text-white tracking-wider">
                  BLACK SWAN
                  <br />
                  <span className="text-[#98B89F] drop-shadow-[0_0_20px_rgba(152,184,159,0.5)]">SENTINEL</span>
                </h1>
                <div className="w-32 h-1 bg-white transform -skew-x-12" />
              </div>

              <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
                Volatility is the new normal.
                <br />
                <span className="text-[#98B89F]">Survival needs prediction.</span>
              </p>

              <Button
                size="lg"
                onClick={() => setShowDashboard(true)}
                className="bg-[#98B89F] hover:bg-[#7a9681] text-black font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(152,184,159,0.3)]"
              >
                <Play className="mr-2 h-5 w-5" />
                Launch Dashboard
              </Button>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#98B89F]/20 to-transparent rounded-lg backdrop-blur-sm border border-[#98B89F]/30 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-[#98B89F] rounded-full animate-pulse" />
                  <div className="absolute inset-4 border-2 border-white/50 rounded-full animate-spin" />
                  <div className="absolute inset-8 bg-[#98B89F] rounded-full opacity-50 animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              How It <span className="text-[#98B89F]">Works</span>
            </h2>
            <div className="w-24 h-1 bg-[#98B89F] mx-auto transform -skew-x-12" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#98B89F]/20 to-transparent rounded-full border-2 border-[#98B89F]/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Radar className="h-12 w-12 text-[#98B89F]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#98B89F] rounded-full flex items-center justify-center text-black font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SCAN</h3>
              <p className="text-gray-400">
                Our AI continuously monitors global markets, news, and economic indicators for early warning signals.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#98B89F]/20 to-transparent rounded-full border-2 border-[#98B89F]/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-12 w-12 text-[#98B89F]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#98B89F] rounded-full flex items-center justify-center text-black font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SIMULATE</h3>
              <p className="text-gray-400">
                Run disaster scenarios to understand potential impact on your portfolio and identify vulnerabilities.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#98B89F]/20 to-transparent rounded-full border-2 border-[#98B89F]/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-12 w-12 text-[#98B89F]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#98B89F] rounded-full flex items-center justify-center text-black font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DEFEND</h3>
              <p className="text-gray-400">
                Get AI-powered defense strategies and actionable recommendations to protect your wealth.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Interactive <span className="text-[#98B89F]">Features</span>
            </h2>
            <div className="w-24 h-1 bg-[#98B89F] mx-auto transform -skew-x-12" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              className={`bg-black/50 border-[#98B89F]/30 backdrop-blur-sm hover:border-[#98B89F]/60 hover:bg-[#98B89F]/5 transition-all duration-300 group cursor-pointer ${
                activeFeature === "swan-radar" ? "border-[#98B89F] bg-[#98B89F]/10" : ""
              }`}
              onClick={() => setActiveFeature(activeFeature === "swan-radar" ? null : "swan-radar")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#98B89F]/20 to-transparent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Radar className="h-8 w-8 text-[#98B89F]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#98B89F] transition-colors">
                  Swan Radar
                </h3>
                <p className="text-gray-400 text-sm">
                  Interactive risk heatmap with real-time monitoring across all major asset classes.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`bg-black/50 border-[#98B89F]/30 backdrop-blur-sm hover:border-[#98B89F]/60 hover:bg-[#98B89F]/5 transition-all duration-300 group cursor-pointer ${
                activeFeature === "disaster-simulator" ? "border-[#98B89F] bg-[#98B89F]/10" : ""
              }`}
              onClick={() => setActiveFeature(activeFeature === "disaster-simulator" ? null : "disaster-simulator")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#98B89F]/20 to-transparent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-[#98B89F]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#98B89F] transition-colors">
                  Disaster Simulator
                </h3>
                <p className="text-gray-400 text-sm">
                  Upload your portfolio and stress-test against various black swan scenarios.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`bg-black/50 border-[#98B89F]/30 backdrop-blur-sm hover:border-[#98B89F]/60 hover:bg-[#98B89F]/5 transition-all duration-300 group cursor-pointer ${
                activeFeature === "defense-playbooks" ? "border-[#98B89F] bg-[#98B89F]/10" : ""
              }`}
              onClick={() => setActiveFeature(activeFeature === "defense-playbooks" ? null : "defense-playbooks")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#98B89F]/20 to-transparent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-[#98B89F]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#98B89F] transition-colors">
                  Defense Playbooks
                </h3>
                <p className="text-gray-400 text-sm">
                  AI-generated strategies for different crisis scenarios and market conditions.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`bg-black/50 border-[#98B89F]/30 backdrop-blur-sm hover:border-[#98B89F]/60 hover:bg-[#98B89F]/5 transition-all duration-300 group cursor-pointer ${
                activeFeature === "policy-watch" ? "border-[#98B89F] bg-[#98B89F]/10" : ""
              }`}
              onClick={() => setActiveFeature(activeFeature === "policy-watch" ? null : "policy-watch")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#98B89F]/20 to-transparent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-[#98B89F]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#98B89F] transition-colors">
                  Policy Watch
                </h3>
                <p className="text-gray-400 text-sm">
                  Track regulatory changes and policy shifts with real-time impact analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Feature Display */}
        {activeFeature && (
          <section className="container mx-auto px-4 py-12">
            <div className="mb-8">
              <Button
                onClick={() => setActiveFeature(null)}
                variant="outline"
                className="border-[#98B89F]/30 text-[#98B89F] hover:bg-[#98B89F]/10"
              >
                ← Back to Features
              </Button>
            </div>

            {activeFeature === "swan-radar" && <SwanRadar />}
            {activeFeature === "disaster-simulator" && <DisasterSimulator />}
            {activeFeature === "defense-playbooks" && <DefensePlaybooks />}
            {activeFeature === "policy-watch" && <PolicyWatch />}
          </section>
        )}

        {/* Emergency Mode Toggle */}
        <div className="container mx-auto px-4 mb-8">
          <Card className="bg-black/50 border-red-500/30 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className={`h-6 w-6 ${emergencyMode ? "text-red-500 animate-pulse" : "text-gray-400"}`} />
                  <span className="text-white font-semibold">Emergency Mode</span>
                </div>
                <Switch
                  checked={emergencyMode}
                  onCheckedChange={setEmergencyMode}
                  className="data-[state=checked]:bg-red-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News Ticker */}
        <div className="container mx-auto px-4 pb-12">
          <Card className="bg-black/50 border-[#98B89F]/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <span>📈</span>
                <span>Live Market Intelligence</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden">
                <div className="animate-scroll whitespace-nowrap">
                  {newsItems.map((item, index) => (
                    <span key={index} className="inline-block text-[#98B89F] mx-8 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call-to-Action Footer */}
        <footer className="bg-gradient-to-r from-black via-gray-900 to-black border-t border-[#98B89F]/30">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Protect Your Finances Before the Next{" "}
                <span className="text-[#98B89F] drop-shadow-[0_0_20px_rgba(152,184,159,0.5)]">Black Swan</span> Hits
              </h2>

              <div className="w-32 h-1 bg-[#98B89F] mx-auto transform -skew-x-12 mb-8" />

              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join thousands of investors who are already using AI-powered risk intelligence to protect and grow their
                wealth.
              </p>

              <Button
                size="lg"
                className="bg-[#98B89F] hover:bg-[#7a9681] text-black font-bold px-12 py-6 text-xl transform hover:scale-105 transition-all duration-200 shadow-[0_0_30px_rgba(152,184,159,0.4)] hover:shadow-[0_0_40px_rgba(152,184,159,0.6)]"
              >
                Join the Beta →
              </Button>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                  © 2024 Black Swan Sentinel. Built for the next generation of risk-aware investors.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
