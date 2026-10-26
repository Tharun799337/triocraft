import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Shield } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-slate-200 text-[#1a1f22] pt-16 pb-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & About */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/triocraft-emblem.png"
                alt="TrioCraft Official Emblem"
                className="w-10 h-10 object-contain drop-shadow-xs"
              />
              <div className="flex flex-col text-left">
                <span className="font-display font-medium text-2xl text-slate-900 tracking-tight leading-none">
                  Trio<span className="text-amber-600 font-semibold">Craft</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium mt-0.5">
                  Design &amp; Development
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Trio Craft is a full-service digital design, custom engineering, and AI agency. We create impactful web applications, hospital management systems, viral influencer campaigns, and revenue-scaling platforms.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/Tharun799337"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-400 transition-colors shadow-xs"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-400 transition-colors shadow-xs"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917993370000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 hover:border-emerald-400 transition-colors shadow-xs"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#1a1f22]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <a href="#hero" className="hover:text-amber-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-600 transition-colors">About Trio Craft</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">Services &amp; Capabilities</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-600 transition-colors">Projects &amp; Case Studies</a>
              </li>
              <li>
                <a href="#how-we-do-it" className="hover:text-amber-600 transition-colors">How We Do It</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-600 transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 transition-colors">Get Free Quote</a>
              </li>
              <li>
                <Link to="/admin" className="hover:text-amber-600 transition-colors inline-flex items-center gap-1.5 font-medium text-amber-700">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Directory */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#1a1f22]">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">Digital Marketing &amp; SEO</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">Influencer Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">Website &amp; App Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">Hospital Management (HMS)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">Real-Time Clinical AI Chatbots</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-600 transition-colors">Vinayaka Festival Puja Portals</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-600 transition-colors">Couple Surprise &amp; Apology Sites</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#1a1f22]">
              Contact Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India (Global Remote Service)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:+917993370000" className="hover:text-emerald-700 font-semibold">
                  +91 79933 70000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <a href="mailto:contact@triocraft.studio" className="hover:text-amber-600 font-semibold">
                  contact@triocraft.studio
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-raiseup-gold w-full py-2.5 rounded-full text-xs uppercase font-bold inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {currentYear} TrioCraft Digital &amp; AI Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-5 sm:gap-6">
            <a href="#hero" className="hover:text-[#1a1f22] transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-[#1a1f22] transition-colors">Terms of Service</a>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-200/80 hover:bg-amber-100 text-slate-700 hover:text-amber-800 transition-all font-semibold text-[11px] shadow-2xs"
              title="Admin Login & Management Portal"
            >
              <Shield className="w-3.5 h-3.5 text-amber-600" />
              <span>Admin Login</span>
            </Link>
            <a href="#hero" className="hover:text-[#1a1f22] transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
