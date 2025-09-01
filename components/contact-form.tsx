'use client';

import { sendEmail } from "@/app/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Badge } from "./ui/badge";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm mb-6">
                        📬 Get In Touch
                    </Badge>
                    <div className="text-6xl md:text-7xl font-bold mb-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Contact</span>{" "}
                            <span className="text-white">Me</span>
                        </h2>
                    </div>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you. Let's
                        create something amazing together!
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-white font-medium text-sm">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Your full name"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-white font-medium text-sm">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-white font-medium text-sm">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            required
                            placeholder="What's this about?"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-white font-medium text-sm">Message</label>
                        <textarea
                            name="message"
                            rows={6}
                            required
                            placeholder="Tell me about your project, ideas, or just say hello..."
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        ></textarea>
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                            className="w-4 h-4 text-purple-600 bg-white/5 border-white/10 rounded focus:ring-purple-500"
                        />
                        <label htmlFor="terms" className="text-slate-300 text-sm">
                            Sure to send?
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            const result = await sendEmail(formData);
            if (result.success) {
                toast.success("Message sent successfully!", {
                    description: "Thank you for reaching out. I'll get back to you soon!",
                    duration: 5000,
                });
                // Reset form
                (document.getElementById("contactForm") as HTMLFormElement).reset();
            } else {
                toast.error("Failed to send message", {
                    description: result.message,
                    duration: 5000,
                });
            }
        } catch (error) {
            toast.error("Failed to send message", {
                description: "An unexpected error occurred. Please try again.",
                duration: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="text-center mb-20">
                <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm mb-6">
                    📬 Get In Touch
                </Badge>

                <div className="text-6xl md:text-7xl font-bold mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Contact</span>{" "}
                        <span className="text-white">
                            Me
                        </span>
                    </h2>
                </div>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you. Let's
                    create something amazing together!
                </p>
            </div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    await handleSubmit(formData);
                }}
                id="contactForm"
                className="space-y-6"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-white font-medium text-sm">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-white font-medium text-sm">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        required
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Message</label>
                    <textarea
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-4 h-4 text-purple-600 bg-white/5 border-white/10 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="terms" className="text-slate-300 text-sm">
                        Sure to send?
                    </label>
                </div>

                <div className="flex justify-center">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5 mr-2" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
