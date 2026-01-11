import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Sparkles, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import sarahPortrait from "@/assets/sarah-portrait.jpg";
const features = [{
  icon: Heart,
  title: "Holistic Approach",
  description: "Treating the whole person, not just symptoms. Understanding how your body works together."
}, {
  icon: Shield,
  title: "Specialized Care",
  description: "Expert pelvic floor and orthopedic rehabilitation tailored to your unique needs."
}, {
  icon: Sparkles,
  title: "Return to Sport",
  description: "Get back to lifting, running, and the activities you love—especially postpartum."
}, {
  icon: Users,
  title: "Personal Attention",
  description: "One-on-one sessions focused entirely on your recovery and goals."
}];
const conditions = ["Urinary Incontinence", "Pelvic Pain", "Postpartum Recovery", "Low Back Pain", "Pregnancy Rehabilitation", "Return to Sport"];
export default function Index() {
  return <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroBg})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Now Accepting New Patients</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
              Reclaim Your Life with{" "}
              <span className="text-gradient">Compassionate Care</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>
              Hi, I&apos;m Sarah Brooks—a pelvic floor physical therapist dedicated to helping you 
              move freely, live fully, and get back to doing what you love without pain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{
            animationDelay: "0.3s"
          }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Schedule Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/about">Learn About My Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
                <img alt="Sarah Brooks, Physical Therapist" className="w-full h-full object-cover" src="/lovable-uploads/f2e64828-c79f-4374-afe7-076b4dca2da1.jpg" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-xl p-4 card-shadow border border-border">
                <p className="font-serif text-lg font-semibold text-foreground">Sarah Brooks, DPT</p>
                <p className="text-sm text-muted-foreground">Pelvic Floor Specialist</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Welcome</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Physical Therapy That Understands You
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a physical therapist specializing in pelvic floor rehabilitation and a Pregnancy 
                  and Postpartum Corrective Exercise Specialist, I&apos;ve seen firsthand how many people 
                  suffer in silence with issues they believe are &quot;just normal.&quot;
                </p>
                <p>
                  They&apos;re not. And you don&apos;t have to live with them.
                </p>
                <p>
                  My passion arose from seeing how pelvic floor issues are often overlooked or 
                  dismissed. Whether you&apos;re dealing with incontinence, pain, or recovering from 
                  pregnancy, I&apos;m here to help you reclaim your strength and confidence.
                </p>
              </div>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Read My Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Me</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3">
              A Different Approach to Healing
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <div key={feature.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:card-shadow-hover opacity-0 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Conditions We Treat</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-6">
                Comprehensive Care for Your Whole Body
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From pelvic floor dysfunction to general musculoskeletal conditions, I provide 
                specialized care that addresses the root cause of your symptoms—not just the pain.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {conditions.map((condition, index) => <div key={condition} className="p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300">
                  <span className="text-foreground font-medium">{condition}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Take the first step toward healing. Whether you prefer in-home care or telehealth, 
            I&apos;m here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/telehealth">Explore Telehealth Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </>;
}