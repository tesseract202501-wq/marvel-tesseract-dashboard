"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Team {
  id: string;
  name: string;
  votes: number;
}

export default function LeaderboardPage() {
  const teams: Team[] = [
    { id: "1", name: "TIMEDOOR", votes: 1247 },
    { id: "2", name: "TIMELINE", votes: 1189 },
    { id: "3", name: "DOCUMENTS", votes: 1034 },
  ];

  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      {/* Orange Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ff934d 1px, transparent 1px),
            linear-gradient(to bottom, #ff934d 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 border-2 border-[#ff934d]/60 p-8 bg-black/50">
          <Link href="/">
            <Button 
              variant="outline" 
              className="mb-6 border-[#ff934d]/60 text-[#ff934d] hover:bg-[#ff934d]/10 hover:text-[#ff934d] font-mono uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              RETURN
            </Button>
          </Link>
          
          <div className="mb-4 inline-block border border-[#ff934d]/60 px-6 py-2 bg-black/80">
            <span className="text-[#ff934d] font-mono text-sm tracking-[0.3em]">TVA</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#ff934d] mb-4 font-mono tracking-wider uppercase">
            LEADERBOARD
          </h1>
          <p className="text-xl text-[#ff934d]/70 font-mono tracking-wider uppercase">
            CURRENT STANDINGS • VOTE TOTALS
          </p>
        </div>

        {/* Podium */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-8">
            {/* 2nd Place */}
            <Card className="relative border-2 border-[#ff934d]/60 bg-black transition-all duration-300 hover:border-[#ff934d] hover:shadow-[0_0_20px_rgba(255,147,77,0.4)] md:translate-y-8">
              <div className="absolute left-4 top-4 w-2 h-2 bg-[#ff934d]/60" />
              <CardHeader className="text-center pb-4">
                <div className="text-7xl mb-4 text-[#ff934d]/60 font-mono">02</div>
                <CardTitle className="text-3xl text-[#ff934d] mb-2 font-mono uppercase tracking-wider">{teams[1].name}</CardTitle>
                <Badge className="bg-[#ff934d]/20 text-[#ff934d] border-[#ff934d]/40 font-mono uppercase tracking-wider mx-auto">
                  SECOND
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-[#ff934d] mb-2 font-mono">
                  {teams[1].votes}
                </div>
                <p className="text-[#ff934d]/60 text-sm font-mono uppercase tracking-wider">VOTES</p>
              </CardContent>
            </Card>

            {/* 1st Place */}
            <Card className="relative border-4 border-[#ff934d] bg-black transition-all duration-300 shadow-[0_0_30px_rgba(255,147,77,0.6)] scale-105">
              <div className="absolute left-4 top-4 w-2 h-2 bg-[#ff934d]" />
              <CardHeader className="text-center pb-4">
                <div className="text-8xl mb-4 text-[#ff934d] font-mono">01</div>
                <CardTitle className="text-4xl text-[#ff934d] mb-2 font-mono uppercase tracking-wider">{teams[0].name}</CardTitle>
                <Badge className="bg-[#ff934d]/30 text-[#ff934d] border-[#ff934d] font-mono uppercase tracking-wider mx-auto">
                  FIRST
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-[#ff934d] mb-2 font-mono">
                  {teams[0].votes}
                </div>
                <p className="text-[#ff934d] font-bold font-mono uppercase tracking-wider">VOTES</p>
              </CardContent>
            </Card>

            {/* 3rd Place */}
            <Card className="relative border-2 border-[#ff934d]/60 bg-black transition-all duration-300 hover:border-[#ff934d] hover:shadow-[0_0_20px_rgba(255,147,77,0.4)] md:translate-y-12">
              <div className="absolute left-4 top-4 w-2 h-2 bg-[#ff934d]/40" />
              <CardHeader className="text-center pb-4">
                <div className="text-7xl mb-4 text-[#ff934d]/60 font-mono">03</div>
                <CardTitle className="text-3xl text-[#ff934d] mb-2 font-mono uppercase tracking-wider">{teams[2].name}</CardTitle>
                <Badge className="bg-[#ff934d]/20 text-[#ff934d] border-[#ff934d]/40 font-mono uppercase tracking-wider mx-auto">
                  THIRD
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-[#ff934d] mb-2 font-mono">
                  {teams[2].votes}
                </div>
                <p className="text-[#ff934d]/60 text-sm font-mono uppercase tracking-wider">VOTES</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/vote">
            <Button
              size="lg"
              className="bg-[#ff934d] hover:bg-[#ff934d]/80 text-black font-bold text-xl px-8 py-6 shadow-[0_0_30px_rgba(255,147,77,0.6)] font-mono uppercase tracking-wider"
            >
              CAST YOUR VOTE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}