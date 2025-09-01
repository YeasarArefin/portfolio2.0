import React from 'react'
import { Card, CardContent } from './ui/card';
import { Award, Rocket, Target, Trophy } from 'lucide-react';
import { Badge } from './ui/badge';

export default function AchivementsSection() {
    const achievements = [
        {
            title: "NASA Space App Challenge 2024",
            status: "Global Nominee",
            icon: Rocket,
            year: "2024",
            description: "Selected as a global nominee for innovative space technology solutions",
            color: "from-blue-500 to-purple-600",
        },
        {
            title: "Moonshot Pirates",
            status: "19th Position",
            icon: Target,
            year: "2024",
            description: "Achieved 19th position in the prestigious entrepreneurship program",
            color: "from-orange-500 to-red-600",
        },
        {
            title: "Paradigm Challenge",
            status: "Finalist",
            icon: Award,
            year: "2024",
            description: "Reached finals in the competitive blockchain development challenge",
            color: "from-green-500 to-teal-600",
        },
    ];


    return (
        <Card className="bg-transparent border-none container mx-auto mt-8">
            <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-white" />
                    </div>
                    Notable Achievements
                </h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                            ></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <achievement.icon className="w-8 h-8 text-white" />
                                    <Badge className="bg-white/10 text-white border-white/20">{achievement.year}</Badge>
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">{achievement.title}</h4>
                                <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0 mb-3`}>
                                    {achievement.status}
                                </Badge>
                                <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </CardContent>
        </Card>
    )
}
