import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Gem,
  Heart,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const site = {
  brand: "ES Diamonds",
  domain: "www.esdiamondsglobal.com",
  phone1: "+91-9111191190",
  phone2: "+91-9111191125",
  whatsapp: "919111191190",
  instagram: "@esdiamondsglobal",
};

const categoryOrder = [
  "Diamond Rings",
  "Diamond Necklaces",
  "Diamond Bracelets",
  "Diamond Pens",
  "Diamond Idols",
  "Diamond Watches",
];

const diamondTypes = [
  "Real Diamonds",
  "Moissanite Diamonds",
  "American Diamonds",
  "Lab Grown Diamonds",
];

const metalTypes = [
  "Silver",
  "Rose Gold 9KT",
  "Rose Gold 14KT",
  "Rose Gold 18KT",
  "White Gold 9KT",
  "White Gold 14KT",
  "White Gold 18KT",
  "Yellow Gold 9KT",
  "Yellow Gold 14KT",
  "Yellow Gold 18KT",
];

const diamondMultipliers = {
  "Real Diamonds": 1,
  "Moissanite Diamonds": 0.42,
  "American Diamonds": 0.18,
  "Lab Grown Diamonds": 0.66,
};

const metalMultipliers = {
  Silver: 0.55,
  "Rose Gold 9KT": 0.78,
  "Rose Gold 14KT": 0.9,
  "Rose Gold 18KT": 1.05,
  "White Gold 9KT": 0.79,
  "White Gold 14KT": 0.92,
  "White Gold 18KT": 1.08,
  "Yellow Gold 9KT": 0.79,
  "Yellow Gold 14KT": 0.91,
  "Yellow Gold 18KT": 1.06,
};

const products = [
  {
    id: 1,
    slug: "celeste-ring",
    name: "Celeste Diamond Ring",
    category: "Diamond Rings",
    basePrice: 82000,
    tag: "Best Seller",
    hero: "Made for refined everyday luxury and private commissions.",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A premium statement ring designed to feel elegant, modern, and highly customizable across stone and metal choices.",
    details: ["Bespoke finish", "Custom sizing", "Luxury gifting option", "Inquiry before payment"],
  },
  {
    id: 2,
    slug: "lustre-necklace",
    name: "Lustre Diamond Necklace",
    category: "Diamond Necklaces",
    basePrice: 138000,
    tag: "Signature",
    hero: "A timeless necklace silhouette crafted for heirloom elegance.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A refined necklace concept ideal for premium wear, gifting, and luxury presentation with multiple customization paths.",
    details: ["Elegant daily wear", "Bridal styling", "Gift-ready presentation", "Inquiry before production"],
  },
  {
    id: 3,
    slug: "radiant-bracelet",
    name: "Radiant Tennis Bracelet",
    category: "Diamond Bracelets",
    basePrice: 99000,
    tag: "Luxury Edit",
    hero: "Graceful brilliance for contemporary luxury styling.",
    image:
      "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A polished bracelet design built for premium gifting and custom luxury orders with flexible stone and metal options.",
    details: ["Lightweight luxury feel", "Multiple finish options", "Custom quote flow", "Premium packaging"],
  },
  {
    id: 4,
    slug: "imperial-pen",
    name: "Imperial Diamond Pen",
    category: "Diamond Pens",
    basePrice: 21000,
    tag: "Corporate Luxury",
    hero: "Distinctive luxury writing elevated through bespoke finishing.",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A premium pen category for gifting, collectors, and statement desk accessories with customized material direction.",
    details: ["Giftable luxury concept", "Brand-worthy finish", "Stone selection options", "Inquiry-first model"],
  },
  {
    id: 5,
    slug: "divine-idol",
    name: "Divine Diamond Idol",
    category: "Diamond Idols",
    basePrice: 225000,
    tag: "Bespoke",
    hero: "Handcrafted devotional luxury for custom commissions and collectors.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A bespoke idol experience positioned for high-value spiritual gifting and premium handcrafted luxury.",
    details: ["High-value custom work", "Premium metal choices", "Stone variation support", "Manual quote and timeline"],
  },
  {
    id: 6,
    slug: "prestige-watch",
    name: "Prestige Diamond Watch",
    category: "Diamond Watches",
    basePrice: 165000,
    tag: "Collector Pick",
    hero: "A bold timepiece concept built for statement luxury presentation.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A luxury watch category designed for collectors, gifting, and premium styling with tailored finish options.",
    details: ["Statement product category", "Material flexibility", "Inquiry-led sales", "Luxury brand positioning"],
  },
];

const testimonials = [
  {
    name: "Luxury Buyer",
    text: "The website feels premium and makes the inquiry journey feel exclusive rather than transactional.",
  },
  {
    name: "Custom Client",
    text: "I liked being able to understand options first and then inquire with confidence.",
  },
  {
    name: "Jewellery Enthusiast",
    text: "A luxury brand should look this polished online. The experience feels elegant and serious.",
  },
];

const faqs = [
  {
    q: "Do you accept direct payment online?",
    a: "This website is built as an inquiry-first luxury platform. Clients first submit their requirement and then receive a custom quote.",
  },
  {
    q: "Can every product be customized?",
    a: "Yes. Every category supports customization in diamond type and metal type before order confirmation.",
  },
  {
    q: "How do I receive pricing?",
    a: "Pricing is shared after understanding your preferred category, diamond type, metal, design scope, and production requirement.",
  },
  {
    q: "Can I request something fully bespoke?",
    a: "Yes. The platform is designed to support fully custom requests as well as curated designs across all categories.",
  },
];

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function estimatePrice(basePrice, diamondType, metalType) {
  return Math.round(basePrice * diamondMultipliers[diamondType] * metalMultipliers[metalType]);
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SelectField({ label, value, onChange, options, dark = false }) {
  return (
    <label className="block">
      <span className={`mb-2 block text-[11px] font-medium uppercase tracking-[0.28em] ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none rounded-2xl border px-4 py-3 text-sm outline-none ${dark ? "border-white/15 bg-white/5 text-white" : "border-zinc-300 bg-white text-zinc-900"}`}
        >
          {options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 ${dark ? "text-zinc-400" : "text-zinc-500"}`} />
      </div>
    </label>
  );
}

function CategoryTile({ title, image, onClick }) {
  return (
    <button onClick={onClick} className="group relative overflow-hidden rounded-[28px] text-left">
      <img src={image} alt={title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">Collection</p>
        <div className="mt-2 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}

function ProductCard({ product, onOpen }) {
  const [diamondType, setDiamondType] = useState("Real Diamonds");
  const [metalType, setMetalType] = useState("Yellow Gold 18KT");
  const estimated = estimatePrice(product.basePrice, diamondType, metalType);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white">
          {product.tag}
        </div>
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-zinc-900 shadow">
          <Heart size={16} />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">{product.category}</p>
            <h3 className="mt-1 text-xl font-semibold text-zinc-900">{product.name}</h3>
          </div>
          <div className="text-right">
            <div className="text-base font-semibold text-zinc-900">{formatPrice(estimated)}</div>
            <div className="text-xs text-zinc-500">Estimated quote</div>
          </div>
        </div>

        <p className="text-sm leading-6 text-zinc-600">{product.description}</p>

        <div className="grid gap-3">
          <SelectField label="Diamond Type" value={diamondType} onChange={setDiamondType} options={diamondTypes} />
          <SelectField label="Metal Type" value={metalType} onChange={setMetalType} options={metalTypes} />
        </div>

        <div className="rounded-2xl bg-[#faf7f1] p-4">
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 text-zinc-700" />
            <p className="text-sm leading-6 text-zinc-700">Every design supports stone category and metal customization before final confirmation.</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={() => onOpen(product)} className="flex-1 rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-black">
            View Product
          </button>
          <button onClick={() => scrollToId("inquiry")} className="rounded-2xl border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50">
            Inquire
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProductModal({ product, onClose }) {
  const [diamondType, setDiamondType] = useState("Real Diamonds");
  const [metalType, setMetalType] = useState("Yellow Gold 18KT");
  const [activeImage, setActiveImage] = useState(product.gallery[0]);
  const estimated = estimatePrice(product.basePrice, diamondType, metalType);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] bg-[#f8f4ed] p-4 shadow-2xl sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <button onClick={onClose} className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900">
              <ArrowLeft size={16} /> Back
            </button>
            <button onClick={onClose} className="rounded-full bg-white p-3 text-zinc-900 shadow-sm">
              <X size={18} />
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="overflow-hidden rounded-[28px] bg-white p-3 shadow-sm">
                <img src={activeImage} alt={product.name} className="h-[520px] w-full rounded-[22px] object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((img) => (
                  <button key={img} onClick={() => setActiveImage(img)} className={`overflow-hidden rounded-[20px] border p-1 ${activeImage === img ? "border-zinc-900" : "border-zinc-200"}`}>
                    <img src={img} alt={product.name} className="h-28 w-full rounded-[16px] object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">{product.category}</p>
              <h2 className="mt-2 text-3xl font-semibold">{product.name}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">{product.hero}</p>

              <div className="mt-6 rounded-[24px] bg-[#faf7f1] p-5">
                <div className="text-sm text-zinc-500">Estimated quote</div>
                <div className="mt-1 text-3xl font-semibold text-zinc-900">{formatPrice(estimated)}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-600">Final quotation is shared after inquiry and specification review.</div>
              </div>

              <div className="mt-6 grid gap-4">
                <SelectField label="Diamond Type" value={diamondType} onChange={setDiamondType} options={diamondTypes} />
                <SelectField label="Metal Type" value={metalType} onChange={setMetalType} options={metalTypes} />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Product details</h3>
                <div className="mt-4 grid gap-3">
                  {product.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3 rounded-2xl border border-zinc-200 p-4">
                      <Check className="mt-0.5 h-4 w-4 text-zinc-800" />
                      <p className="text-sm leading-6 text-zinc-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => { onClose(); scrollToId("inquiry"); }} className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white">
                  Request Quote
                </button>
                <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900">
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function InquiryForm() {
  const [category, setCategory] = useState(categoryOrder[0]);
  const [diamondType, setDiamondType] = useState(diamondTypes[0]);
  const [metalType, setMetalType] = useState(metalTypes[0]);

  return (
    <div id="inquiry" className="rounded-[32px] bg-zinc-900 p-8 text-white shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-400">Custom inquiry</p>
      <h2 className="mt-2 text-3xl font-semibold">Request your quotation</h2>
      <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300">
        Start with your preferred category, stone type, metal finish, and any specific customization details. You can connect your real form handler when launching.
      </p>

      <form className="mt-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400" placeholder="Full name" />
        <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400" placeholder="Phone / WhatsApp" />
        <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400" placeholder="Email address" />
        <SelectField label="Product Category" value={category} onChange={setCategory} options={categoryOrder} dark />
        <SelectField label="Diamond Type" value={diamondType} onChange={setDiamondType} options={diamondTypes} dark />
        <SelectField label="Metal Type" value={metalType} onChange={setMetalType} options={metalTypes} dark />
        <textarea className="h-32 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-zinc-400" placeholder="Tell us your requirement, size, concept, budget range, or any reference idea" />
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900">
          Submit Inquiry <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}

export default function ESDiamondsLaunchReadyWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = activeCategory === "All" || product.category === activeCategory;
      const searchMatch = `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const categoryHeroImages = {
    "Diamond Rings": products[0].image,
    "Diamond Necklaces": products[1].image,
    "Diamond Bracelets": products[2].image,
    "Diamond Pens": products[3].image,
    "Diamond Idols": products[4].image,
    "Diamond Watches": products[5].image,
  };

  return (
    <div className="min-h-screen bg-[#f6f1ea] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f1ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToId("top")} className="flex items-center gap-3 text-left">
            <div className="overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-sm">
              <img src="/mnt/data/ChatGPT Image Jan 8, 2026, 10_14_58 PM.png" alt="ES Diamonds logo" className="h-14 w-14 object-cover" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.22em]">{site.brand}</div>
              <div className="text-[11px] uppercase tracking-[0.36em] text-zinc-500">{site.domain}</div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollToId("home")} className="text-sm text-zinc-700 hover:text-black">Home</button>
            <button onClick={() => scrollToId("categories")} className="text-sm text-zinc-700 hover:text-black">Categories</button>
            <button onClick={() => scrollToId("products")} className="text-sm text-zinc-700 hover:text-black">Products</button>
            <button onClick={() => scrollToId("about")} className="text-sm text-zinc-700 hover:text-black">About</button>
            <button onClick={() => scrollToId("contact")} className="text-sm text-zinc-700 hover:text-black">Contact</button>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button onClick={() => scrollToId("products")} className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900">
              Explore
            </button>
            <button onClick={() => scrollToId("inquiry")} className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white">
              Request Quote
            </button>
          </div>

          <button className="rounded-2xl border border-zinc-300 p-3 md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/5 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
              {[
                ["Home", "home"],
                ["Categories", "categories"],
                ["Products", "products"],
                ["About", "about"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button key={id} onClick={() => { setMenuOpen(false); scrollToId(id); }} className="text-left text-sm text-zinc-700">
                  {label}
                </button>
              ))}
              <button onClick={() => { setMenuOpen(false); scrollToId("inquiry"); }} className="rounded-2xl bg-zinc-900 px-5 py-3 text-center text-sm font-medium text-white">
                Request Quote
              </button>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-zinc-500">Launch-ready premium jewellery website</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            A luxury digital flagship for ES Diamonds.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Built for premium inquiries, elegant brand positioning, and product discovery across diamond rings, necklaces, bracelets, pens, idols, and watches.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => scrollToId("products")} className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white">
              View Products
            </button>
            <button onClick={() => scrollToId("inquiry")} className="rounded-2xl border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900">
              Start Inquiry
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Inquiry-first model" },
              { icon: Sparkles, label: "Luxury presentation" },
              { icon: Gem, label: "Custom stone & metal" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm">
                <item.icon className="mb-3 h-5 w-5" />
                <p className="text-sm font-medium text-zinc-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="relative overflow-hidden rounded-[34px] border border-white/60 bg-white p-3 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=80" alt="Luxury jewellery showcase" className="h-[560px] w-full rounded-[26px] object-cover" />
          <div className="absolute bottom-8 left-8 right-8 rounded-[28px] bg-white/88 p-6 shadow-lg backdrop-blur">
            <p className="text-[11px] uppercase tracking-[0.34em] text-zinc-500">Featured experience</p>
            <h2 className="mt-2 text-2xl font-semibold">Customization before confirmation</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">Let clients select the stone category and metal type before receiving a quote and production timeline.</p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[32px] bg-zinc-900 p-6 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {[
            "Customization in diamond type and metal type for every product",
            "Luxury inquiry journey instead of instant checkout",
            "Premium layout suitable for high-value jewellery positioning",
            "Ready to connect with domain, hosting, and real form submission",
          ].map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-zinc-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">Category pages</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Explore all product categories</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoryOrder.map((category) => (
            <CategoryTile
              key={category}
              title={category}
              image={categoryHeroImages[category]}
              onClick={() => {
                setActiveCategory(category);
                scrollToId("products");
              }}
            />
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">Products</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Launch-ready product pages</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-3">
              <Search size={17} className="text-zinc-500" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search product" className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 sm:w-56" />
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", ...categoryOrder].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${activeCategory === category ? "bg-zinc-900 text-white" : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">How it works</p>
            <h2 className="mt-2 text-3xl font-semibold">A premium inquiry journey.</h2>
            <div className="mt-8 space-y-5">
              {[
                ["Choose Your Product", "Select a category or product page that matches your requirement."],
                ["Pick Stone & Metal", "Choose real diamonds, moissanite, American diamonds, or lab grown with your preferred metal type."],
                ["Send Inquiry", "Share your exact requirement and receive a tailored quotation before payment."],
                ["Confirm & Produce", "Finalize specification, timeline, and production details directly with ES Diamonds."],
              ].map(([title, text], index) => (
                <div key={title} className="flex gap-4 rounded-[24px] border border-zinc-200 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">About ES Diamonds</p>
            <h2 className="mt-2 text-3xl font-semibold">Luxury presentation backed by diamond expertise.</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              This website is positioned as a premium brand destination where visitors can explore categories, view product experiences, understand customization, and submit serious inquiries before payment. The focus is trust, elegance, and high-quality lead generation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Custom-first experience for high-value buyers",
              "Multiple diamond options for broader market fit",
              "Metal selection with karat flexibility",
              "Premium structure ready for live deployment",
            ].map((item) => (
              <div key={item} className="rounded-[28px] border border-zinc-200 bg-[#faf7f1] p-6">
                <Gem className="mb-4 h-5 w-5" />
                <p className="text-sm leading-7 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">Client sentiment</p>
              <h2 className="mt-2 text-3xl font-semibold">A premium brand should feel premium online.</h2>
            </div>
            <div className="hidden items-center gap-1 text-zinc-500 md:flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[28px] border border-zinc-200 bg-[#faf7f1] p-6">
                <p className="text-sm leading-7 text-zinc-700">“{item.text}”</p>
                <p className="mt-5 text-sm font-semibold text-zinc-900">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-6 rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm lg:grid-cols-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">Contact</p>
            <h2 className="mt-2 text-2xl font-semibold">Connect with ES Diamonds</h2>
          </div>
          <div className="rounded-[24px] bg-[#faf7f1] p-5">
            <Phone className="mb-3 h-5 w-5" />
            <p className="text-sm font-medium">{site.phone1}</p>
            <p className="mt-1 text-sm text-zinc-600">Primary support</p>
          </div>
          <div className="rounded-[24px] bg-[#faf7f1] p-5">
            <Phone className="mb-3 h-5 w-5" />
            <p className="text-sm font-medium">{site.phone2}</p>
            <p className="mt-1 text-sm text-zinc-600">Secondary support</p>
          </div>
          <div className="rounded-[24px] bg-[#faf7f1] p-5">
            <Instagram className="mb-3 h-5 w-5" />
            <p className="text-sm font-medium">{site.instagram}</p>
            <p className="mt-1 text-sm text-zinc-600">Brand showcase</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-zinc-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 {site.brand}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <button onClick={() => scrollToId("products")} className="hover:text-black">Products</button>
            <button onClick={() => scrollToId("inquiry")} className="hover:text-black">Inquiry</button>
            <button onClick={() => scrollToId("contact")} className="hover:text-black">Contact</button>
          </div>
        </div>
      </footer>

      <a href={`https://wa.me/${site.whatsapp}`} className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg">
        <MessageCircle size={18} /> Inquiry on WhatsApp
      </a>

      {selectedProduct ? <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} /> : null}
    </div>
  );
}
