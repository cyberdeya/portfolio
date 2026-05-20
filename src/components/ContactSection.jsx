import { Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Contact <span className="text-primary">Me</span>
                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind or want to collaborate?
                        I’m always open to discussing new opportunities and ideas.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left - Info (fit + centered visually) */}
                    <div className="flex justify-center">
                        <div className="gradient-border p-[1px] rounded-3xl w-full">
                            <div className="bg-background rounded-3xl p-8 space-y-8">

                                <div className="flex items-center gap-5">
                                    <div className="p-4 rounded-2xl bg-primary/10">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Email</h3>
                                    <p className="text-muted-foreground">
                                        cyberdeya@protonmail.com
                                    </p>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="p-4 rounded-2xl bg-primary/10">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <p className="text-muted-foreground">
                                        +20 101 855 1071
                                    </p>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="p-4 rounded-2xl bg-primary/10">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Location</h3>
                                    <p className="text-muted-foreground">
                                        Giza, Egypt
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="gradient-border p-[1px] rounded-3xl">
                        <div className="bg-background rounded-3xl p-10">
                            <h3 className="text-2xl font-semibold mb-8">
                                Send a Message
                            </h3>

                            <form className="space-y-5" action="https://formspree.io/f/mykvewra" method="POST">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full rounded-2xl border border-primary/20 bg-background px-4 py-3 outline-none focus:border-primary"
                                    />

                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full rounded-2xl border border-primary/20 bg-background px-4 py-3 outline-none focus:border-primary"
                                    />
                                </div>

                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full rounded-2xl border border-primary/20 bg-background px-4 py-3 outline-none focus:border-primary"
                                />

                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Message"
                                    className="w-full rounded-2xl border border-primary/20 bg-background px-4 py-3 outline-none focus:border-primary resize-none"
                                />

                                <button
                                    type="submit"
                                    className="cosmic-button w-full flex items-center justify-center gap-2 py-3"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};