"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, DoorOpen, Clock, FileText, Vote, User, TrendingUp } from "lucide-react";
import Link from "next/link";

interface Game {
  id: number;
  title: string;
  status: "unlocked" | "locked";
  points: number;
  description: string;
  icon: any;
}

interface Team {
  rank: number;
  name: string;
  points: number;
}

const games: Game[] = [
  {
    id: 1,
    title: "TIMEDOOR",
    status: "unlocked",
    points: 500,
    description: "Open Door",
    icon: DoorOpen,
  },
  {
    id: 2,
    title: "TIMELINE",
    status: "unlocked",
    points: 350,
    description: "Track Events",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "DOCUMENTS",
    status: "unlocked",
    points: 450,
    description: "File Access",
    icon: FileText,
  },
];

const teams: Team[] = [
  { rank: 1, name: "Cosmic Avengers", points: 8450 },
  { rank: 2, name: "Infinity Warriors", points: 7890 },
  { rank: 3, name: "Quantum Guardians", points: 7320 },
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 147, 77, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 147, 77, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Main Border Frame */}
        <div className="border-4 border-[#ff934d] shadow-[0_0_30px_rgba(255,147,77,0.5)] p-8">
          
          {/* Header */}
          <div className="text-center mb-12 border-b-2 border-[#ff934d]/40 pb-6">
            <h1 className="text-4xl font-bold text-[#ff934d] tracking-[0.3em] mb-2 uppercase drop-shadow-[0_0_15px_rgba(255,147,77,0.8)]">
              TIME VARIANCE AUTHORITY
            </h1>
            <div className="flex items-center justify-center gap-4 text-[#ff934d]/70 text-sm tracking-widest mt-4">
              <span>04.52.3021</span>
              <span>•</span>
              <span>TERMINAL ACCESS</span>
              <span>•</span>
              <span>0231.47 // 387741</span>
            </div>
          </div>

          {/* Action List Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#ff934d] tracking-[0.2em] uppercase">
                ACTION LIST///
              </h2>
              <span className="text-[#ff934d]/60 text-sm tracking-wider">SELECT PROGRAM</span>
            </div>
          </div>

          {/* Games Grid - Minimal Icons */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {games.map((game, index) => {
              const IconComponent = game.icon;
              return (
                <div
                  key={game.id}
                  className="group relative flex flex-col items-center"
                >
                  {/* Indicator Dots */}
                  <div className="absolute -left-6 top-8 flex flex-col gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === index ? 'bg-[#ff934d]' : 'bg-[#ff934d]/30'}`}
                      />
                    ))}
                  </div>

                  {/* Icon Box */}
                  <div className="w-full aspect-square border-2 border-[#ff934d]/60 flex items-center justify-center mb-4 group-hover:border-[#ff934d] transition-all group-hover:shadow-[0_0_20px_rgba(255,147,77,0.4)]">
                    <IconComponent className="w-16 h-16 text-[#ff934d] stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#ff934d] font-bold tracking-wider text-sm mb-2 text-center">
                    {game.title}
                  </h3>

                  {/* Points */}
                  <div className="text-[#ff934d]/80 text-xs tracking-wider">
                    {game.points.toString().padStart(4, '0')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Character Icon */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-24 h-24 border-2 border-[#ff934d]/60 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-[#ff934d] stroke-[1.5]" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#ff934d] font-bold text-sm tracking-wider whitespace-nowrap">
                MISS MINUTES
              </div>
            </div>
          </div>

          {/* Vote Section */}
          <div className="mb-12 pt-8">
            <div className="border-2 border-[#ff934d]/60 p-8 hover:border-[#ff934d] transition-all hover:shadow-[0_0_25px_rgba(255,147,77,0.3)]">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#ff934d] tracking-[0.15em] mb-6 uppercase">
                  1. OPEN DOOR
                </h3>
                <Link href="/vote">
                  <button className="bg-[#ff934d] text-black font-bold py-3 px-12 tracking-[0.2em] text-sm hover:shadow-[0_0_20px_rgba(255,147,77,0.6)] transition-all uppercase">
                    2. DETECT
                  </button>
                </Link>
                <div className="mt-6 text-[#ff934d]/60 text-sm tracking-wider">
                  3. SUPPORT
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div>
            <h2 className="text-xl font-bold text-[#ff934d] tracking-[0.2em] mb-6 uppercase">
              LEADERBOARD///
            </h2>
            
            <div className="space-y-4 mb-8">
              {teams.map((team) => (
                <div
                  key={team.rank}
                  className="border border-[#ff934d]/40 p-4 flex items-center justify-between hover:border-[#ff934d] transition-all hover:shadow-[0_0_15px_rgba(255,147,77,0.2)]"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-8 h-8 border border-[#ff934d] flex items-center justify-center text-[#ff934d] font-bold">
                      {team.rank}
                    </div>
                    <span className="text-[#ff934d] tracking-wider text-sm uppercase">
                      {team.name}
                    </span>
                  </div>
                  <span className="text-[#ff934d]/80 font-bold tracking-wider">
                    {team.points.toString().padStart(5, '0')}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/leaderboard">
                <button className="border border-[#ff934d] text-[#ff934d] font-bold py-2 px-10 tracking-[0.2em] text-xs hover:bg-[#ff934d] hover:text-black transition-all uppercase">
                  VIEW FULL LEADERBOARD
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}