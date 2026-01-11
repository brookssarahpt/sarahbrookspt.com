import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is pelvic floor physical therapy?",
    answer: "Pelvic floor physical therapy is a specialized form of treatment that addresses dysfunction in the pelvic floor muscles. These muscles support your bladder, uterus, and rectum, and when they're not functioning properly, it can lead to issues like incontinence, pelvic pain, and sexual dysfunction. Treatment includes manual therapy, exercises, and education to restore proper function."
  },
  {
    question: "What should I expect at my first appointment?",
    answer: "Your first visit will include a thorough evaluation where we discuss your medical history, symptoms, and goals. We'll perform a physical assessment that may include an external and/or internal pelvic floor examination (with your consent). From there, we'll develop a personalized treatment plan together. Wear comfortable clothing and be prepared to share openly about your symptoms."
  },
  {
    question: "How many sessions will I need?",
    answer: "This varies significantly based on your condition, its severity, and your goals. Some people see significant improvement in a few sessions, while others may benefit from longer-term care. We'll regularly reassess your progress and adjust your treatment plan accordingly."
  },
  {
    question: "Do you accept insurance?",
    answer: "I currently operate as an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Please reach out to discuss pricing and payment options."
  },
  {
    question: "What's the difference between home care and telehealth?",
    answer: "Home care visits involve me coming to your home for in-person treatment—ideal for postpartum patients or those who prefer the comfort of their own space. Telehealth visits are conducted via video call and are great for exercise instruction, education, and follow-ups. Both are effective depending on your needs and situation."
  },
  {
    question: "I'm pregnant—can I still receive treatment?",
    answer: "Absolutely! Prenatal physical therapy can help address common pregnancy-related discomforts like back pain, pelvic girdle pain, and prepare your body for delivery. It's also a great time to learn about pelvic floor health and what to expect postpartum."
  },
  {
    question: "How soon after giving birth can I start PT?",
    answer: "You can begin gentle exercises and receive guidance shortly after delivery, even within the first few weeks. A comprehensive pelvic floor evaluation is typically recommended around 6 weeks postpartum, or whenever your provider clears you. However, don't hesitate to reach out sooner if you're experiencing concerning symptoms."
  },
  {
    question: "Is it normal to leak during exercise?",
    answer: "Common? Yes. Normal? No. Leaking during exercise—whether it's sneezing, running, or lifting—is a sign of pelvic floor dysfunction that can be addressed with proper treatment. You shouldn't have to wear pads to the gym or avoid activities you love."
  },
];

export default function FAQs() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Support</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about pelvic floor therapy, what to expect, 
              and how I can help you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-medium py-5 hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            I&apos;m here to help. Reach out and we can discuss your specific situation 
            and whether physical therapy is right for you.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Contact Me
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
