import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Heart, Mountain, Award } from "lucide-react";
import sarahPortrait from "@/assets/sarah-portrait.jpg";
const credentials = [{
  icon: GraduationCap,
  title: "BS Psychology",
  institution: "Binghamton University"
}, {
  icon: Award,
  title: "DPT",
  institution: "Hunter College"
}, {
  icon: Heart,
  title: "Pelvic Floor Specialist",
  institution: "Certified"
}, {
  icon: Mountain,
  title: "PCES",
  institution: "Pregnancy & Postpartum Corrective Exercise Specialist"
}];
export default function About() {
  return <>
      {/* Hero */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Me</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              Meet Sarah Brooks
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A physical therapist passionate about helping you live without limitations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
                <img alt="Sarah Brooks, Physical Therapist" className="w-full h-full object-cover" src="/lovable-uploads/b2257c1e-1d27-45f5-9307-94ed4cde57fe.jpg" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I graduated from Binghamton University with a degree in Psychology, where I developed 
                    a deep understanding of the mind-body connection. This foundation led me to pursue 
                    my Doctor of Physical Therapy at Hunter College, where I discovered my passion for 
                    pelvic floor rehabilitation.
                  </p>
                  <p>
                    Throughout my career, I&apos;ve worked with complex cases involving urinary incontinence, 
                    pelvic pain, abdominal pain, and pregnancy and postpartum rehabilitation. What I&apos;ve 
                    consistently observed is how many women live with issues they believe are &quot;just normal&quot; 
                    or something they have to accept.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Why This Work Matters</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My passion for pelvic floor physical therapy arose from witnessing how often these 
                    issues go unaddressed. Leaking during exercise isn&apos;t normal. Persistent pelvic pain 
                    isn&apos;t something you should just live with. Feeling disconnected from your body after 
                    pregnancy isn&apos;t inevitable.
                  </p>
                  <p>
                    I want to help people get back to what they love—without pain, without fear, without 
                    limitations. As a Pregnancy and Postpartum Corrective Exercise Specialist, I have a 
                    particular passion for helping new mothers return to sport, especially lifting and running.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">A Holistic Approach</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    While my specialty lies in pelvic floor rehabilitation, I work with a variety of general 
                    musculoskeletal conditions. I believe in treating the whole person—understanding how your 
                    neck pain might connect to your posture, how your back issues might relate to your core 
                    function, and how everything in your body works together.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Beyond the Clinic</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I myself have a deep passion for athletics and the outdoors. I understand what it means 
                    to want to push your body, to challenge yourself, to experience the joy of movement. 
                    That&apos;s why I&apos;m so driven to help others experience that same freedom—whether you&apos;re 
                    a competitive athlete or simply want to play with your kids without pain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-semibold text-foreground text-center mb-12">
            Education & Credentials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, index) => <div key={cred.title} className="p-6 rounded-2xl bg-background border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cred.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{cred.title}</h3>
                <p className="text-sm text-muted-foreground">{cred.institution}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Ready to start your healing journey? I&apos;d love to hear from you and discuss how I can help.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>;
}