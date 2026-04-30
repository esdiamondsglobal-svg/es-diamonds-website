import React, { useState } from "react";
import {
  Gem,
  Menu,
  X,
  ArrowRight,
  Upload,
  Phone,
  Mail,
  MapPin,
  Globe2,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Crown,
  MessageCircle,
} from "lucide-react";

const divisions = [
  {
    name: "ES Brass",
    label: "Handcrafted Brass Idols & Décor",
    text: "Pure brass idols, vastu décor, animal figurines, spiritual showpieces and premium handcrafted gifts.",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "ES Silvers",
    label: "Silver Idols, Silverware & Luxury Gifting",
    text: "Silver idols, spoons, bowls, dinner sets, utensils and heirloom-style handcrafted silver articles.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "ES Diamonds",
    label: "Diamond Studded Idols & Bespoke Jewellery",
    text: "Custom diamond-studded idols, luxury jewellery, watches and high-value spiritual collectibles.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
  },
];

const products = [
  {
    title: "Pure Brass Elephant Showpiece",
    division: "ES Brass",
    category: "Brass Decor",
    text: "A symbol of prosperity and strength, handcrafted in pure brass with antique luxury finishing.",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Brass Durga Maa Idol",
    division: "ES Brass",
    category: "Brass Idols",
    text: "A powerful devotional piece representing divine protection, strength and sacred energy.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "999 Pure Silver Ganesh Idol",
    division: "ES Silvers",
    category: "Silver Idols",
    text: "A refined silver idol created for pooja rooms, gifting and modern spiritual spaces.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "925 Sterling Silver Dinner Set",
    division: "ES Silvers",
    category: "Silverware",
    text: "A premium handcrafted silver dining set designed for luxury gifting and heirloom use.",
    image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Diamond Studded Ganesh Idol",
    division: "ES Diamonds",
    category: "Diamond Idols",
    text: "A bespoke devotional luxury creation made for collectors, temples and global clients.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Custom Diamond Jewellery Design",
    division: "ES Diamonds",
    category: "Bespoke Jewellery",
    text: "Create your jewellery with preferred diamond type, metal, design, budget and finish.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
  },
];

const programs = [
  {
    title: "Diamond Awareness Workshop",
    duration: "2–3 Days",
    text: "A practical beginner workshop for jewellery buyers, students and professionals.",
  },
  {
    title: "Smart Diamond Buying Program",
    duration: "10 Days",
    text: "Understand 4Cs, certificates, pricing and quality differences before buying jewellery.",
  },
  {
    title: "Advanced Diamond Training Program",
    duration: "6 Weeks",
    text: "Diamond grading, assorting, valuation, sourcing, pricing and live market exposure.",
  },
  {
    title: "Corporate Jewellery Showroom Training",
    duration: "Custom Modules",
    text: "Product knowledge, luxury sales, objection handling and customer experience training.",
  },
];

const filters = ["All", "ES Brass", "ES Silvers", "ES Diamonds"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = activeFilter === "All" ? products : products.filter((product) => product.division === activeFilter);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f8f1df]">
      <header className="sticky top-0 z-50 border-b border-[#d4af37]/20 bg-[#050505]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#111] shadow-[0_0_35px_rgba(212,175,55,0.18)]">
              <Gem className="h-6 w-6 text-[#d4af37]" />
            </div>
            <div>
              <h1 className="font-serif text-xl tracking-[0.24em] text-white">ES DIAMONDS</h1>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#d4af37]">Global Luxury House</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/70 lg:flex">
            <a className="hover:text-[#d4af37]" href="#collections">Collections</a>
            <a className="hover:text-[#d4af37]" href="#products">Catalogue</a>
            <a className="hover:text-[#d4af37]" href="#education">Education</a>
            <a className="hover:text-[#d4af37]" href="#studio">Custom Studio</a>
            <a className="hover:text-[#d4af37]" href="#contact">Contact</a>
          </nav>

          <a href="https://wa.me/919111191190" className="hidden rounded-full border border-[#d4af37] bg-[#d4af37] px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-[#d4af37] md:inline-flex">
            WhatsApp Enquiry
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#d4af37]/20 bg-[#080808] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-white/75">
              <a href="#collections">Collections</a>
              <a href="#products">Catalogue</a>
              <a href="#education">Education</a>
              <a href="#studio">Custom Studio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[460px] w-[460px] rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#d4af37]">
              <Crown className="h-4 w-4" /> India to the World
            </div>
            <h2 className="font-serif text-5xl leading-[1.04] text-white md:text-7xl">
              A Global Luxury House for Diamonds, Silver & Sacred Craftsmanship
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              ES Diamonds Global is an enquiry-first luxury platform for handcrafted brass idols, premium silverware, diamond-studded idols, custom jewellery and diamond education.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 font-medium text-black transition hover:bg-white">
                Explore Collections <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#studio" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-white transition hover:border-[#d4af37] hover:text-[#d4af37]">
                Request Custom Estimate
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.4rem] bg-[#d4af37]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-[#d4af37]/35 bg-[#111] p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop"
                alt="ES Diamonds Global"
                className="h-[540px] w-full rounded-[1.7rem] object-cover opacity-90"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-black/65 p-5 backdrop-blur-md">
                <p className="font-serif text-2xl text-white">No Payment Gateway</p>
                <p className="mt-1 text-sm text-white/65">Only premium enquiries, custom quotes and global consultations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d4af37]/20 bg-[#0b0b0b] py-7">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-4">
          {[
            [Globe2, "Global Business"],
            [ShieldCheck, "Inquiry First"],
            [Sparkles, "Custom Made"],
            [Gem, "Diamond Expertise"],
          ].map(([Icon, text]) => (
            <div key={text} className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
              <Icon className="h-5 w-5 text-[#d4af37]" />
              {text}
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.38em] text-[#d4af37]">Luxury Divisions</p>
          <h3 className="mt-4 font-serif text-4xl text-white md:text-6xl">Built Like a Global Brand</h3>
          <p className="mt-5 text-white/60">Three premium verticals under one luxury identity, crafted for international enquiries and high-value custom orders.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {divisions.map((item) => (
            <article key={item.name} className="group overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-[#0f0f0f] transition hover:-translate-y-1 hover:border-[#d4af37]/60 hover:shadow-[0_20px_80px_rgba(212,175,55,0.12)]">
              <div className="relative h-80 overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.26em] text-[#d4af37]">Collection</p>
                  <h4 className="font-serif text-4xl text-white">{item.name}</h4>
                </div>
              </div>
              <div className="p-7">
                <h5 className="font-serif text-xl text-white">{item.label}</h5>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.text}</p>
                <a href="#products" onClick={() => setActiveFilter(item.name)} className="mt-6 inline-flex items-center rounded-full border border-[#d4af37]/50 px-5 py-3 text-sm text-[#d4af37] hover:bg-[#d4af37] hover:text-black">
                  View {item.name} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="bg-[#080808] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.38em] text-[#d4af37]">Catalogue</p>
              <h3 className="mt-4 font-serif text-4xl text-white md:text-6xl">Inquiry-Based Products</h3>
              <p className="mt-5 max-w-2xl text-white/60">Products are displayed for premium enquiries only. Prices, customisation and export details are shared after consultation.</p>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm transition ${
                    activeFilter === filter
                      ? "border-[#d4af37] bg-[#d4af37] text-black"
                      : "border-white/15 bg-white/5 text-white/70 hover:border-[#d4af37] hover:text-[#d4af37]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.title} className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#111] transition hover:border-[#d4af37]/50 hover:shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                <div className="relative h-72 overflow-hidden">
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover opacity-85 transition duration-700 hover:scale-105" />
                  <div className="absolute left-5 top-5 rounded-full border border-[#d4af37]/40 bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] backdrop-blur">
                    {product.division}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">{product.category}</p>
                  <h4 className="mt-3 font-serif text-2xl text-white">{product.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-white/58">{product.text}</p>
                  <a href="https://wa.me/919111191190" className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#d4af37]">
                    Request Price <MessageCircle className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.38em] text-[#d4af37]">Education</p>
            <h3 className="mt-4 font-serif text-4xl text-white md:text-6xl">Diamond Workshops & Seminars</h3>
            <p className="mt-5 max-w-3xl text-white/60">A dedicated section for ES Diamonds workshops, corporate showroom training and advanced diamond programs.</p>
          </div>
          <GraduationCap className="h-14 w-14 text-[#d4af37]" />
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {programs.map((program) => (
            <article key={program.title} className="rounded-[1.8rem] border border-[#d4af37]/20 bg-[#0f0f0f] p-6 transition hover:border-[#d4af37]/60">
              <p className="text-xs uppercase tracking-[0.22em] text-[#d4af37]">{program.duration}</p>
              <h4 className="mt-4 font-serif text-2xl text-white">{program.title}</h4>
              <p className="mt-4 text-sm leading-7 text-white/58">{program.text}</p>
              <a href="https://wa.me/919111191190" className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 hover:border-[#d4af37] hover:text-[#d4af37]">
                Enquire
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="studio" className="relative overflow-hidden bg-[#0b0b0b] py-24">
        <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.38em] text-[#d4af37]">Custom Studio</p>
            <h3 className="mt-4 font-serif text-4xl text-white md:text-6xl">Upload a Design. Request an Estimate.</h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Customers can share a jewellery design, idol concept, reference image or sketch. Your team can estimate metal, stones, weight, finishing, production time and international shipping.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#d4af37]/20 bg-white/5 p-6">
                <Upload className="mb-4 h-7 w-7 text-[#d4af37]" />
                <h4 className="font-serif text-xl text-white">Upload Reference</h4>
                <p className="mt-2 text-sm text-white/55">Sketch, product photo, screenshot or design idea.</p>
              </div>
              <div className="rounded-3xl border border-[#d4af37]/20 bg-white/5 p-6">
                <Gem className="mb-4 h-7 w-7 text-[#d4af37]" />
                <h4 className="font-serif text-xl text-white">Receive Quote</h4>
                <p className="mt-2 text-sm text-white/55">Estimate based on metal, stone, size and finish.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d4af37]/25 bg-[#111] p-7 shadow-2xl">
            <h4 className="font-serif text-3xl text-white">Global Enquiry Form</h4>
            <p className="mt-2 text-sm text-white/50">This is a visual form. Connect it later to WhatsApp, email or Netlify Forms.</p>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#d4af37]" placeholder="Your Name" />
              <input className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#d4af37]" placeholder="Phone / WhatsApp with Country Code" />
              <input className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#d4af37]" placeholder="Email Address" />
              <select className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-[#d4af37]">
                <option>Product Type</option>
                <option>ES Brass</option>
                <option>ES Silvers</option>
                <option>ES Diamonds</option>
                <option>Diamond Education</option>
                <option>Custom Design</option>
              </select>
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#d4af37]/50 bg-black px-4 py-8 text-center">
                <Upload className="mb-3 h-7 w-7 text-[#d4af37]" />
                <span className="font-medium text-white">Upload Design Reference</span>
                <span className="mt-1 text-xs text-white/45">JPG, PNG or PDF</span>
                <input type="file" className="hidden" />
              </label>
              <textarea className="min-h-28 rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#d4af37]" placeholder="Mention size, budget, country, delivery timeline and custom details" />
              <a href="https://wa.me/919111191190" className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 font-medium text-black transition hover:bg-white">
                Submit Enquiry <MessageCircle className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-[#d4af37]/20 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-3xl tracking-[0.14em] text-white">ES DIAMONDS GLOBAL</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">A dark luxury global website for brass idols, silverware, diamond-studded creations, custom jewellery and diamond education.</p>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#d4af37]" /> +91-9111191190</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#d4af37]" /> +91-9111191125</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#d4af37]" /> www.esdiamondsglobal.com</p>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#d4af37]" /> Indore, Madhya Pradesh, India</p>
            <p className="uppercase tracking-[0.2em] text-[#d4af37]">ES Brass • ES Silvers • ES Diamonds • Education</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
