import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, XCircle, CheckCircle } from "lucide-react";

const misconceptions = [
  {
    myth: "Leaking urine is a normal part of aging or having kids",
    truth: "While urinary incontinence is common, it's not something you have to accept as normal. Pelvic floor physical therapy can significantly reduce or eliminate leakage in most people, regardless of age or how many children they've had."
  },
  {
    myth: "Pelvic floor exercises just mean doing Kegels",
    truth: "Kegels are just one small piece of the puzzle. Many people do Kegels incorrectly, and some people actually need to learn to RELAX their pelvic floor, not strengthen it. A proper assessment is essential to know what your pelvic floor actually needs."
  },
  {
    myth: "Pain during sex is normal and you should just deal with it",
    truth: "Painful intercourse (dyspareunia) is never something you should 'just deal with.' It often indicates pelvic floor muscle tension, hormonal changes, or other treatable conditions. Physical therapy can help address the underlying cause."
  },
  {
    myth: "If I have a C-section, my pelvic floor will be fine",
    truth: "Pregnancy itself—not just vaginal delivery—affects the pelvic floor. The weight of carrying a baby for 9 months, hormonal changes, and postural shifts all impact these muscles. Everyone who has been pregnant can benefit from pelvic floor assessment."
  },
  {
    myth: "I should wait until I'm 'done having kids' to address pelvic floor issues",
    truth: "There's no reason to wait! Addressing symptoms now can improve your quality of life today and may actually make future pregnancies and recoveries easier. You don't have to suffer for years."
  },
  {
    myth: "Pelvic floor issues are 'just part of being a mom'",
    truth: "This dismissive attitude keeps too many people from seeking help. Yes, pregnancy and delivery affect the pelvic floor, but dysfunction is treatable—not inevitable. You deserve to feel strong and comfortable in your body."
  },
  {
    myth: "I'm too young/old for pelvic floor therapy",
    truth: "Pelvic floor dysfunction can occur at any age, from teenagers to older adults. It's never too early or too late to address these issues and improve your quality of life."
  },
  {
    myth: "A strong pelvic floor means a tight pelvic floor",
    truth: "A healthy pelvic floor needs to be able to both contract AND relax. Many people with pelvic floor dysfunction actually have muscles that are too tight (hypertonic), causing pain and difficulty with bladder/bowel function."
  },
  {
    myth: "If my doctor hasn't mentioned it, I must not need pelvic floor PT",
    truth: "Unfortunately, pelvic floor health is often overlooked in traditional healthcare. Many providers don't ask about or screen for these issues. If you're experiencing symptoms, advocating for yourself and seeking specialized care is important."
  },
];

export default function Misconceptions() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Education</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              Common Misconceptions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let&apos;s separate fact from fiction when it comes to pelvic floor health. 
              Understanding the truth is the first step toward healing.
            </p>
          </div>
        </div>
      </section>

      {/* Misconceptions List */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {misconceptions.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div className="p-6 bg-destructive/5 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-destructive">Myth</span>
                      <p className="font-serif text-lg font-semibold text-foreground mt-1">
                        &quot;{item.myth}&quot;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">Truth</span>
                      <p className="text-muted-foreground leading-relaxed mt-1">
                        {item.truth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Learn the Truth About Your Body?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            If any of these myths resonated with you, you&apos;re not alone. Let&apos;s work together 
            to address your symptoms and help you feel like yourself again.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
