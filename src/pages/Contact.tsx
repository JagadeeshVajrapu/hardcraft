import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock, ExternalLink } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      console.log("Contact form:", { name, email, subject, message });
      await new Promise((r) => setTimeout(r, 800));
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSubmitStatus("success");
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google Maps - UCSF Innovation Ventures location
  const officeAddress = "UCSF Innovation Ventures, 123 Innovation Drive, San Francisco, CA 94107, United States";
  // Using coordinates from the provided Google Maps URL: 37.765958, -122.3885161
  // Place: UCSF Innovation Ventures
  const mapsEmbedUrl = `https://www.google.com/maps?q=UCSF+Innovation+Ventures,+123+Innovation+Drive,+San+Francisco,+CA+94107&output=embed`;
  const mapsDirectionsUrl = `https://www.google.com/maps/place/UCSF+Innovation+Ventures/@37.765958,-122.3885161,15z/data=!4m6!3m5!1s0x808f7f9b01bcdacb:0x16d812b95490d4d9!8m2!3d37.765958!4d-122.3885161!16s%2Fg%2F11fn5sdc5s?entry=ttu`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="container mx-auto sm:px-12 px-2 pt-28 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold">Contact us</h1>
            <p className="mt-2 text-muted-foreground">
              Have questions, need support, or interested in partnerships? We'd love to hear from you. Our team typically responds within 1–2 business days.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>We usually respond within 24–48 hours.</strong>
            </p>
            <p className="mt-4 text-sm text-muted-foreground/80 italic">
              Trusted by teams building modern hardware products.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Address / Company info */}
            <div className="rounded-xl border border-border/60 bg-card/40 p-6 space-y-4">
              <h2 className="text-lg font-semibold mb-4">Our Office</h2>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="font-medium">OpenPlan, Inc.</p>
                  <p className="text-sm text-muted-foreground">
                    UCSF Innovation Ventures
                    <br />
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94107
                    <br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <a
                  className="text-sm hover:underline text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  href="mailto:hello@openplan.io"
                >
                  hello@openplan.io
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <a 
                  className="text-sm hover:underline text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  href="tel:+14155550123"
                >
                  +1 (415) 555-0123
                </a>
              </div>
              
              <div className="flex items-start gap-3 pt-2">
                <Clock className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Business Hours:</p>
                  <p className="text-sm text-muted-foreground">
                    Mon–Fri, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="pt-4 space-y-2">
                <div className="w-full h-48 rounded-lg overflow-hidden border border-border/40">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapsEmbedUrl}
                    title="OpenPlan Office Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                >
                  Get Directions
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-2 rounded-xl border border-border/60 bg-card/40 p-6 overflow-visible"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    placeholder="Jane Cooper"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                    required
                    className="focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    required
                    className="focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="md:col-span-2 space-y-2 relative z-20 mb-6">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    value={subject}
                    onValueChange={setSubject}
                    disabled={isSubmitting}
                    required
                  >
                    <SelectTrigger 
                      id="subject"
                      className="focus:ring-2 focus:ring-ring"
                    >
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="z-[100]">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2 space-y-2 mt-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us a bit more about what you need…"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                    required
                    className="focus:ring-2 focus:ring-ring resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Please include as much detail as possible so we can help you faster.
                  </p>
                </div>
              </div>
              
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-3 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  Thanks for reaching out! Our team will get back to you shortly.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  Something went wrong. Please try again or contact us directly at hello@openplan.io
                </div>
              )}
              
              <div className="mt-4 flex flex-col gap-3">
                <Button
                  type="submit"
                  className="bg-gradient-primary hover:shadow-glow focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send message →"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your information is never shared.
                </p>
              </div>
            </form>
          </div>
          
          {/* Quick Help Links */}
          <div className="mt-8 max-w-3xl">
            <p className="text-sm text-muted-foreground mb-3">Looking for quick answers?</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/docs"
                className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-2 py-1"
              >
                Docs
              </a>
              <a
                href="/status"
                className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-2 py-1"
              >
                Status
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
