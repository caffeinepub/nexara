import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock,
  Globe2,
  HelpCircle,
  Layers,
  Mail,
  Menu,
  Phone,
  Play,
  Smartphone,
  TrendingDown,
  UserCheck,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitDemoRequest } from "./hooks/useQueries";

function setHoverColor(e: React.MouseEvent, color: string) {
  (e.currentTarget as HTMLElement).style.color = color;
}

// --- AI Hero Visualization ---
function AIVisualization() {
  return (
    <div className="relative flex items-center justify-center w-full h-[420px] md:h-[500px]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.56 0.22 258 / 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-72 h-72 rounded-full border pulse-ring"
          style={{ borderColor: "oklch(0.56 0.22 258 / 0.25)" }}
        />
        <div
          className="absolute w-56 h-56 rounded-full border pulse-ring-slow"
          style={{
            borderColor: "oklch(0.78 0.15 210 / 0.35)",
            animationDelay: "0.8s",
          }}
        />
        <div
          className="absolute w-40 h-40 rounded-full border"
          style={{
            borderColor: "oklch(0.56 0.22 258 / 0.5)",
            animation: "pulse-ring 2s ease-in-out infinite",
            animationDelay: "0.4s",
          }}
        />
      </div>

      {/* Orbiting dot */}
      <div
        className="absolute w-72 h-72 spin-slow"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div
          className="absolute -top-1.5 left-1/2 -ml-1.5 w-3 h-3 rounded-full"
          style={{ background: "oklch(0.78 0.15 210)" }}
        />
      </div>
      <div
        className="absolute w-56 h-56 spin-slow-reverse"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div
          className="absolute -top-1.5 left-1/2 -ml-1 w-2.5 h-2.5 rounded-full"
          style={{ background: "oklch(0.65 0.2 285)" }}
        />
      </div>

      {/* Center orb */}
      <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center glow-blue float-anim">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.56 0.22 258) 0%, oklch(0.4 0.18 258) 100%)",
          }}
        />
        <Bot className="relative z-10 w-10 h-10 text-white" />
      </div>

      {/* Floating chat bubbles */}
      <motion.div
        className="absolute top-8 right-8 md:right-16 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div
          className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm font-medium max-w-[190px] float-anim"
          style={{
            background: "oklch(0.14 0.035 245)",
            border: "1px solid oklch(0.27 0.05 242)",
            color: "oklch(0.94 0.018 240)",
            boxShadow: "0 4px 20px oklch(0.56 0.22 258 / 0.2)",
          }}
        >
          <span style={{ color: "oklch(0.78 0.15 210)" }}>Hi! </span>How can I
          help you today?
        </div>
      </motion.div>

      <motion.div
        className="absolute top-24 right-4 md:right-10 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div
          className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm font-medium max-w-[200px] float-anim-alt"
          style={{
            background: "oklch(0.56 0.22 258 / 0.2)",
            border: "1px solid oklch(0.56 0.22 258 / 0.5)",
            color: "oklch(0.94 0.018 240)",
            boxShadow: "0 4px 20px oklch(0.56 0.22 258 / 0.15)",
          }}
        >
          Issue resolved! ✓
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-4 md:left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <div
          className="rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm font-medium max-w-[200px] float-anim"
          style={{
            background: "oklch(0.14 0.035 245)",
            border: "1px solid oklch(0.27 0.05 242)",
            color: "oklch(0.94 0.018 240)",
            animationDelay: "1s",
            boxShadow: "0 4px 20px oklch(0.78 0.15 210 / 0.15)",
          }}
        >
          <span style={{ color: "oklch(0.78 0.15 210)" }}>
            ⚡ Response time:
          </span>{" "}
          0.3s
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div
          className="rounded-2xl rounded-br-sm px-4 py-2.5 text-sm font-medium float-anim-alt"
          style={{
            background: "oklch(0.14 0.035 245)",
            border: "1px solid oklch(0.78 0.15 210 / 0.4)",
            color: "oklch(0.94 0.018 240)",
            animationDelay: "2s",
            boxShadow: "0 4px 20px oklch(0.78 0.15 210 / 0.15)",
          }}
        >
          <span style={{ color: "oklch(0.78 0.15 210)" }}>🌐</span> 47 languages
          supported
        </div>
      </motion.div>
    </div>
  );
}

// --- Benefit Card ---
type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl p-6 card-hover cursor-default"
      style={{
        background: "oklch(0.14 0.035 245)",
        border: "1px solid oklch(0.27 0.05 242)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: "oklch(0.56 0.22 258 / 0.15)",
          border: "1px solid oklch(0.56 0.22 258 / 0.3)",
        }}
      >
        {icon}
      </div>
      <h3
        className="text-base font-semibold mb-2"
        style={{ color: "oklch(0.94 0.018 240)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "oklch(0.72 0.04 240)" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

// --- Service Card ---
type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor?: string;
};

function ServiceCard({
  icon,
  title,
  description,
  accentColor = "oklch(0.56 0.22 258)",
}: ServiceCardProps) {
  const bg = accentColor.endsWith(")")
    ? `${accentColor.slice(0, -1)} / 0.15)`
    : accentColor;
  const border = accentColor.endsWith(")")
    ? `${accentColor.slice(0, -1)} / 0.3)`
    : accentColor;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl p-6 card-hover cursor-default"
      style={{
        background: "oklch(0.14 0.035 245)",
        border: "1px solid oklch(0.27 0.05 242)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        {icon}
      </div>
      <h3
        className="text-base font-semibold mb-2"
        style={{ color: "oklch(0.94 0.018 240)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "oklch(0.72 0.04 240)" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

// --- Contact Form Section ---
function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");
  const { mutateAsync, isPending } = useSubmitDemoRequest();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({ name, email, businessName, message });
      toast.success("Demo request submitted! We'll be in touch shortly.");
      setName("");
      setEmail("");
      setBusinessName("");
      setMessage("");
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  const inputStyle = {
    background: "oklch(0.12 0.03 248)",
    border: "1px solid oklch(0.27 0.05 242)",
    color: "oklch(0.94 0.018 240)",
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.085 0.025 250) 0%, oklch(0.1 0.035 250) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Ready to Transform Your Support?
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.72 0.04 240)" }}
          >
            Get a personalized demo and see how Nexara can revolutionize your
            customer support operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 space-y-5"
              style={{
                background: "oklch(0.14 0.035 245)",
                border: "1px solid oklch(0.27 0.05 242)",
              }}
              data-ocid="contact.panel"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullname"
                    style={{ color: "oklch(0.72 0.04 240)" }}
                  >
                    Full Name
                  </Label>
                  <Input
                    id="fullname"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/50"
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="bizemail"
                    style={{ color: "oklch(0.72 0.04 240)" }}
                  >
                    Business Email
                  </Label>
                  <Input
                    id="bizemail"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/50"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="bizname"
                  style={{ color: "oklch(0.72 0.04 240)" }}
                >
                  Business Name
                </Label>
                <Input
                  id="bizname"
                  placeholder="Your Company Inc."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                  style={inputStyle}
                  className="placeholder:text-muted-foreground/50"
                  data-ocid="contact.input"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="contactmsg"
                  style={{ color: "oklch(0.72 0.04 240)" }}
                >
                  Message
                </Label>
                <Textarea
                  id="contactmsg"
                  placeholder="Tell us about your business and support needs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  style={inputStyle}
                  className="placeholder:text-muted-foreground/50 resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className="w-full rounded-full font-semibold text-base py-6"
                style={{ background: "oklch(0.56 0.22 258)", color: "white" }}
                data-ocid="contact.submit_button"
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Request Free Demo
                    <ChevronRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col justify-center gap-8"
          >
            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "oklch(0.94 0.018 240)" }}
              >
                Contact Us Directly
              </h3>
              <p className="text-sm" style={{ color: "oklch(0.72 0.04 240)" }}>
                Our team is available 24×7 to answer your questions and set up
                your account.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="tel:+919309030539"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.56 0.22 258 / 0.15)",
                    border: "1px solid oklch(0.56 0.22 258 / 0.3)",
                  }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "oklch(0.65 0.22 258)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs mb-0.5"
                    style={{ color: "oklch(0.72 0.04 240)" }}
                  >
                    Phone
                  </p>
                  <p
                    className="font-semibold group-hover:underline"
                    style={{ color: "oklch(0.94 0.018 240)" }}
                  >
                    +91 9309030539
                  </p>
                </div>
              </a>

              <a
                href="mailto:nexera85@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.78 0.15 210 / 0.15)",
                    border: "1px solid oklch(0.78 0.15 210 / 0.3)",
                  }}
                >
                  <Mail
                    className="w-5 h-5"
                    style={{ color: "oklch(0.78 0.15 210)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs mb-0.5"
                    style={{ color: "oklch(0.72 0.04 240)" }}
                  >
                    Email
                  </p>
                  <p
                    className="font-semibold group-hover:underline"
                    style={{ color: "oklch(0.94 0.018 240)" }}
                  >
                    nexera85@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background: "oklch(0.56 0.22 258 / 0.08)",
                border: "1px solid oklch(0.56 0.22 258 / 0.25)",
              }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "oklch(0.78 0.15 210)" }}
              >
                ⚡ Quick Response
              </p>
              <p className="text-sm" style={{ color: "oklch(0.72 0.04 240)" }}>
                We typically respond within 2 hours during business hours and
                within 24 hours on weekends.
              </p>
            </div>

            <Button
              type="button"
              onClick={() => scrollTo("pricing")}
              variant="outline"
              className="rounded-full font-semibold"
              style={{
                border: "1px solid oklch(0.27 0.05 242)",
                color: "oklch(0.94 0.018 240)",
                background: "transparent",
              }}
            >
              View Pricing Plans
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Main App ---
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Benefits", id: "benefits" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  const currentYear = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <div className="min-h-screen bg-page-gradient">
      <Toaster position="top-right" />

      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "oklch(0.085 0.025 250 / 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid oklch(0.27 0.05 242 / 0.5)"
            : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.56 0.22 258)" }}
            >
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-lg font-bold font-display"
              style={{ color: "oklch(0.94 0.018 240)" }}
            >
              Nexara
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium transition-colors"
                style={{ color: "oklch(0.72 0.04 240)" }}
                onMouseEnter={(e) => setHoverColor(e, "oklch(0.94 0.018 240)")}
                onMouseLeave={(e) => setHoverColor(e, "oklch(0.72 0.04 240)")}
                data-ocid={`nav.${link.id}.link`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              type="button"
              onClick={() => scrollTo("contact")}
              className="rounded-full px-5 py-2 font-semibold text-sm"
              style={{ background: "oklch(0.56 0.22 258)", color: "white" }}
              data-ocid="nav.demo.primary_button"
            >
              Get Free Demo
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: "oklch(0.94 0.018 240)" }}
            data-ocid="nav.menu.toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden px-6 pb-5 pt-2 space-y-3"
              style={{
                background: "oklch(0.1 0.03 248 / 0.95)",
                borderTop: "1px solid oklch(0.27 0.05 242 / 0.5)",
              }}
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left py-2 text-sm font-medium"
                  style={{ color: "oklch(0.72 0.04 240)" }}
                  data-ocid={`nav.${link.id}.link`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full rounded-full font-semibold text-sm"
                style={{ background: "oklch(0.56 0.22 258)", color: "white" }}
                data-ocid="nav.demo.primary_button"
              >
                Get Free Demo
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <main>
        <section
          id="hero"
          className="pt-28 pb-20 md:pt-32 md:pb-24 px-6"
          style={{
            background:
              "radial-gradient(ellipse at top, oklch(0.18 0.07 260 / 0.4) 0%, transparent 60%)",
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
                style={{
                  background: "oklch(0.56 0.22 258 / 0.12)",
                  border: "1px solid oklch(0.56 0.22 258 / 0.3)",
                  color: "oklch(0.78 0.15 210)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "oklch(0.78 0.15 210)" }}
                />
                AI-Powered Support Platform
              </div>

              <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-5">
                <span className="gradient-text">AI-Powered</span>
                <br />
                <span style={{ color: "oklch(0.94 0.018 240)" }}>
                  Customer Support,
                </span>
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.78 0.15 210), oklch(0.65 0.22 258))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  24×7
                </span>
              </h1>

              <p
                className="text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: "oklch(0.72 0.04 240)" }}
              >
                Replace manual support with intelligent AI agents that
                autonomously handle customer queries, capture leads, and resolve
                issues — at any scale, in any language.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="rounded-full px-7 py-6 font-semibold text-base"
                  style={{
                    background: "oklch(0.56 0.22 258)",
                    color: "white",
                    boxShadow: "0 0 24px oklch(0.56 0.22 258 / 0.4)",
                  }}
                  data-ocid="hero.demo.primary_button"
                >
                  Get Free Demo
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => scrollTo("services")}
                  className="rounded-full px-7 py-6 font-semibold text-base"
                  style={{
                    background: "transparent",
                    border: "1px solid oklch(0.27 0.05 242)",
                    color: "oklch(0.94 0.018 240)",
                  }}
                  data-ocid="hero.watch.secondary_button"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "<0.5s", label: "Response Time" },
                  { value: "47+", label: "Languages" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-2xl font-bold font-display"
                      style={{ color: "oklch(0.78 0.15 210)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.72 0.04 240)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right – AI Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AIVisualization />
            </motion.div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.78 0.15 210)" }}
              >
                Why Nexara
              </p>
              <h2
                className="font-display text-3xl md:text-4xl font-bold"
                style={{ color: "oklch(0.94 0.018 240)" }}
              >
                Why Choose Nexara?
              </h2>
              <p
                className="mt-3 text-base max-w-xl mx-auto"
                style={{ color: "oklch(0.72 0.04 240)" }}
              >
                Everything you need to deliver world-class customer support
                without the overhead.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: (
                    <Clock
                      className="w-6 h-6"
                      style={{ color: "oklch(0.65 0.22 258)" }}
                    />
                  ),
                  title: "24×7 Instant Responses",
                  description:
                    "Your AI agents never sleep. Provide instant, accurate responses to customers any time, day or night.",
                },
                {
                  icon: (
                    <TrendingDown
                      className="w-6 h-6"
                      style={{ color: "oklch(0.65 0.22 258)" }}
                    />
                  ),
                  title: "Reduce Support Costs",
                  description:
                    "Cut support expenses by up to 80% by automating repetitive queries while maintaining high satisfaction.",
                },
                {
                  icon: (
                    <Globe2
                      className="w-6 h-6"
                      style={{ color: "oklch(0.65 0.22 258)" }}
                    />
                  ),
                  title: "Multi-Language Support",
                  description:
                    "Communicate fluently with customers in 47+ languages, breaking down barriers for global businesses.",
                },
                {
                  icon: (
                    <Layers
                      className="w-6 h-6"
                      style={{ color: "oklch(0.65 0.22 258)" }}
                    />
                  ),
                  title: "Easy Setup & Scalable",
                  description:
                    "Get started in minutes, not months. Scale effortlessly from 100 to 1 million conversations.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <BenefitCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="py-24 px-6"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.085 0.025 250) 0%, oklch(0.1 0.04 248) 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.78 0.15 210)" }}
              >
                Our Services
              </p>
              <h2
                className="font-display text-3xl md:text-4xl font-bold"
                style={{ color: "oklch(0.94 0.018 240)" }}
              >
                Intelligent Services for Every Business
              </h2>
              <p
                className="mt-3 text-base max-w-xl mx-auto"
                style={{ color: "oklch(0.72 0.04 240)" }}
              >
                A complete suite of AI-powered tools designed to handle every
                aspect of customer interactions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: (
                    <Bot
                      className="w-6 h-6"
                      style={{ color: "oklch(0.65 0.22 258)" }}
                    />
                  ),
                  title: "AI Customer Support Agent",
                  description:
                    "Intelligent agents that understand context and resolve customer queries autonomously with human-like precision.",
                  accentColor: "oklch(0.56 0.22 258)",
                },
                {
                  icon: (
                    <UserCheck
                      className="w-6 h-6"
                      style={{ color: "oklch(0.78 0.15 210)" }}
                    />
                  ),
                  title: "Lead Capture Assistant",
                  description:
                    "Automatically qualify and capture leads 24×7, turning every visitor conversation into a business opportunity.",
                  accentColor: "oklch(0.78 0.15 210)",
                },
                {
                  icon: (
                    <HelpCircle
                      className="w-6 h-6"
                      style={{ color: "oklch(0.65 0.2 285)" }}
                    />
                  ),
                  title: "FAQ Automation",
                  description:
                    "Build a dynamic knowledge base that answers frequently asked questions instantly, freeing your team for complex tasks.",
                  accentColor: "oklch(0.65 0.2 285)",
                },
                {
                  icon: (
                    <Smartphone
                      className="w-6 h-6"
                      style={{ color: "oklch(0.7 0.18 195)" }}
                    />
                  ),
                  title: "Multi-Platform Support",
                  description:
                    "Deploy seamlessly across your website, WhatsApp, Telegram, and other messaging platforms from one dashboard.",
                  accentColor: "oklch(0.7 0.18 195)",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <ServiceCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    accentColor={item.accentColor}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.78 0.15 210)" }}
              >
                Pricing
              </p>
              <h2
                className="font-display text-3xl md:text-4xl font-bold"
                style={{ color: "oklch(0.94 0.018 240)" }}
              >
                Simple, Transparent Pricing
              </h2>
              <p
                className="mt-3 text-base max-w-xl mx-auto"
                style={{ color: "oklch(0.72 0.04 240)" }}
              >
                Start free, scale as you grow. No hidden fees, no surprises.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Starter */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8"
                style={{
                  background: "oklch(0.14 0.035 245)",
                  border: "1px solid oklch(0.27 0.05 242)",
                }}
                data-ocid="pricing.starter.card"
              >
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "oklch(0.94 0.018 240)" }}
                >
                  Starter
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "oklch(0.72 0.04 240)" }}
                >
                  Perfect for small businesses
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span
                    className="text-5xl font-bold font-display"
                    style={{ color: "oklch(0.94 0.018 240)" }}
                  >
                    $19
                  </span>
                  <span
                    className="text-base mb-2"
                    style={{ color: "oklch(0.72 0.04 240)" }}
                  >
                    /month
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Basic AI support agent",
                    "Up to 500 conversations/mo",
                    "Standard response time",
                    "Email support",
                    "Website integration",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "oklch(0.72 0.04 240)" }}
                    >
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "oklch(0.65 0.22 258)" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  variant="outline"
                  className="w-full rounded-full font-semibold"
                  style={{
                    border: "1px solid oklch(0.27 0.05 242)",
                    color: "oklch(0.94 0.018 240)",
                    background: "transparent",
                  }}
                  data-ocid="pricing.starter.primary_button"
                >
                  Start Free Trial
                </Button>
              </motion.div>

              {/* Premium */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl p-8 relative"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.16 0.06 260) 0%, oklch(0.14 0.04 265) 100%)",
                  border: "1px solid oklch(0.56 0.22 258 / 0.5)",
                  boxShadow:
                    "0 0 40px oklch(0.56 0.22 258 / 0.2), 0 0 80px oklch(0.56 0.22 258 / 0.08)",
                }}
                data-ocid="pricing.premium.card"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge
                    className="rounded-full px-4 py-1 text-xs font-bold"
                    style={{
                      background: "oklch(0.56 0.22 258)",
                      color: "white",
                    }}
                  >
                    Most Popular
                  </Badge>
                </div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "oklch(0.94 0.018 240)" }}
                >
                  Premium
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "oklch(0.72 0.04 240)" }}
                >
                  For growing businesses
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-bold font-display gradient-text">
                    $49
                  </span>
                  <span
                    className="text-base mb-2"
                    style={{ color: "oklch(0.72 0.04 240)" }}
                  >
                    /month
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited conversations",
                    "Multi-language support (47+)",
                    "Lead capture AI",
                    "Priority support",
                    "Advanced analytics",
                    "Multi-platform deployment",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "oklch(0.72 0.04 240)" }}
                    >
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "oklch(0.78 0.15 210)" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="w-full rounded-full font-semibold"
                  style={{
                    background: "oklch(0.56 0.22 258)",
                    color: "white",
                    boxShadow: "0 0 20px oklch(0.56 0.22 258 / 0.4)",
                  }}
                  data-ocid="pricing.premium.primary_button"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT / DEMO FORM */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <footer
        className="py-12 px-6"
        style={{
          background: "oklch(0.07 0.02 250)",
          borderTop: "1px solid oklch(0.27 0.05 242 / 0.5)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "oklch(0.56 0.22 258)" }}
                >
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span
                  className="text-lg font-bold font-display"
                  style={{ color: "oklch(0.94 0.018 240)" }}
                >
                  Nexara
                </span>
              </div>
              <p
                className="text-sm text-center md:text-left"
                style={{ color: "oklch(0.72 0.04 240)" }}
              >
                Intelligent AI Employees for Modern Businesses
              </p>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-6">
              {[
                { label: "Services", id: "services" },
                { label: "Pricing", id: "pricing" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm transition-colors"
                  style={{ color: "oklch(0.72 0.04 240)" }}
                  onMouseEnter={(e) =>
                    setHoverColor(e, "oklch(0.94 0.018 240)")
                  }
                  onMouseLeave={(e) => setHoverColor(e, "oklch(0.72 0.04 240)")}
                  data-ocid={`footer.${link.id}.link`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div
            className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
            style={{
              borderTop: "1px solid oklch(0.27 0.05 242 / 0.4)",
              color: "oklch(0.55 0.03 240)",
            }}
          >
            <p>© {currentYear} Nexara. All rights reserved.</p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={utmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "oklch(0.65 0.22 258)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
