import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Video, Clock, CheckCircle } from "lucide-react";
const homeCareBenefits = ["Comfort of your own space", "No travel required—especially helpful postpartum", "Easier for those with mobility challenges", "More relaxed, private environment", "Family members can observe and learn"];
const telehealthBenefits = ["Convenience from anywhere", "Great for exercise instruction and form checks", "Perfect for education-focused sessions", "Ideal for follow-ups and progress checks", "Flexible scheduling options"];
export default function Telehealth() {
  return <>
      {/* Hero */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Care Options</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              Home Care & Telehealth
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Flexible care options designed to fit your life. Whether you prefer in-home visits 
              or virtual sessions, I bring quality care to you.
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Home Care */}
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">In-Home Care </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I come to you! In-home physical therapy sessions provide the same quality 
                care you&apos;d receive in a clinic, but in the comfort and privacy of your own home.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">This option is especially beneficial for postpartum patients, those with young children, or anyone who finds traveling to appointments challenging.


Please contact to confirm we serve your location.</p>
              <h3 className="font-medium text-foreground mb-4">Benefits:</h3>
              <ul className="space-y-3 mb-8">
                {homeCareBenefits.map(benefit => <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>)}
              </ul>
            </div>

            {/* Telehealth */}
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Telehealth Sessions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Virtual sessions via secure video call allow us to work together from anywhere. 
                Telehealth is perfect for education, exercise instruction, and ongoing support.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">While some aspects of treatment require hands-on care, many components of pelvic floor rehabilitation can be effectively delivered virtually.

            </p>
              <h3 className="font-medium text-foreground mb-4">Benefits:</h3>
              <ul className="space-y-3 mb-8">
                {telehealthBenefits.map(benefit => <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                What to Expect
              </h2>
              <p className="text-muted-foreground">
                Regardless of which option you choose, you&apos;ll receive personalized, 
                high-quality care tailored to your needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Session Duration</h3>
                    <p className="text-muted-foreground text-sm">Initial evaluations typically last 45-60 minutes. Follow-up sessions are usually 40-45 minutes, depending on your treatment plan.</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-medium text-foreground mb-2">Pricing</h3>
                <p className="text-muted-foreground text-sm">
                  Pricing varies based on the type of session and your individual needs. 
                  Please reach out to discuss rates and payment options. I&apos;m committed 
                  to making quality care accessible.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-medium text-foreground mb-2">Not Sure Which Option Is Right for You?</h3>
                <p className="text-muted-foreground text-sm">
                  Many patients benefit from a combination of both in-home and telehealth 
                  sessions. We can discuss what makes the most sense for your situation 
                  during our initial conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Reach out today to learn more about pricing and schedule your first session. 
            I&apos;m here to answer any questions you may have.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Contact for Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>;
}