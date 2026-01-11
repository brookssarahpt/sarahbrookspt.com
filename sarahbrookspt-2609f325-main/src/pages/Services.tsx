import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import pelvicAnatomyImg from "@/assets/pelvic-anatomy.jpg";
import musculoskeletalImg from "@/assets/musculoskeletal-anatomy.jpg";
const pelvicFloorConditions = ["Urinary incontinence (stress, urge, mixed)", "Urinary frequency & urgency", "Pelvic pain & pelvic floor dysfunction", "Painful intercourse (dyspareunia)", "Vaginismus", "Constipation & bowel dysfunction", "Prenatal pain & discomfort", "Postpartum recovery & rehabilitation", "Diastasis recti", "Prolapse management", "Constipation/bowel health", "Abdominal pain", "C-section scar mobilization"];
const musculoskeletalConditions = ["Low back pain", "Neck pain & cervical dysfunction", "Shoulder injuries & rotator cuff issues", "Knee pain & patellofemoral syndrome", "Hip pain & bursitis", "Sciatica & nerve pain", "Sports injuries", "Post-surgical rehabilitation", "Ankle injuries & instability", "Balance training", "Core weakness & instability", "Return to sport training"];
export default function Services() {
  return <>
      {/* Hero */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Services</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">What Sarah Treats</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive care for pelvic floor dysfunction and general musculoskeletal conditions, 
              always with a holistic approach.
            </p>
          </div>
        </div>
      </section>

      {/* Pelvic Floor Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Specialty</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-6">
                Pelvic Floor Physical Therapy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The pelvic floor is a group of muscles that support your bladder, uterus, and rectum. 
                  When these muscles are too tight, too weak, or uncoordinated, it can lead to a variety 
                  of symptoms that significantly impact your quality of life.
                </p>
                <p>
                  Pelvic floor dysfunction is incredibly common—especially during pregnancy and postpartum—
                  but it doesn&apos;t have to be your normal. With specialized treatment, most people see 
                  significant improvement.
                </p>
              </div>
              
              {/* Pelvic Anatomy Image */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-sm">
                <img 
                  src={pelvicAnatomyImg} 
                  alt="Gentle illustration of pelvic floor anatomy" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Conditions Sarah Treats</h3>
              <div className="grid gap-3">
                {pelvicFloorConditions.map(condition => <div key={condition} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{condition}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Musculoskeletal Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Orthopedic Care</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-6">
                General Musculoskeletal Conditions
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In addition to pelvic floor specialization, I treat a wide range of orthopedic conditions. 
                  My holistic approach means I look at the whole picture—understanding how different parts 
                  of your body work together and affect each other.
                </p>
                <p>Treatment may include manual therapy, therapeutic exercises, neuromuscular re-education, and habit education and planning to help you understand your body and manage symptoms independently. My goal is always to empower you with the knowledge and tools you need for lasting results.</p>
              </div>
              
              {/* Musculoskeletal Anatomy Image */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-sm">
                <img 
                  src={musculoskeletalImg} 
                  alt="Gentle illustration of spine and back anatomy" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-border lg:order-1">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Conditions Sarah Treats</h3>
              <div className="grid gap-3">
                {musculoskeletalConditions.map(condition => <div key={condition} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{condition}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              My Treatment Approach
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-left">
              <p>
                Every treatment plan begins with a comprehensive evaluation. I take the time to listen 
                to your story, understand your goals, and assess your movement patterns. From there, 
                we work together to develop a plan that fits your life and addresses the root cause 
                of your symptoms.
              </p>
              <p>
                Treatment may include manual therapy, therapeutic exercises, neuromuscular re-education, 
                and education to help you understand your body and manage symptoms independently. 
                My goal is always to empower you with the knowledge and tools you need for lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Not Sure If I Can Help?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Reach out for a free consultation call. We&apos;ll discuss your concerns and determine 
            if physical therapy is the right fit for you.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Schedule a Free Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>;
}