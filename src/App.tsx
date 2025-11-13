import { useMemo, useState } from 'react';

import './App.css';

import heroImage from '../IMG_3117.JPG';
import logo from './assets/logo.png';

type ServiceCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

type Testimonial = {
  quote: string;
  name: string;
};

type SocialLink = {
  href: string;
  label: string;
  Icon: (props: IconProps) => JSX.Element;
};

type IconProps = {
  className?: string;
};

const services: ServiceCard[] = [
  {
    title: 'Padel Courts',
    description:
      'Four panoramic courts with pro glass walls, cushioned turf, and lighting that keeps every rally electric long after sunset.',
    image:
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Players celebrating a winning padel rally on an outdoor court',
    link: '#booking',
  },
  {
    title: 'Eat & Refuel',
    description:
      'Fresh tropical bowls, wood-fired bites, and signature mocktails served courtside. Refuel, laugh, and linger with the community.',
    image:
      'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Friends sharing vibrant healthy food under palm trees',
    link: '#booking',
  },
  {
    title: 'Events & Mixers',
    description:
      'Weekly socials, friendly tournaments, corporate mixers, and family playdates designed to connect every kind of player.',
    image:
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Group of padel players high-fiving during a community event',
    link: '#booking',
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      '“Karibu Padel feels like a second home. We play hard, applaud louder, and always finish with plates to share.”',
    name: 'Amina · Sunset League Captain',
  },
  {
    quote:
      '“I walked in as a curious beginner and left with a team of new friends cheering every win. Inclusive energy all the way.”',
    name: 'Luca · First-Time Player',
  },
  {
    quote:
      '“The perfect combo of sport and social. Courts, kitchen, and community are all in sync—see you on the court!”',
    name: 'Sara · Weekend Mixer Host',
  },
];

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.instagram.com/karibupadelclub',
    label: 'Follow Karibu Padel Club on Instagram',
    Icon: InstagramIcon,
  },
  {
    href: 'https://www.facebook.com',
    label: 'Connect with Karibu Padel Club on Facebook',
    Icon: FacebookIcon,
  },
  {
    href: 'https://wa.me/255760777333',
    label: 'Message Karibu Padel Club on WhatsApp',
    Icon: WhatsappIcon,
  },
];

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const bookingMessage = useMemo(
    () =>
      formStatus === 'success'
        ? 'Thanks! Your message is on its way. We’ll confirm within 24 hours.'
        : 'Share your details and we’ll help you book the perfect court or table.',
    [formStatus],
  );

  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('success');
    event.currentTarget.reset();
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="app">
        <header className="hero" id="home">
          <div className="hero-media" aria-hidden="true">
            <img src={heroImage} alt="" loading="eager" />
            <div className="hero-overlay" />
          </div>
          <nav className="top-nav container" aria-label="Main navigation">
            <div className="brand">
              <img src={logo} alt="Karibu Padel Club logo" loading="lazy" />
              <span>Karibu Padel Club</span>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#discover">Discover</a>
              </li>
              <li>
                <a href="#play">Play</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
              <li>
                <a href="#booking">Contact</a>
              </li>
            </ul>
            <a className="nav-cta" href="#booking">
              Book Now
            </a>
          </nav>
          <div className="hero-content">
            <div className="hero-copy container">
              <h1 className="hero-title">Karibu Padel Club</h1>
              <h2 className="hero-subtitle">Welcome to the Game. Play. Eat. Connect.</h2>
              <p className="hero-body">
                More than just an experience. Padel club where sport, food, and community come together.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#booking">
                  Join the Fun
                </a>
                <a className="secondary-link" href="#play">
                  Explore the Club
                </a>
              </div>
              <ul className="hero-highlights">
                <li>Inclusive coaching and mixers for every level—grab a racket and jump right in.</li>
                <li>Taste coastal-inspired dishes and refreshing drinks between sets.</li>
                <li>Weekly community nights, tournaments, and pop-up supper clubs.</li>
              </ul>
            </div>
          </div>
        </header>
        <main id="main-content">
          <section className="about" id="discover">
            <div className="container about-inner">
              <div className="about-copy">
                <h2 className="about-title">Discover Karibu</h2>
                <p className="about-text">
                  Karibu means “you are welcome,” and that spirit powers every rally, every plate, and every
                  conversation here. Whether you&apos;re smashing overheads, sharing post-match tapas, or cheering on
                  friends, you&apos;ll feel the island breeze and community vibe from the first hello.
                </p>
                <p className="about-text">
                  New to padel? It blends the quick exchanges of tennis with the fun of enclosed courts. We keep the
                  rules simple, lend you gear, and pair you with players who match your energy. Come for the game, stay
                  for the people.
                </p>
              </div>
              <div className="about-pillars">
                <article className="pillar-card">
                  <div className="pillar-icon" aria-hidden="true">
                    <PlayIcon />
                  </div>
                  <h3 className="pillar-title">Play</h3>
                  <p className="pillar-description">
                    Rally on pro-spec courts with sunset lighting, upbeat playlists, and coaches who keep the game fun
                    and fluid.
                  </p>
                </article>
                <article className="pillar-card">
                  <div className="pillar-icon" aria-hidden="true">
                    <EatIcon />
                  </div>
                  <h3 className="pillar-title">Eat</h3>
                  <p className="pillar-description">
                    Refuel with wholesome bowls, grilled bites, and tropical refreshments crafted for hungry champions.
                  </p>
                </article>
                <article className="pillar-card">
                  <div className="pillar-icon" aria-hidden="true">
                    <ConnectIcon />
                  </div>
                  <h3 className="pillar-title">Connect</h3>
                  <p className="pillar-description">
                    Make fast friends through leagues, social nights, and family events that keep the laughs loud and the
                    vibes bright.
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section className="services" id="play">
            <div className="container services-inner">
              <h2 className="services-title">Play, Eat, Connect</h2>
              <div className="services-grid">
                {services.map((service) => (
                  <article className="service-card" key={service.title}>
                    <figure className="service-image">
                      <img src={service.image} alt={service.imageAlt} loading="lazy" />
                    </figure>
                    <div className="service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      <a className="learn-more" href={service.link}>
                        Learn More
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="testimonials" id="community">
            <div className="container testimonials-inner">
              <h2 className="testimonials-title">Join Our Community</h2>
              <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                  <figure className="testimonial-card" key={testimonial.name}>
                    <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
                    <figcaption className="testimonial-cite">{testimonial.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
          <section className="booking" id="booking">
            <div className="container booking-inner">
              <h2 className="services-title">Book Your Spot</h2>
              <div className="booking-grid">
                <div className="booking-form-card">
                  <p>{bookingMessage}</p>
                  <form aria-label="Booking request form" onSubmit={handleBookingSubmit}>
                    <fieldset>
                      <legend className="visually-hidden">Booking details</legend>
                      <div className="form-row">
                        <label htmlFor="name">Name</label>
                        <input
                          className="input-control"
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          autoComplete="name"
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <input
                          className="input-control"
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@email.com"
                          autoComplete="email"
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="date">Requested date</label>
                        <input
                          className="input-control"
                          id="date"
                          name="date"
                          type="date"
                          required
                          aria-describedby="date-help"
                        />
                        <small id="date-help">We&apos;ll confirm availability or suggest the closest slot.</small>
                      </div>
                      <div className="form-row">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="input-control-textarea"
                          id="message"
                          name="message"
                          placeholder="Share how many players, preferred time, or any special celebration."
                        />
                      </div>
                      <button className="submit-button" type="submit">
                        Send Request
                      </button>
                      <p aria-live="polite" className="form-status">
                        {formStatus === 'success' ? bookingMessage : ''}
                      </p>
                    </fieldset>
                  </form>
                </div>
                <div className="contact-details">
                  <div className="contact-panel">
                    <h3>Reach Out</h3>
                    <div className="contact-items">
                      <a href="tel:+255760777333">+255 760 777 333</a>
                      <a href="mailto:hello@karibupadelclub.com">hello@karibupadelclub.com</a>
                      <address>
                        Africa House Garden, Shangani
                        <br />
                        Stone Town, Zanzibar
                      </address>
                    </div>
                  </div>
                  <div className="contact-panel">
                    <h3>Find Us</h3>
                    <iframe
                      className="map-embed"
                      title="Karibu Padel Club location map"
                      loading="lazy"
                      src="https://maps.google.com/maps?q=-6.163%2C%2039.185&z=15&output=embed"
                      allowFullScreen
                    />
                  </div>
                  <div className="contact-panel">
                    <h3>Stay Connected</h3>
                    <div className="social-links">
                      {socialLinks.map(({ href, label, Icon }) => (
                        <a className="social-button" key={href} href={href} aria-label={label}>
                          <Icon className="icon" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-brand">
              <img src={logo} alt="Karibu Padel Club logo" loading="lazy" />
              <p>Welcome to the game. Play. Eat. Connect.</p>
            </div>
            <nav aria-label="Footer navigation">
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#discover">About</a>
                <a href="#play">Services</a>
                <a href="#community">Community</a>
                <a href="#booking">Book</a>
                <a href="mailto:hello@karibupadelclub.com">Privacy</a>
              </div>
            </nav>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} Karibu Padel Club. All rights reserved.</span>
            <span>Crafted with energy in Zanzibar.</span>
          </div>
        </footer>
      </div>
    </>
  );
}

function PlayIcon({ className = 'icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4.5a1.5 1.5 0 0 1 2.25-1.3l11.5 6.5a1.5 1.5 0 0 1 0 2.6l-11.5 6.5A1.5 1.5 0 0 1 5 17.5V4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function EatIcon({ className = 'icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 3v7.5c0 1.9 1.1 3.5 2.6 4.2V21M12 3v6m0 0 3-3m-3 3-3-3M18 3v18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConnectIcon({ className = 'icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7a3 3 0 1 0-3 3h3m10 0a3 3 0 1 0-3-3h3m-8 8a3 3 0 1 0 3 3v-3m4-5H8m8 5 3 3m-11-3-3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon({ className = 'icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = 'icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8c0-.6.4-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsappIcon({ className = 'icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.1 12.1a8.1 8.1 0 0 1-11.2 7.4l-3.3 1.2 1.2-3.4A8.1 8.1 0 1 1 20.1 12.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.5c0 2.3 2.2 4.5 4.5 4.5l1-.4c.3-.1.6 0 .7.2l.6.9c.2.2.2.6 0 .8-.7.7-1.7 1-2.8 1C10.9 16.5 8 13.6 8 10c0-1.1.4-2.1 1.1-2.8.2-.2.6-.2.8 0l.9.6c.2.2.3.5.2.7l-.5 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
