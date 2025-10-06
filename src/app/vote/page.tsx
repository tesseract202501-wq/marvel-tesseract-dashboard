"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Vote, X, Lock, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface Team {
  id: string;
  name: string;
  projectUrl: string;
  description: string;
  votes: number;
}

export default function VotePage() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [votedTeamId, setVotedTeamId] = useState<string | null>(null);

  const teams: Team[] = [
    {
      id: "1",
      name: "TIMEDOOR",
      projectUrl: "https://ironman.marvel.com",
      description: "TEMPORAL ACCESS CONTROL SYSTEM",
      votes: 1247,
    },
    {
      id: "2",
      name: "TIMELINE",
      projectUrl: "https://captainamerica.marvel.com",
      description: "BRANCHING DETECTION FRAMEWORK",
      votes: 1189,
    },
    {
      id: "3",
      name: "DOCUMENTS",
      projectUrl: "https://thor.marvel.com",
      description: "ARCHIVE MANAGEMENT PROTOCOL",
      votes: 1034,
    },
  ];

  const handleVote = (teamId: string) => {
    if (votedTeamId) {
      toast.error("VOTE ALREADY CAST • ONE VOTE PER USER");
      return;
    }
    
    setVotedTeamId(teamId);
    toast.success("✓ VOTE RECORDED • TVA DATABASE UPDATED");
    setSelectedTeam(null);
  };

  const hasVoted = votedTeamId !== null;

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
            CAST YOUR VOTE
          </h1>
          <p className="text-xl text-[#ff934d]/70 font-mono tracking-wider uppercase mb-6">
            SELECT PROJECT • SUBMIT APPROVAL
          </p>
          
          {hasVoted && (
            <div className="mt-4 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#ff934d] bg-[#ff934d]/10">
              <Badge className="bg-[#ff934d]/30 text-[#ff934d] border-[#ff934d]/50 font-mono uppercase">
                ✓ VOTED
              </Badge>
              <span className="text-[#ff934d] text-sm font-mono uppercase tracking-wider">
                {teams.find(t => t.id === votedTeamId)?.name}
              </span>
            </div>
          )}
          
          {!hasVoted && (
            <p className="mt-4 text-[#ff934d]/50 text-sm font-mono uppercase tracking-wider">
              ⚠ ONE VOTE ONLY • CHOOSE WISELY
            </p>
          )}
          
          <div className="mt-6">
            <Link href="/leaderboard">
              <Button className="bg-[#ff934d] hover:bg-[#ff934d]/80 text-black font-bold font-mono uppercase tracking-wider shadow-[0_0_20px_rgba(255,147,77,0.5)]">
                VIEW LEADERBOARD
              </Button>
            </Link>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {teams.map((team, index) => {
            const isVotedTeam = votedTeamId === team.id;
            const isLocked = hasVoted && !isVotedTeam;

            return (
              <Card
                key={team.id}
                className={`relative border-2 bg-black transition-all duration-300 ${
                  isLocked
                    ? "border-[#ff934d]/20 opacity-40 cursor-not-allowed"
                    : isVotedTeam
                    ? "border-[#ff934d] shadow-[0_0_30px_rgba(255,147,77,0.6)]"
                    : "border-[#ff934d]/60 hover:border-[#ff934d] hover:shadow-[0_0_20px_rgba(255,147,77,0.4)] cursor-pointer"
                }`}
                onClick={() => !isLocked && setSelectedTeam(team)}
              >
                {/* Indicator Dot */}
                <div className={`absolute left-4 top-4 w-2 h-2 ${
                  isVotedTeam ? "bg-[#ff934d]" : "bg-[#ff934d]/40"
                }`} />
                
                {isLocked && (
                  <div className="absolute top-4 right-4 z-10">
                    <Lock className="w-5 h-5 text-[#ff934d]/40" />
                  </div>
                )}
                
                <CardHeader>
                  <div className="text-center mb-4 text-5xl text-[#ff934d]/60 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <CardTitle className={`text-2xl font-mono tracking-wider uppercase text-center transition-colors ${
                    isLocked ? "text-[#ff934d]/40" : "text-[#ff934d]"
                  }`}>
                    {team.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className={`mb-6 text-xs font-mono uppercase tracking-wider text-center ${
                    isLocked ? "text-[#ff934d]/30" : "text-[#ff934d]/60"
                  }`}>
                    {team.description}
                  </p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <Badge className={`font-mono uppercase tracking-wider ${
                      isVotedTeam 
                        ? "bg-[#ff934d]/30 text-[#ff934d] border-[#ff934d]/50"
                        : "bg-[#ff934d]/10 text-[#ff934d]/70 border-[#ff934d]/30"
                    }`}>
                      {team.votes} VOTES
                    </Badge>
                  </div>
                  
                  <Button
                    className={`w-full font-bold font-mono uppercase tracking-wider transition-all ${
                      isLocked
                        ? "bg-[#ff934d]/10 text-[#ff934d]/40 border border-[#ff934d]/20 cursor-not-allowed"
                        : isVotedTeam
                        ? "bg-[#ff934d]/20 text-[#ff934d] border-2 border-[#ff934d]"
                        : "bg-[#ff934d] text-black hover:bg-[#ff934d]/80 shadow-[0_0_15px_rgba(255,147,77,0.3)]"
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
                        LOCKED
                      </>
                    ) : isVotedTeam ? (
                      "✓ YOUR VOTE"
                    ) : (
                      "VIEW & VOTE"
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
        <DialogContent className="max-w-6xl h-[90vh] p-0 border-2 border-[#ff934d]/60 bg-black overflow-hidden">
          {selectedTeam && (
            <>
              <DialogHeader className="p-6 bg-black border-b border-[#ff934d]/30">
                <DialogTitle className="text-3xl text-[#ff934d] font-mono uppercase tracking-wider flex items-center justify-between">
                  <span>{selectedTeam.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedTeam(null)}
                    className="text-[#ff934d] hover:text-[#ff934d]/70 hover:bg-[#ff934d]/10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </DialogTitle>
                <p className="text-[#ff934d]/60 mt-2 font-mono uppercase tracking-wider text-sm">
                  {selectedTeam.description}
                </p>
              </DialogHeader>

              <div className="flex-1 p-4 overflow-hidden">
                <div className="relative w-full h-full border-2 border-[#ff934d]/30 bg-black overflow-hidden">
                  <iframe
                    src={selectedTeam.projectUrl}
                    className="w-full h-full"
                    title={`${selectedTeam.name} Project`}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </div>
              </div>

              <div className="p-6 bg-black border-t border-[#ff934d]/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#ff934d]/20 text-[#ff934d] border-[#ff934d]/40 text-lg py-2 px-4 font-mono uppercase">
                    {selectedTeam.votes} VOTES
                  </Badge>
                  
                  <a
                    href={selectedTeam.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff934d]/70 hover:text-[#ff934d] underline text-sm flex items-center gap-1 font-mono uppercase tracking-wider"
                  >
                    EXTERNAL <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <Button
                  size="lg"
                  className={`font-bold shadow-lg font-mono uppercase tracking-wider ${
                    votedTeamId === selectedTeam.id
                      ? "bg-[#ff934d]/20 text-[#ff934d] border-2 border-[#ff934d] cursor-not-allowed"
                      : hasVoted
                      ? "bg-[#ff934d]/10 text-[#ff934d]/40 border border-[#ff934d]/20 cursor-not-allowed"
                      : "bg-[#ff934d] text-black hover:bg-[#ff934d]/80 shadow-[0_0_30px_rgba(255,147,77,0.5)]"
                  }`}
                  onClick={() => handleVote(selectedTeam.id)}
                  disabled={hasVoted}
                >
                  {votedTeamId === selectedTeam.id ? (
                    <>
                      <Vote className="w-5 h-5 mr-2" />
                      YOUR VOTE
                    </>
                  ) : hasVoted ? (
                    <>
                      <Lock className="w-5 h-5 mr-2" />
                      LOCKED
                    </>
                  ) : (
                    <>
                      <Vote className="w-5 h-5 mr-2" />
                      CAST VOTE
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