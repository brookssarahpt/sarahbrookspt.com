import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";
export function Footer() {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Sarah Brooks <span className="text-primary">PT</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Specialized pelvic floor physical therapy with a holistic approach. 
              Helping you get back to what you love without pain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "FAQs"].map(item => <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              {["Pelvic Floor Therapy", "Orthopedic PT", "Return to Sport", "Telehealth"].map(item => <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">Contact Information</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:brookssarah789@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  brookssarah789@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:914-570-4265" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  (914) 570-4265
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  Manhattan, New York
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sarah Brooks Physical Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}