import React, { useState } from "react";
import { Gem, Menu, X, ArrowRight, Upload, Phone, Mail, MapPin, Globe2, ShieldCheck, Sparkles, GraduationCap } from "lucide-react";

const divisions = [
  {
    name: "ES Brass",
    subtitle: "Handcrafted Brass Idols & Décor",
    description: "Pure brass idols, spiritual showpieces, vastu décor and premium gifting pieces crafted by skilled Indian artisans.",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "ES Silvers",
    subtitle: "Silver Idols, Silverware & Luxury Gifting",
    description: "Premium silver idols, spoons, bowls, dinner sets, utensils and handcrafted silver articles for homes and gifting.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "ES Diamonds",
    subtitle: "Diamond Studded Idols & Custom Jewellery",
    description: "High-value diamond-studded idols, custom jewellery, luxury watches and bespoke creations for global clients.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
  },
];

const products = [
  {
    title: "Pure Brass Elephant Showpiece",
    division: "ES Brass",
    category: "Brass Decor",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200&auto=format&fit=crop",
    description: "A handcrafted brass elephant showpiece symbolising prosperity, wisdom and timeless Indian craftsmanship.",
  },
  {
    title: "Brass Durga Maa Idol",
    division: "ES Brass",
    category: "Brass Idols",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1200&auto=format&fit=crop",
    description: "A powerful spiritual brass idol representing strength, protection and divine energy.",
  },
  {
    title: "925 Sterling Silver Lotus Spoon",
    division: "ES Silvers",
    category: "Silver Utensils",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
    description: "A premium silver spoon with elegant lotus-inspired detailing for luxury dining and gifting.",
  },
  {
    title: "999 Pure Silver Ganesh Idol",
    division: "ES Silvers",
    category: "Silver Idols",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1200&auto=format&fit=crop",
    description: "A refined silver Ganesh idol designed for gifting, pooja rooms and modern spiritual spaces.",
  },
  {
    title: "Diamond Studded Ganesh Idol",
    division: "ES Diamonds",
    category: "Diamond Idols",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    description: "A bespoke diamond-studded idol crafted for collectors, temples and luxury devotional gifting.",
  },
  {
    title: "Custom Diamond Jewellery Design",
    division: "ES Diamonds",
    category: "Custom Jewellery",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
    description: "Custom jewellery creation with options in diamond type, metal, design, budget and finish.",
  },
];

const education = [
  {
    title: "Diamond Awareness Workshop",
    duration: "2–3 Days",
    text: "A beginner-friendly practical workshop for jewellery buyers, students and professionals who want to understand diamonds before buying or selling.",
  },
  {
    title: "Smart Diamond Buying Program",
    duration: "10 Days",
    text: "Learn 4Cs, certifications, price comparison, quality differences and smart decision-making while buying diamond jewellery.",
  },
  {
    title: "Advanced Diamond Training Program",
    duration: "6 Weeks",
    text: "In-depth practical training in diamond grading, assorting, valuation, sourcing, certification, pricing and live market exposure.",
  },
  {
    title: "Corporate Training for Jewellery Showrooms",
    duration: "Custom Modules",
    text: "Training for jewellery showroom teams in product knowledge, luxury customer handling, sales, objection management and diamond education.",
  },
];

const filters = ["All", "ES Brass", "ES Silvers", "ES Diamonds"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = activeFilter === "All" ? products : products.filter((item) => item.division === activeFilter);

  return (
    <div className="min-h-screen bg-[#faf7ef] text-[#17130c]">
      <header className="sticky top-0 z-50 border-b border-[#d8c690]/50 bg-[#faf7ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a646] bg-white shadow-sm">
              <Gem className="h-6 w-6 text-[#b8942f]" />
            </div>
            <div>
              <h1 className="font-serif text-xl tracking-[0.2em]">ES DIAMONDS</h1>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#7a6a43]">Global Luxury</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] text-[#4b432f] lg:flex">
            <a href="#brands">Brands</a>
            <a href="#products">Products</a>
            <a href="#education">Education</a>
            <a href="#studio">Custom Studio</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="hidden rounded-full bg-[#111] px-6 py-3 text-sm text-white transition hover:bg-[#2c2416] md:inline-flex">
            Enquire Now
          </a>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#d8c690]/40 px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em]">
              <a href="#brands">Brands</a>
              <a href="#products">Products</a>
              <a href="#education">Education</a>
              <a href="#studio">Custom Studio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.36em] text-[#a47f1d]">India to the World</p>
            <h2 className="font-serif text-5xl leading-tight md:text-7xl">Luxury Indian Craftsmanship for Global Buyers</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c523b]">
              ES Diamonds Global brings together handcrafted brass idols, premium silverware, diamond-studded creations, custom jewellery and diamond education under one luxury platform.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-[#111] px-8 py-4 text-white transition hover:bg-[#2c2416]">
                Explore Collections <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#studio" className="inline-flex items-center justify-center rounded-full border border-[#b8942f] px-8 py-4 text-[#111] transition hover:bg-white">
                Request Custom Quote
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#d8c690]/60 bg-white p-3 shadow-2xl shadow-[#d4af37]/10">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop"
                alt="ES Diamonds luxury craftsmanship"
                className="h-[520px] w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur-md">
              <p className="font-serif text-2xl">Inquiry-Based Luxury</p>
              <p className="mt-1 text-sm text-[#6b6044]">No payment gateway • Custom quotes only</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8c690]/40 bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-4">
          {[
            [Globe2, "Global Enquiries"],
            [ShieldCheck, "Premium Craftsmanship"],
            [Sparkles, "Custom Made"],
            [Gem, "Diamond Expertise"],
          ].map(([Icon, text]) => (
            <div key={text} className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.18em] text-[#5c523b]">
              <Icon className="h-5 w-5 text-[#b8942f]" />
              {text}
            </div>
          ))}
        </div>
      </section>

      <section id="brands" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-[#a47f1d]">Our Divisions</p>
          <h3 className="mt-3 font-serif text-4xl md:text-5xl">Three Premium ES Collections</h3>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {divisions.map((item) => (
            <div key={item.name} className="group overflow-hidden rounded-[2rem] border border-[#d8c690]/60 bg-white shadow-sm transition hover:shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h4 className="font-serif text-3xl">{item.name}</h4>
                  <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-[#6b6044]">{item.description}</p>
                <a href="#products" onClick={() => setActiveFilter(item.name)} className="mt-5 inline-flex rounded-full bg-[#111] px-5 py-3 text-sm text-white hover:bg-[#2c2416]">
                  View Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-[#111] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-[#d4af37]">Product Catalogue</p>
              <h3 className="mt-3 font-serif text-4xl md:text-5xl">Luxury Collections</h3>
              <p className="mt-4 max-w-2xl text-white/65">Every product is listed for enquiry only. Customers can request price, customization, bulk order or international shipping details.</p>
            </div>
          </div>

          <div className="mb-9 flex gap-3 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm transition ${activeFilter === filter ? "border-[#d4af37] bg-[#d4af37] text-[#111]" : "border-white/15 bg-white/5 text-white hover:border-[#d4af37]"}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {filteredProducts.map((product) => (
              <div key={product.title} className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06] shadow-sm transition hover:bg-white/[0.09]">
                <img src={product.image} alt={product.title} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d4af37]">{product.division}</p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{product.category}</span>
                  </div>
                  <h4 className="font-serif text-2xl">{product.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-white/65">{product.description}</p>
                  <a href="#contact" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm text-[#111] hover:bg-[#d4af37]">
                    Request Price
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[#a47f1d]">Education</p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl">Diamond Workshops & Seminars</h3>
            <p className="mt-4 max-w-3xl text-[#6b6044]">A dedicated section for ES Diamonds workshops, seminars, advanced diamond training and corporate training for jewellery showrooms.</p>
          </div>
          <GraduationCap className="h-12 w-12 text-[#b8942f]" />
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {education.map((item) => (
            <div key={item.title} className="rounded-[1.8rem] border border-[#d8c690]/60 bg-white p-6 shadow-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#a47f1d]">{item.duration}</p>
              <h4 className="font-serif text-2xl">{item.title}</h4>
              <p className="mt-4 text-sm leading-7 text-[#6b6044]">{item.text}</p>
              <a href="#contact" className="mt-6 inline-flex rounded-full bg-[#111] px-5 py-3 text-sm text-white hover:bg-[#2c2416]">Enquire</a>
            </div>
          ))}
        </div>
      </section>

      <section id="studio" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[#a47f1d]">Custom Design Studio</p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl">Upload Your Design & Request an Estimate</h3>
            <p className="mt-6 max-w-xl leading-8 text-[#6b6044]">Customers can share reference images, sketches, jewellery designs, idol concepts or product ideas. Your team can review the details and send an estimate for comparison before order confirmation.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#d8c690]/60 bg-[#faf7ef] p-5">
                <Upload className="mb-3 text-[#b8942f]" />
                <h4 className="font-serif text-xl">Upload Reference</h4>
                <p className="mt-2 text-sm text-[#6b6044]">Image, sketch, screenshot or product idea.</p>
              </div>
              <div className="rounded-3xl border border-[#d8c690]/60 bg-[#faf7ef] p-5">
                <Gem className="mb-3 text-[#b8942f]" />
                <h4 className="font-serif text-xl">Get Quote</h4>
                <p className="mt-2 text-sm text-[#6b6044]">Estimate by metal, stone, size, finish and timeline.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d8c690]/60 bg-[#faf7ef] p-7 shadow-sm">
            <h4 className="font-serif text-3xl">Request Estimate</h4>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none" placeholder="Your Name" />
              <input className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none" placeholder="Phone / WhatsApp with Country Code" />
              <input className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none" placeholder="Email Address" />
              <select className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none">
                <option>Select Product Type</option>
                <option>Jewellery</option>
                <option>Diamond Idol</option>
                <option>Silverware</option>
                <option>Brass Idol</option>
                <option>Custom Gift</option>
              </select>
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#b8942f] bg-white px-4 py-8 text-center">
                <Upload className="mb-3 h-7 w-7 text-[#b8942f]" />
                <span className="font-medium">Upload Design Reference</span>
                <span className="mt-1 text-xs text-[#6b6044]">JPG, PNG or PDF</span>
                <input type="file" className="hidden" />
              </label>
              <textarea className="min-h-28 rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none" placeholder="Mention size, budget, country, timeline and custom details" />
              <a href="https://wa.me/919111191190" className="inline-flex justify-center rounded-full bg-[#111] px-8 py-4 text-white hover:bg-[#2c2416]">Submit Enquiry</a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-[#d8c690]/50 bg-[#111] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-3xl tracking-[0.12em]">ES DIAMONDS GLOBAL</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">A premium global platform for brass idols, silverware, diamond-studded creations, custom jewellery and diamond education.</p>
          </div>
          <div className="space-y-4 text-sm text-white/75">
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#d4af37]" /> +91-9111191190</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#d4af37]" /> +91-9111191125</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#d4af37]" /> www.esdiamondsglobal.com</p>
          </div>
          <div className="space-y-4 text-sm text-white/75">
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#d4af37]" /> Indore, Madhya Pradesh, India</p>
            <p className="uppercase tracking-[0.18em] text-[#d4af37]">ES Brass • ES Silvers • ES Diamonds • Education</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
