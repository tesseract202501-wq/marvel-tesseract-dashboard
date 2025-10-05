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
  {
    id: 4,
    title: "Cosmic Battle Arena",
    status: "locked",
    points: 600,
    description: "Face off against cosmic entities in epic battles",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Multiverse Madness",
    status: "locked",
    points: 700,
    description: "Explore infinite realities across the multiverse",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Asgard's Trials",
    status: "locked",
    points: 550,
    description: "Prove your worth in the trials of the gods",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              TESSERACT 2025
            </h1>
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
          </div>
          <p className="text-purple-300 text-lg">Welcome to the Cosmic Marvel Universe</p>
        </div>

        {/* Games Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="w-7 h-7 text-yellow-400" />
            Available Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card
                key={game.id}
                className={`group relative overflow-hidden border-2 transition-all duration-300 ${
                  game.status === "unlocked"
                    ? "border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer bg-slate-900/80"
                    : "border-slate-700/50 bg-slate-900/40 opacity-60"
                }`}
              >
                {/* Holographic border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${game.status === "locked" ? "hidden" : ""}`}></div>
                
                <div className="relative">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className={`w-full h-full object-cover transition-transform duration-300 ${
                        game.status === "unlocked" ? "group-hover:scale-110" : "grayscale"
                      }`}
                    />
                    {game.status === "locked" && (
                      <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
                        <Lock className="w-12 h-12 text-slate-500" />
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant={game.status === "unlocked" ? "default" : "secondary"}
                        className={
                          game.status === "unlocked"
                            ? "bg-green-500/90 hover:bg-green-600 text-white"
                            : "bg-slate-700/90"
                        }
                      >
                        {game.status === "unlocked" ? (
                          <Unlock className="w-3 h-3 mr-1" />
                        ) : (
                          <Lock className="w-3 h-3 mr-1" />
                        )}
                        {game.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{game.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold flex items-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        {game.points} pts
                      </span>
                      {game.status === "unlocked" && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          Play Now
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Vote Section - Now a Call to Action */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <Vote className="w-7 h-7 text-pink-400" />
            Cast Your Vote
          </h2>
          <Card className="bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-slate-900/80 border-2 border-pink-500/50 p-8 hover:border-pink-400/70 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <Sparkles className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-3">
                  Support Your Favorite Team
                </h3>
                <p className="text-slate-300 text-lg">
                  View all team projects, explore their innovations, and cast your vote to help them win!
                </p>
              </div>
              <Link href="/vote">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] transition-all duration-300 text-lg px-8 py-6 font-bold"
                >
                  <Vote className="w-5 h-5 mr-2" />
                  Go to Voting Page
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* Leaderboard Section - Top 3 Preview */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="w-7 h-7 text-yellow-400" />
            Leaderboard Preview
          </h2>
          
          {/* Top 3 Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {teams.slice(0, 3).map((team) => (
              <Card
                key={team.rank}
                className={`relative overflow-hidden border-2 transition-all duration-300 ${
                  team.rank === 1
                    ? "border-yellow-500/50 md:order-2 bg-gradient-to-br from-yellow-900/20 to-slate-900/80"
                    : team.rank === 2
                    ? "border-slate-400/50 md:order-1 bg-gradient-to-br from-slate-800/20 to-slate-900/80"
                    : "border-orange-600/50 md:order-3 bg-gradient-to-br from-orange-900/20 to-slate-900/80"
                }`}
              >
                <div className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <Trophy
                      className={`w-16 h-16 ${
                        team.rank === 1
                          ? "text-yellow-400"
                          : team.rank === 2
                          ? "text-slate-400"
                          : "text-orange-600"
                      }`}
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 border-2 border-current flex items-center justify-center font-bold text-white">
                      {team.rank}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: team.color }}
                    ></div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {team.points.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">Total Points</p>
                </div>
              </Card>
            ))}
          </div>

          {/* View Full Leaderboard Button */}
          <div className="text-center">
            <Link href="/leaderboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-lg px-8 py-6 shadow-[0_0_25px_rgba(251,191,36,0.5)] hover:shadow-[0_0_35px_rgba(251,191,36,0.7)] transition-all duration-300"
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