import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-24">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="/" className="text-2xl font-semibold tracking-[-0.04em]">
              SPHERE
            </a>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/50">
              Discover exceptional properties and find a place that feels like
              home.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />

                  <circle cx="12" cy="12" r="4" />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3C3.8 3 3 3.8 3 4.85S3.8 6.7 4.85 6.7 6.7 5.9 6.7 4.85 5.9 3 4.85 3ZM21 13.85c0-3.75-2-5.5-4.67-5.5-2.14 0-3.1 1.18-3.63 2.01V8.5H9.4V21h3.3v-6.19c0-1.63.3-3.2 2.32-3.2 1.99 0 2.01 1.86 2.01 3.3V21H21v-7.15Z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.86h1.73L8.29 4.03H6.43L17.8 19.86Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#properties"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  Properties
                </a>
              </li>

              <li>
                <a
                  href="#categories"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#careers"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#agents"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  For Agents
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Get in touch</h3>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:hello@sphere.com"
                className="block text-sm text-white/50 transition hover:text-white"
              >
                hello@sphere.com
              </a>

              <a
                href="tel:+911234567890"
                className="block text-sm text-white/50 transition hover:text-white"
              >
                +91 12345 67890
              </a>

              <p className="text-sm leading-6 text-white/50">
                Indore, Madhya Pradesh
                <br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-y border-white/10 py-8">
          <a
            href="#properties"
            className="group flex items-center justify-between gap-6"
          >
            <span className="text-xl font-medium tracking-tight sm:text-2xl">
              Ready to find your next home?
            </span>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-gray-950 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={19} />
            </span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 py-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SPHERE. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#privacy" className="transition hover:text-white/60">
              Privacy
            </a>

            <a href="#terms" className="transition hover:text-white/60">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
