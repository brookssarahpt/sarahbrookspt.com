import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, FileDown, BookOpen, Activity, Wind, Baby, AlertTriangle, Heart } from "lucide-react";

const funFacts = [
  {
    id: "pelvic-basics",
    icon: BookOpen,
    title: "Pelvic Floor Basics",
    facts: [
      "Your pelvic floor is a group of muscles that support your bladder, bowel, and uterus",
      "These muscles help control bladder and bowel function",
      "Signs it may need attention: leaking, urgency, pelvic pain, or heaviness",
      "Both weakness AND tightness can cause problems",
    ],
  },
  {
    id: "postpartum-running",
    icon: Activity,
    title: "Returning to Running Postpartum",
    facts: [
      "Wait at least 12 weeks minimum before returning to running",
      "Signs you're ready: no leaking during daily activities, pain-free, cleared by provider",
      "Start with walking, then progress to walk-run intervals",
      "Listen to your body - slow progression is key!",
    ],
  },
  {
    id: "beyond-kegels",
    icon: Heart,
    title: "Beyond Kegels",
    facts: [
      "Kegels aren't always the answer - some pelvic floors need relaxation, not strengthening",
      "Proper assessment determines the right approach for YOU",
      "Coordination and timing matter as much as strength",
      "A pelvic floor PT can help determine what your body needs",
    ],
  },
  {
    id: "breathing",
    icon: Wind,
    title: "Breathing & Pelvic Floor Connection",
    facts: [
      "Your diaphragm and pelvic floor work together as a team",
      "Inhale = pelvic floor relaxes and lowers; Exhale = pelvic floor lifts",
      "Breath-holding during exercise can increase pelvic pressure",
      "Learning to coordinate breath with movement is essential for core function",
    ],
  },
  {
    id: "pregnancy",
    icon: Baby,
    title: "Pregnancy Exercise Facts",
    facts: [
      "Most exercise is safe during pregnancy with appropriate modifications",
      "Avoid exercises that cause coning or doming of your abdomen",
      "Stay active but always listen to your body's signals",
      "Pelvic floor PT during pregnancy can help prepare for birth and recovery",
    ],
  },
  {
    id: "when-to-seek-help",
    icon: AlertTriangle,
    title: "When to Seek Help",
    facts: [
      "Pain during intimacy or with tampon use",
      "Persistent pelvic, hip, or low back pain",
      "Urgency, frequency, or leaking",
      "You don't have to live with these symptoms!",
    ],
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Learn
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              Resources & Fun Facts
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quick, helpful information to support your pelvic health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Facts Accordion */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {funFacts.map((category) => {
                const IconComponent = category.icon;
                return (
                  <AccordionItem
                    key={category.id}
                    value={category.id}
                    className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-serif text-xl font-semibold text-foreground text-left">
                          {category.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <ul className="space-y-3 pl-14">
                        {category.facts.map((fact, index) => (
                          <li
                            key={index}
                            className="text-muted-foreground leading-relaxed flex items-start gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Downloadable Resources
              </h2>
              <p className="text-muted-foreground text-lg">
                Helpful tools to support your pelvic health journey.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileDown className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Bladder Diary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Track your fluid intake, food, and bathroom habits to identify patterns.
                    Bring this helpful information to your appointment.
                  </p>
                </div>
                <Button asChild variant="hero" size="lg" className="flex-shrink-0">
                  <a href="/bladder-diary.pdf" download>
                    <FileDown className="w-5 h-5 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            I'm here to help. Reach out if you have questions or want to learn more
            about how pelvic floor physical therapy can support you.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
