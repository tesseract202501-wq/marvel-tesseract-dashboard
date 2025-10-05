"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Vote, Sparkles, Trophy, X, Lock } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface Team {
  id: string;
  name: string;
  projectUrl: string;
  description: string;
  votes: number;
  color: string;
}

export default function VotePage() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [votedTeamId, setVotedTeamId] = useState<string | null>(null);

  const teams: Team[] = [
    {
      id: "1",
      name: "Team Stark",
      projectUrl: "https://ironman.marvel.com",
      description: "Innovative AI-powered solutions with cutting-edge technology",
      votes: 1247,
      color: "from-red-500/20 to-yellow-500/20",
    },
    {
      id: "2",
      name: "Team Cap",
      projectUrl: "https://captainamerica.marvel.com",
      description: "Strategic team collaboration platform for modern heroes",
      votes: 1189,
      color: "from-blue-500/20 to-red-500/20",
    },
    {
      id: "3",
      name: "Team Thor",
      projectUrl: "https://thor.marvel.com",
      description: "Thunder-powered cloud computing infrastructure",
      votes: 1034,
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: "4",
      name: "Team Widow",
      projectUrl: "https://blackwidow.marvel.com",
      description: "Stealth security and encryption systems",
      votes: 967,
      color: "from-gray-500/20 to-red-500/20",
    },
    {
      id: "5",
      name: "Team Hulk",
      projectUrl: "https://hulk.marvel.com",
      description: "High-performance data processing engine",
      votes: 892,
      color: "from-green-500/20 to-purple-500/20",
    },
    {
      id: "6",
      name: "Team Strange",
      projectUrl: "https://doctorstrange.marvel.com",
      description: "Mystical quantum computing solutions",
      votes: 845,
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const handleVote = (teamId: string) => {
    if (votedTeamId) {
      toast.error("You've already cast your vote! Each user gets only 1 vote.");
      return;
    }
    
    setVotedTeamId(teamId);
    toast.success("✨ Vote recorded by S.H.I.E.L.D.! Your support matters!");
    setSelectedTeam(null);
  };

  const hasVoted = votedTeamId !== null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950">
      {/* Cosmic Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJoMnYyaC0ydi0yem0tMiAydjJoMnYtMmgtMnptMC0yaDJ2MmgtMnYtMnptLTIgMnYyaDJ2LTJoLTJ6bTAtMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/">
            <Button variant="outline" className="mb-4 border-purple-500/50 hover:bg-purple-500/10">
              ← Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            CAST YOUR VOTE
          </h1>
          <p className="text-xl text-purple-200/80">
            <Sparkles className="inline w-5 h-5 mr-2" />
            Choose Your Champion — Support Innovation
          </p>
          {hasVoted && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/50">
              <Badge className="bg-green-500/30 text-green-200 border-green-400/50">
                ✓ Vote Cast
              </Badge>
              <span className="text-green-200 text-sm">
                You voted for {teams.find(t => t.id === votedTeamId)?.name}
              </span>
            </div>
          )}
          {!hasVoted && (
            <p className="mt-4 text-purple-300/70 text-sm">
              ⚠️ You can only vote once — choose wisely!
            </p>
          )}
          <div className="mt-4">
            <Link href="/leaderboard">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold">
                <Trophy className="w-4 h-4 mr-2" />
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {teams.map((team) => {
            const isVotedTeam = votedTeamId === team.id;
            const isLocked = hasVoted && !isVotedTeam;

            return (
              <Card
                key={team.id}
                className={`relative overflow-hidden border-2 backdrop-blur-sm transition-all duration-300 ${
                  isLocked
                    ? "border-gray-500/30 bg-gradient-to-br from-gray-500/10 to-gray-700/10 opacity-60 cursor-not-allowed"
                    : isVotedTeam
                    ? "border-green-500/50 bg-gradient-to-br from-green-500/20 to-emerald-500/20 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                    : `border-purple-500/30 bg-gradient-to-br ${team.color} hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer`
                } group`}
                onClick={() => !isLocked && setSelectedTeam(team)}
              >
                {isLocked && (
                  <div className="absolute top-4 right-4 z-10">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader>
                  <CardTitle className={`text-2xl transition-colors flex items-center justify-between ${
                    isLocked ? "text-gray-400" : isVotedTeam ? "text-green-200" : "text-purple-200 group-hover:text-purple-100"
                  }`}>
                    {team.name}
                    {!isLocked && <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className={`mb-4 text-sm ${isLocked ? "text-gray-400" : "text-gray-300"}`}>
                    {team.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={`${
                      isVotedTeam 
                        ? "bg-green-500/30 text-green-200 border-green-400/50"
                        : "bg-purple-500/30 text-purple-200 border-purple-400/50"
                    }`}>
                      <Trophy className="w-3 h-3 mr-1" />
                      {team.votes} votes
                    </Badge>
                    
                    {isVotedTeam && (
                      <Badge className="bg-green-500/30 text-green-200 border-green-400/50">
                        ✓ Your Vote
                      </Badge>
                    )}
                  </div>
                  
                  <Button
                    className={`w-full mt-4 font-bold transition-all ${
                      isLocked
                        ? "bg-gray-600/50 text-gray-300 cursor-not-allowed"
                        : isVotedTeam
                        ? "bg-green-600/50 text-green-100"
                        : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isLocked) setSelectedTeam(team);
                    }}
                    disabled={isLocked}
                  >
                    {isLocked ? (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Locked
                      </>
                    ) : isVotedTeam ? (
                      "Your Vote"
                    ) : (
                      "View Project & Vote"
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Project Preview Dialog */}
      <Dialog open={!!selectedTeam} onOpenChange={() => setSelectedTeam(null)}>
        <DialogContent className="max-w-6xl h-[90vh] p-0 border-2 border-purple-500/50 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 overflow-hidden">
          {selectedTeam && (
            <>
              <DialogHeader className="p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-b border-purple-500/30">
                <DialogTitle className="text-3xl bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent flex items-center justify-between">
                  <span>{selectedTeam.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedTeam(null)}
                    className="text-purple-300 hover:text-purple-100 hover:bg-purple-500/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </DialogTitle>
                <p className="text-purple-200/70 mt-2">{selectedTeam.description}</p>
              </DialogHeader>

              <div className="flex-1 p-4 overflow-hidden">
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-purple-500/30 bg-black/50 backdrop-blur-sm">
                  {/* iframe for project preview */}
                  <iframe
                    src={selectedTeam.projectUrl}
                    className="w-full h-full"
                    title={`${selectedTeam.name} Project`}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                  
                  {/* Overlay for error handling */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-purple-950/20 to-transparent" />
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-t border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge className="bg-purple-500/30 text-purple-200 border-purple-400/50 text-lg py-2 px-4">
                    <Trophy className="w-4 h-4 mr-2" />
                    {selectedTeam.votes} votes
                  </Badge>
                  
                  <a
                    href={selectedTeam.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-100 underline text-sm flex items-center gap-1"
                  >
                    Open in New Tab <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <Button
                  size="lg"
                  className={`font-bold shadow-lg ${
                    votedTeamId === selectedTeam.id
                      ? "bg-green-600/50 cursor-not-allowed"
                      : hasVoted
                      ? "bg-gray-600/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-[0_0_30px_rgba(168,85,247,0.7)]"
                  }`}
                  onClick={() => handleVote(selectedTeam.id)}
                  disabled={hasVoted}
                >
                  {votedTeamId === selectedTeam.id ? (
                    <>
                      <Vote className="w-5 h-5 mr-2" />
                      Your Vote
                    </>
                  ) : hasVoted ? (
                    <>
                      <Lock className="w-5 h-5 mr-2" />
                      Already Voted
                    </>
                  ) : (
                    <>
                      <Vote className="w-5 h-5 mr-2" />
                      Cast Vote
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}