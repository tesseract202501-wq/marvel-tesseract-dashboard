"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Team {
  id: string;
  name: string;
  votes: number;
  color: string;
  icon: string;
}

export default function LeaderboardPage() {
  const teams: Team[] = [
    { id: "1", name: "Team Stark", votes: 1247, color: "from-yellow-400 to-orange-500", icon: "🔥" },
    { id: "2", name: "Team Cap", votes: 1189, color: "from-gray-400 to-blue-500", icon: "🛡️" },
    { id: "3", name: "Team Thor", votes: 1034, color: "from-orange-400 to-red-500", icon: "⚡" },
    { id: "4", name: "Team Widow", votes: 967, color: "from-purple-500 to-pink-500", icon: "🕷️" },
    { id: "5", name: "Team Hulk", votes: 892, color: "from-green-500 to-emerald-600", icon: "💪" },
    { id: "6", name: "Team Strange", votes: 845, color: "from-purple-500 to-indigo-600", icon: "✨" },
  ];

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-8 h-8 text-yellow-400" />;
      case 1:
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 2:
        return <Award className="w-8 h-8 text-orange-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  const getRankBadge = (index: number) => {
    const ranks = ["🥇", "🥈", "🥉"];
    return ranks[index] || `#${index + 1}`;
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJoMnYyaC0ydi0yem0tMiAydjJoMnYtMmgtMnptMC0yaDJ2MmgtMnYtMnptLTIgMnYyaDJ2LTJoLTJ6bTAtMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/">
            <Button variant="outline" className="mb-4 border-purple-500/50 hover:bg-purple-500/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            🏆 HALL OF HEROES 🏆
          </h1>
          <p className="text-2xl text-purple-200/80">
            <Sparkles className="inline w-6 h-6 mr-2" />
            The Greatest Champions of Tesseract 2025
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* 2nd Place */}
            <Card className="relative overflow-hidden border-2 border-gray-400 bg-gradient-to-br from-gray-500/20 to-blue-500/20 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(156,163,175,0.5)] transition-all duration-300 transform md:translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-blue-600/10" />
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="text-6xl">{getRankBadge(1)}</div>
                </div>
                <CardTitle className="text-3xl text-gray-200 mb-2">{teams[1].name}</CardTitle>
                <div className="flex justify-center">{getRankIcon(1)}</div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {teams[1].votes}
                </div>
                <p className="text-gray-300 text-sm">VOTES</p>
              </CardContent>
            </Card>

            {/* 1st Place */}
            <Card className="relative overflow-hidden border-4 border-yellow-400 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] transition-all duration-300 scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10" />
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="text-7xl animate-bounce">{getRankBadge(0)}</div>
                </div>
                <CardTitle className="text-4xl text-yellow-200 mb-2">{teams[0].name}</CardTitle>
                <div className="flex justify-center">{getRankIcon(0)}</div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-2">
                  {teams[0].votes}
                </div>
                <p className="text-yellow-200 font-bold">VOTES</p>
              </CardContent>
            </Card>

            {/* 3rd Place */}
            <Card className="relative overflow-hidden border-2 border-orange-500 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all duration-300 transform md:translate-y-12">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10" />
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="text-6xl">{getRankBadge(2)}</div>
                </div>
                <CardTitle className="text-3xl text-orange-200 mb-2">{teams[2].name}</CardTitle>
                <div className="flex justify-center">{getRankIcon(2)}</div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {teams[2].votes}
                </div>
                <p className="text-orange-300 text-sm">VOTES</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Remaining Teams */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Other Competitors
          </h2>
          <div className="space-y-4">
            {teams.slice(3).map((team, index) => (
              <Card
                key={team.id}
                className={`relative overflow-hidden border-2 border-purple-500/30 bg-gradient-to-r ${team.color} backdrop-blur-sm hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{getRankBadge(index + 3)}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                          {team.name}
                          <span className="text-3xl">{team.icon}</span>
                        </h3>
                        <Badge className="mt-1 bg-purple-500/30 text-purple-200 border-purple-400/50">
                          Rank #{index + 4}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${team.color} bg-clip-text text-transparent`}>
                        {team.votes}
                      </div>
                      <p className="text-gray-300 text-sm">VOTES</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/vote">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl px-8 py-6 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            >
              <Trophy className="w-6 h-6 mr-2" />
              Cast Your Vote Now!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}