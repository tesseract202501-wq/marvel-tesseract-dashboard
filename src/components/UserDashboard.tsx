"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Lock, Unlock, Sparkles, Zap, ArrowRight, Vote } from "lucide-react";
import Link from "next/link";

interface Game {
  id: number;
  title: string;
  status: "unlocked" | "locked";
  points: number;
  description: string;
  image: string;
}

interface Team {
  rank: number;
  name: string;
  points: number;
  color: string;
}

const games: Game[] = [
  {
    id: 1,
    title: "Infinity Stone Quest",
    status: "unlocked",
    points: 500,
    description: "Collect all six infinity stones across the cosmos",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Quantum Realm Challenge",
    status: "unlocked",
    points: 350,
    description: "Navigate through the subatomic quantum dimension",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Tesseract Portal",
    status: "unlocked",
    points: 450,
    description: "Master space travel through tesseract portals",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop",
  },
];

const teams: Team[] = [
  { rank: 1, name: "Cosmic Avengers", points: 8450, color: "#8B5CF6" },
  { rank: 2, name: "Infinity Warriors", points: 7890, color: "#EC4899" },
  { rank: 3, name: "Quantum Guardians", points: 7320, color: "#3B82F6" },
  { rank: 4, name: "Tesseract Titans", points: 6850, color: "#10B981" },
  { rank: 5, name: "Multiverse Masters", points: 6420, color: "#F59E0B" },
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-amber-900 to-stone-900 relative overflow-hidden">
      {/* TVA-inspired retro pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#d97706_0px,#d97706_2px,transparent_2px,transparent_10px)]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* Header - TVA Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4 bg-amber-900/30 border-2 border-orange-600/50 px-8 py-4 backdrop-blur-sm">
            <div className="w-12 h-12 bg-orange-600 flex items-center justify-center font-bold text-2xl text-white">
              TVA
            </div>
            <h1 className="text-5xl font-bold text-orange-100 tracking-wide">
              TESSERACT 2025
            </h1>
          </div>
          <p className="text-amber-200 text-lg font-light">Time Variance Authority • Sacred Timeline Division</p>
        </div>

        {/* Games Section - Minimal & Modern */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-orange-100 mb-8 uppercase tracking-wider border-l-4 border-orange-600 pl-4">
            Available Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game) => (
              <Card
                key={game.id}
                className="group relative overflow-hidden border-2 border-orange-700/40 hover:border-orange-500 transition-all duration-300 bg-stone-900/60 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sepia-[0.3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-100 mb-3 tracking-wide">{game.title}</h3>
                  <p className="text-amber-200/70 text-sm mb-6 leading-relaxed">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold text-lg">
                      {game.points} pts
                    </span>
                    <Button
                      size="sm"
                      className="bg-orange-600 hover:bg-orange-700 text-white font-semibold border-0"
                    >
                      Play Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Vote Section - TVA Minimal */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-orange-100 mb-8 uppercase tracking-wider border-l-4 border-orange-600 pl-4">
            Cast Your Vote
          </h2>
          <Card className="bg-gradient-to-br from-amber-900/30 to-stone-900/60 border-2 border-orange-700/40 hover:border-orange-600 p-10 backdrop-blur-sm transition-all duration-300">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-orange-600 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
                  V
                </div>
                <h3 className="text-3xl font-bold text-orange-100 mb-4 tracking-wide">
                  Support Your Favorite Team
                </h3>
                <p className="text-amber-200/80 text-lg leading-relaxed">
                  Review team projects and cast your vote. Remember: For All Time. Always.
                </p>
              </div>
              <Link href="/vote">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-10 py-6 font-bold uppercase tracking-wider border-0 shadow-[0_0_25px_rgba(234,88,12,0.4)] hover:shadow-[0_0_35px_rgba(234,88,12,0.6)] transition-all duration-300"
                >
                  <Vote className="w-5 h-5 mr-2" />
                  Go to Voting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* Leaderboard Section - Minimal TVA */}
        <section>
          <h2 className="text-2xl font-bold text-orange-100 mb-8 uppercase tracking-wider border-l-4 border-orange-600 pl-4">
            Leaderboard Preview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {teams.slice(0, 3).map((team) => (
              <Card
                key={team.rank}
                className={`relative overflow-hidden border-2 transition-all duration-300 bg-stone-900/60 backdrop-blur-sm ${
                  team.rank === 1
                    ? "border-orange-500/60 md:order-2"
                    : team.rank === 2
                    ? "border-amber-600/60 md:order-1"
                    : "border-stone-600/60 md:order-3"
                }`}
              >
                <div className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className={`w-16 h-16 flex items-center justify-center text-3xl font-bold ${
                      team.rank === 1
                        ? "bg-orange-600 text-white"
                        : team.rank === 2
                        ? "bg-amber-700 text-white"
                        : "bg-stone-700 text-white"
                    }`}>
                      {team.rank}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-orange-100 mb-3 tracking-wide">{team.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-orange-500">
                      {team.points.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-amber-200/60 text-sm uppercase tracking-wide">Total Points</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/leaderboard">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-10 py-6 uppercase tracking-wider border-0 shadow-[0_0_25px_rgba(234,88,12,0.4)] hover:shadow-[0_0_35px_rgba(234,88,12,0.6)] transition-all duration-300"
              >
                <Trophy className="w-5 h-5 mr-2" />
                View Full Leaderboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}