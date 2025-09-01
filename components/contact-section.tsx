import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Globe, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Footer } from "./footer";
import { Navigation } from "./navigation";

export function ContactSection() {
    return (
        <div id="contact" className="min-h-screen bg-slate-950 relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-600/25 to-pink-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
            </div>

            <div className="relative z-10">
                <div className="container mx-auto px-4 pb-24
                 max-w-7xl">
                    <div>
                        <div className="lg:col-span-8">
                            <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
                                <CardContent className="p-8">
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
