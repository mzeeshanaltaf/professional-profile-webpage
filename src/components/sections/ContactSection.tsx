"use client";

import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
interface MathPuzzle {
  question: string;
  answer: number;
}

function generateMathPuzzle(): MathPuzzle {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  if (Math.random() > 0.5) {
    return { question: `What is ${a} + ${b}?`, answer: a + b };
  }
  const [big, small] = a >= b ? [a, b] : [b, a];
  return { question: `What is ${big} - ${small}?`, answer: big - small };
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  captcha: z.string().min(1, "Please solve the math puzzle"),
});

type FormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: MapPin, label: "Location", value: "Available Worldwide", href: undefined },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: undefined },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [puzzle, setPuzzle] = useState<MathPuzzle | null>(null);

  useEffect(() => {
    setPuzzle(generateMathPuzzle());
  }, []);

  const regeneratePuzzle = useCallback(() => {
    setPuzzle(generateMathPuzzle());
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (!puzzle || parseInt(data.captcha, 10) !== puzzle.answer) {
      toast.error("Incorrect answer to the math puzzle. Please try again.");
      regeneratePuzzle();
      return;
    }

    setIsSubmitting(true);
    try {
      const { captcha, ...contactData } = data;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
      regeneratePuzzle();
    } catch {
      toast.error("Something went wrong. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = cn(
    "w-full px-4 py-3 rounded-xl glass text-foreground placeholder:text-foreground-muted/50",
    "focus:outline-none focus:ring-2 focus:ring-accent-primary/40 focus:border-accent-primary/40",
    "transition-all duration-200"
  );

  return (
    <SectionWrapper id="contact" className="bg-background-secondary/50">
      <SectionHeading
        title="Get in Touch"
        subtitle="Ready to transform your workflows with AI? Let's discuss your project."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left — Info */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4">
              {"Let's Build Something"}
              <br />
              <span className="text-gradient">Extraordinary</span>
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              Whether you need an AI-powered SaaS application, a multi-agent
              workflow, or an intelligent automation system — I&apos;m here to help
              bring your vision to life.
            </p>
          </motion.div>

          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-accent-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-foreground-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-foreground hover:text-accent-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-3">
          <GlassCard hover={false} className="p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className={inputClasses}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClasses}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className={inputClasses}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={cn(inputClasses, "resize-none")}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </motion.div>

              {/* CAPTCHA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <label
                  htmlFor="captcha"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  {puzzle?.question ?? "Loading..."}
                </label>
                <input
                  id="captcha"
                  type="text"
                  inputMode="numeric"
                  placeholder="Your answer"
                  className={inputClasses}
                  {...register("captcha")}
                />
                {errors.captcha && (
                  <p className="mt-1 text-xs text-red-400">{errors.captcha.message}</p>
                )}
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
              >
                <GlowButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </GlowButton>
              </motion.div>
            </form>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
