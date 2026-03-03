"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    };

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <Container className="relative z-10">
                    <AnimatedSection>
                        <SectionHeading
                            tag="Contact Us"
                            title="Get in touch"
                            subtitle="Have a question or want to learn more? We'd love to hear from you."
                        />
                    </AnimatedSection>
                </Container>
            </section>

            {/* Contact Section */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <AnimatedSection>
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Let&apos;s start a conversation
                                </h3>
                                <p className="text-light-blue mb-8 leading-relaxed">
                                    Whether you&apos;re interested in a demo, have a technical question,
                                    or want to explore partnership opportunities — our team is here
                                    to help.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-sky-blue/10 border border-sky-blue/20 flex items-center justify-center flex-shrink-0">
                                            <Mail size={18} className="text-sky-blue" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-sm">
                                                Email
                                            </div>
                                            <div className="text-light-blue text-sm">
                                                hello@adray.ai
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-sky-blue/10 border border-sky-blue/20 flex items-center justify-center flex-shrink-0">
                                            <Phone size={18} className="text-sky-blue" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-sm">
                                                Phone
                                            </div>
                                            <div className="text-light-blue text-sm">
                                                +1 (555) 123-4567
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-sky-blue/10 border border-sky-blue/20 flex items-center justify-center flex-shrink-0">
                                            <MapPin size={18} className="text-sky-blue" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-sm">
                                                Office
                                            </div>
                                            <div className="text-light-blue text-sm">
                                                100 Innovation Drive
                                                <br />
                                                San Francisco, CA 94105
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <AnimatedSection delay={0.2}>
                                <form
                                    onSubmit={handleSubmit}
                                    className="card rounded-2xl p-8"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm text-white-90 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-blue-90 border border-blue-10 text-white text-sm placeholder:text-light-blue/50 focus:border-sky-blue focus:outline-none transition-colors"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-white-90 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-blue-90 border border-blue-10 text-white text-sm placeholder:text-light-blue/50 focus:border-sky-blue focus:outline-none transition-colors"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm text-white-90 mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, company: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-blue-90 border border-blue-10 text-white text-sm placeholder:text-light-blue/50 focus:border-sky-blue focus:outline-none transition-colors"
                                                placeholder="Company name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-white-90 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, subject: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-blue-90 border border-blue-10 text-white text-sm placeholder:text-light-blue/50 focus:border-sky-blue focus:outline-none transition-colors"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm text-white-90 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-blue-90 border border-blue-10 text-white text-sm placeholder:text-light-blue/50 focus:border-sky-blue focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us more about your needs..."
                                        />
                                    </div>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        type="submit"
                                        className="w-full"
                                    >
                                        <Send size={16} className="mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
